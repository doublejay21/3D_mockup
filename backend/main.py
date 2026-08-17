from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import ikea_api

app = FastAPI()

# Allow Next.js frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize IKEA API Constants
constants = ikea_api.Constants(country="us", language="en")
search_api = ikea_api.Search(constants)
rotera_api = ikea_api.RoteraItem(constants)
pip_api = ikea_api.PipItem(constants)

@app.get("/api/search")
async def search_items(q: str, limit: int = 24):
    try:
        endpoint = search_api.search(q, limit=limit)
        response = await ikea_api.run_async(endpoint)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/item/{item_code}")
async def get_item_info(item_code: str):
    try:
        endpoint = pip_api.get_item(item_code)
        response = await ikea_api.run_async(endpoint)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/item/{item_code}/3d")
async def get_item_3d(item_code: str):
    try:
        endpoint = rotera_api.get_item(item_code)
        response = await ikea_api.run_async(endpoint)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
