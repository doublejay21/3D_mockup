from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

POLY_HAVEN_ASSETS_URL = "https://api.polyhaven.com/assets?t=models"
POLY_HAVEN_FILE_URL = "https://api.polyhaven.com/files/{id}"

@app.get("/api/search")
async def search_items(q: str = "", limit: int = 24):
    try:
        async with httpx.AsyncClient(headers={'User-Agent': 'Mozilla/5.0'}) as client:
            response = await client.get(POLY_HAVEN_ASSETS_URL)
            response.raise_for_status()
            assets = response.json()
            
        results = []
        q_lower = q.lower()
        
        for asset_id, asset_data in assets.items():
            name = asset_data.get('name', '')
            tags = asset_data.get('tags', [])
            categories = asset_data.get('categories', [])
            
            if not q_lower or q_lower in name.lower() or any(q_lower in tag.lower() for tag in tags) or any(q_lower in cat.lower() for cat in categories):
                results.append({
                    "id": asset_id,
                    "name": name,
                    "type": categories[0] if categories else "Model",
                    "image": asset_data.get('thumbnail_url', f"https://cdn.polyhaven.com/asset_img/thumbs/{asset_id}.png")
                })
                
                if len(results) >= limit:
                    break
                    
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/item/{item_code}/3d")
async def get_item_3d(item_code: str):
    # Simply point the frontend to our new proxy endpoint
    return {"modelUrl": f"http://localhost:8000/api/item/{item_code}/gltf"}

@app.get("/api/item/{item_code}/gltf")
async def get_item_gltf(item_code: str):
    try:
        async with httpx.AsyncClient(headers={'User-Agent': 'Mozilla/5.0'}) as client:
            # 1. Get Poly Haven file info
            response = await client.get(POLY_HAVEN_FILE_URL.format(id=item_code))
            response.raise_for_status()
            data = response.json()
            
            # Prefer 1k or 2k for web performance
            gltf_url = None
            include_map = {}
            if 'gltf' in data:
                gltf_data = data['gltf']
                selected_res = '1k' if '1k' in gltf_data else ('2k' if '2k' in gltf_data else ('4k' if '4k' in gltf_data else None))
                if selected_res and 'gltf' in gltf_data[selected_res]:
                    gltf_url = gltf_data[selected_res]['gltf']['url']
                    include_map = gltf_data[selected_res]['gltf'].get('include', {})
            
            if not gltf_url:
                raise Exception("GLTF format not found for this model.")
                
            # 2. Fetch the actual GLTF file (JSON)
            gltf_resp = await client.get(gltf_url)
            gltf_resp.raise_for_status()
            gltf_content = gltf_resp.json()
            
            # 3. Rewrite relative URIs in buffers and images
            for buffer in gltf_content.get('buffers', []):
                uri = buffer.get('uri')
                if uri and uri in include_map:
                    buffer['uri'] = include_map[uri]['url']
                    
            for image in gltf_content.get('images', []):
                uri = image.get('uri')
                if uri and uri in include_map:
                    image['uri'] = include_map[uri]['url']
                    
            return gltf_content
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
