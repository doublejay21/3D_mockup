"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Grid, Environment, Edges, Html, TransformControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useState, useEffect, useRef, Suspense } from "react";
import { Camera, Sun, Moon, Maximize, Map, PaintBucket, Layers, Search, Plus, Trash2, Sofa, Loader2 } from "lucide-react";

// ======================================================
// TYPES
// ======================================================
export type Point2D = { x: number; z: number; };
export type WallData = { id: string; type?: string; start: Point2D; end: Point2D; height?: number; thickness?: number; estimated?: boolean; };
export type RoomData = { id: string; name?: string; polygon?: Point2D[]; height?: number; estimated?: boolean; };
export type DoorData = { id: string; wallId: string; offset?: number; width?: number; height?: number; estimated?: boolean; };
export type WindowData = { id: string; wallId: string; offset?: number; width?: number; height?: number; sillHeight?: number; estimated?: boolean; };
export type HouseData = {
    unit?: string;
    building?: { width?: number; depth?: number; estimated?: boolean; };
    rooms?: RoomData[];
    walls?: WallData[];
    doors?: DoorData[];
    windows?: WindowData[];
    columns?: unknown[];
    stairs?: unknown[];
};

export type PlacedItem = {
    id: string;
    itemCode: string;
    name: string;
    modelUrl: string;
    position: [number, number, number];
    rotation: [number, number, number];
};

// ======================================================
// HELPERS
// ======================================================
const safeNumber = (value: unknown, fallback: number) => {
    const num = Number(value);
    return Number.isFinite(num) ? num : fallback;
};

const isValidPoint = (point: unknown): point is Point2D => {
    if (!point || typeof point !== "object") return false;
    const p = point as Point2D;
    return Number.isFinite(Number(p.x)) && Number.isFinite(Number(p.z));
};

const getRoomColor = (name?: string) => {
    const n = (name || '').toLowerCase();
    if (n.includes('bath') || n.includes('toilet') || n.includes('wash')) return '#8c9c9f'; // Cool tile
    if (n.includes('bed')) return '#bfa58a'; // Warm wood
    if (n.includes('kitchen') || n.includes('din')) return '#c2b6ac'; // Warm tile
    if (n.includes('liv') || n.includes('main') || n.includes('hall')) return '#d4d0c5'; // Light wood/carpet
    if (n.includes('balcony') || n.includes('out') || n.includes('park') || n.includes('garage')) return '#9ca3af'; // Concrete
    return '#e2d9c8'; // Default wood
};

// ======================================================
// MATERIALS (Professional Architectural Look)
// ======================================================
const materials = {
    wallDay: new THREE.MeshStandardMaterial({ color: "#f8f9fa", roughness: 0.8, metalness: 0.1 }),
    wallNight: new THREE.MeshStandardMaterial({ color: "#dcdfe4", roughness: 0.9, metalness: 0.1 }),
    floorFallback: new THREE.MeshStandardMaterial({ color: "#cbd5e1", roughness: 0.9, metalness: 0 }),
    door: new THREE.MeshStandardMaterial({ color: "#5c4033", roughness: 0.7, metalness: 0.1 }),
    windowGlass: new THREE.MeshPhysicalMaterial({ color: "#87ceeb", transmission: 0.9, opacity: 1, metalness: 0, roughness: 0, ior: 1.5, thickness: 0.1, transparent: true }),
    windowFrame: new THREE.MeshStandardMaterial({ color: "#333333", roughness: 0.5, metalness: 0.8 })
};

// ======================================================
// COMPONENTS
// ======================================================

function Wall({ wall, doors, windows, isNight, wallColor }: { wall: WallData, doors: DoorData[], windows: WindowData[], isNight: boolean, wallColor: string }) {
    const result = useMemo(() => {
        if (!isValidPoint(wall.start) || !isValidPoint(wall.end)) return null;
        const dx = Number(wall.end.x) - Number(wall.start.x);
        const dz = Number(wall.end.z) - Number(wall.start.z);
        const length = Math.sqrt(dx * dx + dz * dz);
        if (!Number.isFinite(length) || length <= 0) return null;

        const height = safeNumber(wall.height, 2.8);
        const thickness = safeNumber(wall.thickness, 0.15);
        const angle = Math.atan2(dz, dx);
        
        const centerX = (Number(wall.start.x) + Number(wall.end.x)) / 2;
        const centerZ = (Number(wall.start.z) + Number(wall.end.z)) / 2;

        return { length, height, thickness, centerX, centerZ, angle };
    }, [wall]);

    if (!result) return null;

    const wallDoors = doors.filter(d => d.wallId === wall.id);
    const wallWindows = windows.filter(w => w.wallId === wall.id);
    
    // Only show length label if wall is long enough
    const showLabel = result.length > 0.5;

    return (
        <group position={[result.centerX, 0, result.centerZ]} rotation={[0, -result.angle, 0]}>
            {/* Main Wall Body */}
            <mesh position={[0, result.height / 2, 0]} castShadow receiveShadow>
                <boxGeometry args={[result.length, result.height, result.thickness]} />
                <meshStandardMaterial color={isNight ? "#dcdfe4" : wallColor} roughness={0.8} metalness={0.1} />
                <Edges scale={1.001} threshold={15} color={isNight ? "#9ca3af" : "#d1d5db"} />
            </mesh>

            {/* Wall Length Label */}
            {showLabel && (
                <Html position={[0, result.height + 0.3, 0]} center zIndexRange={[100, 0]}>
                    <div style={{
                        background: 'rgba(0,0,0,0.65)', color: 'white', padding: '2px 6px',
                        borderRadius: '4px', fontSize: '11px', fontWeight: '500',
                        whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
                        backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {result.length.toFixed(2)}m
                    </div>
                </Html>
            )}

            {/* Doors */}
            {wallDoors.map((door, i) => {
                const w = safeNumber(door.width, 0.9);
                const h = safeNumber(door.height, 2.1);
                const offset = safeNumber(door.offset, result.length / 2 - w / 2);
                const posX = offset - (result.length / 2); 
                return (
                    <group key={`door-${i}`} position={[posX, h / 2, 0]}>
                        <mesh castShadow receiveShadow material={materials.door}>
                            <boxGeometry args={[w, h, result.thickness + 0.02]} />
                            <Edges scale={1.001} color="#3b2f2f" />
                        </mesh>
                    </group>
                );
            })}

            {/* Windows */}
            {wallWindows.map((win, i) => {
                const w = safeNumber(win.width, 1.2);
                const h = safeNumber(win.height, 1.2);
                const sill = safeNumber(win.sillHeight, 0.9);
                const offset = safeNumber(win.offset, result.length / 2 - w / 2);
                const posX = offset - (result.length / 2);
                return (
                    <group key={`win-${i}`} position={[posX, sill + h / 2, 0]}>
                        <mesh castShadow receiveShadow material={materials.windowFrame}>
                            <boxGeometry args={[w, h, result.thickness + 0.04]} />
                        </mesh>
                        <mesh material={materials.windowGlass}>
                            <boxGeometry args={[w - 0.1, h - 0.1, result.thickness + 0.05]} />
                        </mesh>
                    </group>
                );
            })}
        </group>
    );
}

function RoomFloor({ room, floorTextureUrl }: { room: RoomData, floorTextureUrl: string | null }) {
    const { geometry, labelPos } = useMemo(() => {
        const polygon = Array.isArray(room.polygon) ? room.polygon.filter(isValidPoint) : [];
        if (polygon.length < 3) return { geometry: null, labelPos: [0,0,0] as [number,number,number] };
        
        let minX = Infinity, minZ = Infinity;
        const shape = new THREE.Shape();
        shape.moveTo(Number(polygon[0].x), -Number(polygon[0].z));
        
        polygon.forEach((p, i) => {
            if (p.x < minX) minX = p.x;
            if (p.z < minZ) minZ = p.z;
            if (i > 0) shape.lineTo(Number(p.x), -Number(p.z));
        });
        shape.closePath();
        
        // Offset slightly inward from the absolute top-left corner
        return { 
            geometry: new THREE.ShapeGeometry(shape),
            labelPos: [minX + 0.5, 0.05, minZ + 0.5] as [number, number, number]
        };
    }, [room]);

    const [loadedTexture, setLoadedTexture] = useState<THREE.Texture | null>(null);

    useEffect(() => {
        if (!floorTextureUrl) {
            setLoadedTexture(null);
            return;
        }
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');
        loader.load(floorTextureUrl, (tex) => {
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(2, 2);
            setLoadedTexture(tex);
        });
    }, [floorTextureUrl]);

    const material = useMemo(() => {
        if (loadedTexture) {
            return new THREE.MeshStandardMaterial({
                map: loadedTexture,
                roughness: 0.7,
                metalness: 0
            });
        }
        return new THREE.MeshStandardMaterial({ 
            color: getRoomColor(room.name), 
            roughness: 0.85, 
            metalness: 0 
        });
    }, [room.name, loadedTexture]);

    if (!geometry) return null;

    return (
        <group position={[0, -0.02, 0]}>
            <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} receiveShadow material={material} />
            {room.name && (
                <Html position={labelPos} center zIndexRange={[50, 0]}>
                    <div style={{
                        color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 'bold',
                        textShadow: '0px 2px 4px rgba(0,0,0,0.8)', pointerEvents: 'none',
                        textTransform: 'uppercase', letterSpacing: '1px',
                        textAlign: 'left', whiteSpace: 'nowrap'
                    }}>
                        {room.name}
                    </div>
                </Html>
            )}
        </group>
    );
}

function BuildingFloor({ house, bounds, floorTextureUrl }: { house: HouseData, bounds: any, floorTextureUrl: string | null }) {
    let width = safeNumber(house.building?.width, 0);
    let depth = safeNumber(house.building?.depth, 0);
    let posX = width / 2;
    let posZ = depth / 2;
    if (width <= 0 || depth <= 0) { width = bounds.width; depth = bounds.depth; posX = bounds.centerX; posZ = bounds.centerZ; }
    if (width <= 0 || depth <= 0) return null;

    const [loadedTexture, setLoadedTexture] = useState<THREE.Texture | null>(null);

    useEffect(() => {
        if (!floorTextureUrl) {
            setLoadedTexture(null);
            return;
        }
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');
        loader.load(floorTextureUrl, (tex) => {
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(width / 5, depth / 5); 
            setLoadedTexture(tex);
        });
    }, [floorTextureUrl, width, depth]);

    return (
        <mesh position={[posX, -0.03, posZ]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[width, depth]} />
            <meshStandardMaterial map={loadedTexture} color={loadedTexture ? "#ffffff" : "#cbd5e1"} roughness={0.9} metalness={0} />
        </mesh>
    );
}

function getHouseBounds(house: HouseData) {
    const walls = Array.isArray(house.walls) ? house.walls : [];
    const xs: number[] = []; const zs: number[] = [];
    walls.forEach(wall => {
        if (isValidPoint(wall.start)) { xs.push(Number(wall.start.x)); zs.push(Number(wall.start.z)); }
        if (isValidPoint(wall.end)) { xs.push(Number(wall.end.x)); zs.push(Number(wall.end.z)); }
    });
    if (xs.length === 0 || zs.length === 0) {
        const width = safeNumber(house.building?.width, 6);
        const depth = safeNumber(house.building?.depth, 6);
        return { minX: 0, maxX: width, minZ: 0, maxZ: depth, width, depth, centerX: width / 2, centerZ: depth / 2 };
    }
    const minX = Math.min(...xs); const maxX = Math.max(...xs);
    const minZ = Math.min(...zs); const maxZ = Math.max(...zs);
    return { minX, maxX, minZ, maxZ, width: maxX - minX, depth: maxZ - minZ, centerX: (minX + maxX) / 2, centerZ: (minZ + maxZ) / 2 };
}

// ======================================================
// CAMERA CONTROLLER
// ======================================================
function CameraController({ mode, bounds }: { mode: 'orbit' | 'top', bounds: any }) {
    const { camera, controls } = useThree();
    
    useEffect(() => {
        if (!controls) return;
        const ctrl = controls as any;
        
        if (mode === 'top') {
            const maxD = Math.max(bounds.width, bounds.depth);
            camera.position.set(0, maxD * 1.5, 0);
            ctrl.target.set(0, 0, 0);
            ctrl.maxPolarAngle = 0; // Lock to top down
            ctrl.minPolarAngle = 0;
            ctrl.update();
        } else {
            camera.position.set(bounds.width * 1.2, bounds.width * 1.0, bounds.width * 1.2);
            ctrl.target.set(0, 0.5, 0);
            ctrl.maxPolarAngle = Math.PI / 2 - 0.05; // Prevent going under floor
            ctrl.minPolarAngle = 0.1;
            ctrl.update();
        }
    }, [mode, camera, controls, bounds]);

    return null;
}

// ======================================================
// 3D FURNITURE PLACEMENT COMPONENT
// ======================================================
function FurnitureItem({ item, onUpdate, onRemove }: { item: PlacedItem, onUpdate: (id: string, pos: any) => void, onRemove: (id: string) => void }) {
    const { scene } = useGLTF(item.modelUrl);
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    return (
        <TransformControls 
            mode="translate" 
            position={item.position}
            onMouseUp={(e: any) => {
                if (e && e.target && e.target.object) {
                    onUpdate(item.id, e.target.object.position);
                }
            }}
        >
            <group>
                <primitive object={clonedScene} />
                <Html position={[0, 1.5, 0]} center>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onRemove(item.id); }}
                        style={{ background: '#ef4444', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                    >
                        <Trash2 size={12} />
                    </button>
                </Html>
            </group>
        </TransformControls>
    );
}

// ======================================================
// MAIN VIEWER
// ======================================================
export default function House3DViewer({ house }: { house: HouseData }) {
    const [mode, setMode] = useState<'orbit' | 'top'>('orbit');
    const [isNight, setIsNight] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // New states for Materials Phase 1
    const [wallColor, setWallColor] = useState<string>('#f8f9fa');
    const [floorTextureUrl, setFloorTextureUrl] = useState<string | null>(null);
    const [showMaterialPanel, setShowMaterialPanel] = useState(false);

    // New states for IKEA Furniture Phase 3
    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
    const [loadingModelId, setLoadingModelId] = useState<string | null>(null);

    const floorTextures = [
        { id: 'wood1', name: 'Light Wood', url: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=800&q=80' },
        { id: 'wood2', name: 'Dark Wood', url: 'https://images.unsplash.com/photo-1521105955639-6888c3a1da7c?auto=format&fit=crop&w=800&q=80' },
        { id: 'wood3', name: 'Oak Wood', url: 'https://images.unsplash.com/photo-1581850518616-bcb8077a2336?auto=format&fit=crop&w=800&q=80' },
        { id: 'tile1', name: 'White Tile', url: 'https://images.unsplash.com/photo-1517409264427-0c7f1a8c2f21?auto=format&fit=crop&w=800&q=80' },
        { id: 'tile2', name: 'Grey Tile', url: 'https://images.unsplash.com/photo-1620215714442-9989baebff59?auto=format&fit=crop&w=800&q=80' },
        { id: 'concrete', name: 'Concrete', url: 'https://images.unsplash.com/photo-1516016149174-8394e3305101?auto=format&fit=crop&w=800&q=80' },
    ];

    const wallColors = [
        '#ffffff', '#f8f9fa', '#e2e8f0', '#cbd5e1', '#94a3b8', '#475569',
        '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24',
        '#dbeafe', '#bfdbfe', '#93c5fd', '#3b82f6',
        '#d1fae5', '#a7f3d0', '#6ee7b7', '#10b981',
        '#fce7f3', '#fbcfe8', '#f9a8d4', '#ec4899',
        '#ffedd5', '#fed7aa', '#fdba74', '#f97316'
    ];

    const walls = Array.isArray(house?.walls) ? house.walls : [];
    const rooms = Array.isArray(house?.rooms) ? house.rooms : [];
    const doors = Array.isArray(house?.doors) ? house.doors : [];
    const windows = Array.isArray(house?.windows) ? house.windows : [];
    const validRooms = rooms.filter(r => Array.isArray(r.polygon) && r.polygon.length >= 3);
    const bounds = useMemo(() => getHouseBounds(house), [house]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        setIsSearching(true);
        try {
            const res = await fetch(`http://localhost:8000/api/search?q=${encodeURIComponent(searchQuery)}&limit=10`);
            const data = await res.json();
            
            // Safely extract standard IKEA search format
            let parsedItems = [];
            const nodes = data?.searchResultPage?.products?.main?.items;
            if (Array.isArray(nodes)) {
                parsedItems = nodes.map(i => ({
                    id: i?.product?.itemNo || i?.product?.id || Math.random().toString(),
                    name: i?.product?.name || 'IKEA Item',
                    type: i?.product?.typeName || '',
                    image: i?.product?.mainImageUrl || ''
                })).filter(i => i.id);
                
                // Filter to only include items that actually have a 3D model available
                const validItems = await Promise.all(parsedItems.map(async (item) => {
                    try {
                        const r = await fetch(`http://localhost:8000/api/item/${item.id}/3d`);
                        const d = await r.json();
                        const str = JSON.stringify(d);
                        if (str.match(/https:\/\/[^"]+\.glb/i) || str.match(/https:\/\/[^"]+\.gltf/i)) {
                            return item; // Has 3D model
                        }
                    } catch (e) {}
                    return null;
                }));
                
                let items = validItems.filter(Boolean);
                setSearchResults(items);
                
                if (items.length === 0) {
                    alert("ไม่พบสินค้าที่มีโมเดล 3D จากคำค้นหานี้ครับ ลองเปลี่ยนคำค้นหาดูนะครับ");
                }
            } else {
                setSearchResults([]);
            }
        } catch (err) {
            console.error("Search failed", err);
        }
        setIsSearching(false);
    };

    const handleAddItem = async (itemCode: string, name: string) => {
        setLoadingModelId(itemCode);
        try {
            const res = await fetch(`http://localhost:8000/api/item/${itemCode}/3d`);
            const data = await res.json();
            
            // Find GLB or GLTF URL in the raw JSON response
            const str = JSON.stringify(data);
            const match = str.match(/https:\/\/[^"]+\.glb/i) || str.match(/https:\/\/[^"]+\.gltf/i);
            
            if (match && match[0]) {
                const modelUrl = match[0];
                const newItem: PlacedItem = {
                    id: Math.random().toString(36).substring(7),
                    itemCode,
                    name,
                    modelUrl,
                    position: [0, 0, 0], // Spawn center
                    rotation: [0, 0, 0]
                };
                setPlacedItems(prev => [...prev, newItem]);
                setShowSearchPanel(false); 
            } else {
                alert(`ขออภัยครับ สินค้าชิ้นนี้ (${name}) ไม่มีโมเดล 3D ให้บริการจาก IKEA API`);
            }
        } catch (err) {
            console.error("Failed to load 3D model", err);
            alert("เกิดข้อผิดพลาดในการดึงไฟล์ 3D จากเซิร์ฟเวอร์");
        }
        setLoadingModelId(null);
    };

    if (!house || walls.length === 0) {
        return (
            <div style={{ width: "100%", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", background: "rgba(0,0,0,0.2)", color: "#94a3b8" }}>
                No house data or walls generated.
            </div>
        );
    }

    const takeSnapshot = () => {
        if (!canvasRef.current) return;
        const dataUrl = canvasRef.current.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `ai-interior-snapshot-${Date.now()}.png`;
        a.click();
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <div ref={containerRef} style={{ width: "100%", height: isFullscreen ? "100vh" : "650px", overflow: "hidden", borderRadius: isFullscreen ? "0px" : "14px", position: "relative", backgroundColor: isNight ? "#0f111a" : "#1c1c28" }}>
            
            {/* LEFT FLOATING UI: IKEA SEARCH */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <button 
                    onClick={() => setShowSearchPanel(!showSearchPanel)}
                    style={{ background: showSearchPanel ? 'rgba(99, 102, 241, 0.9)' : 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontSize: '13px' }}
                >
                    <Sofa size={16} /> Add Furniture
                </button>

                {showSearchPanel && (
                    <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px', width: '320px', backdropFilter: 'blur(10px)', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '450px' }}>
                        <h4 style={{ color: 'white', margin: '0', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}><Search size={14} /> Search IKEA</h4>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                placeholder="e.g. Sofa, Billy, Table" 
                                style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.3)', color: 'white', outline: 'none' }}
                            />
                            <button onClick={handleSearch} disabled={isSearching} style={{ background: '#38bdf8', color: '#0f172a', border: 'none', padding: '0 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                                {isSearching ? <Loader2 size={16} className="animate-spin" /> : 'Go'}
                            </button>
                        </div>

                        <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, paddingRight: '4px' }}>
                            {searchResults.length === 0 && !isSearching && <div style={{ color: '#94a3b8', fontSize: '12px', textAlign: 'center', padding: '20px 0' }}>พิมพ์เพื่อค้นหาสินค้าจาก IKEA</div>}
                            {searchResults.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '8px', borderRadius: '8px', alignItems: 'center' }}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} style={{ width: '48px', height: '48px', objectFit: 'contain', background: 'white', borderRadius: '4px' }} />
                                    ) : (
                                        <div style={{ width: '48px', height: '48px', background: '#333', borderRadius: '4px' }} />
                                    )}
                                    <div style={{ flex: 1, overflow: 'hidden' }}>
                                        <div style={{ color: 'white', fontSize: '13px', fontWeight: 'bold', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{item.name}</div>
                                        <div style={{ color: '#94a3b8', fontSize: '11px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{item.type}</div>
                                    </div>
                                    <button 
                                        onClick={() => handleAddItem(item.id, item.name)}
                                        disabled={loadingModelId === item.id}
                                        style={{ background: loadingModelId === item.id ? '#64748b' : '#10b981', color: 'white', border: 'none', width: '28px', height: '28px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        {loadingModelId === item.id ? <Loader2 size={14} className="animate-spin" /> : <Plus size={16} />}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* FLOATING UI OVERLAY */}
            <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10, display: 'flex', gap: '8px', flexDirection: 'column', alignItems: 'flex-end' }}>
                <button 
                    onClick={toggleFullscreen}
                    style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontSize: '13px' }}
                >
                    <Maximize size={16} /> {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </button>
                <button 
                    onClick={() => setMode(m => m === 'orbit' ? 'top' : 'orbit')}
                    style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontSize: '13px' }}
                >
                    {mode === 'orbit' ? <Map size={16} /> : <Maximize size={16} />}
                    {mode === 'orbit' ? 'Blueprint View' : '3D Orbit View'}
                </button>
                
                <button 
                    onClick={() => setIsNight(!isNight)}
                    style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontSize: '13px' }}
                >
                    {isNight ? <Sun size={16} /> : <Moon size={16} />}
                    {isNight ? 'Day Mode' : 'Night Mode'}
                </button>
                
                <button 
                    onClick={takeSnapshot}
                    style={{ background: 'rgba(56, 189, 248, 0.9)', border: 'none', color: '#0f172a', fontWeight: 'bold', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontSize: '13px', marginTop: '8px' }}
                >
                    <Camera size={16} /> Snapshot
                </button>
                <button 
                    onClick={() => setShowMaterialPanel(!showMaterialPanel)}
                    style={{ background: showMaterialPanel ? 'rgba(99, 102, 241, 0.9)' : 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontSize: '13px', marginTop: '4px' }}
                >
                    <PaintBucket size={16} /> Materials
                </button>

                {/* MATERIALS PANEL */}
                {showMaterialPanel && (
                    <div style={{ background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px', width: '280px', backdropFilter: 'blur(10px)', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '400px', overflowY: 'auto' }}>
                        <div>
                            <h4 style={{ color: 'white', margin: '0 0 8px 0', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}><PaintBucket size={14} /> Wall Colors</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px', marginBottom: '12px' }}>
                                {wallColors.map(color => (
                                    <div 
                                        key={color} 
                                        onClick={() => setWallColor(color)}
                                        style={{ width: '100%', aspectRatio: '1/1', backgroundColor: color, borderRadius: '6px', cursor: 'pointer', border: wallColor === color ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}
                                        title={color}
                                    />
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <input 
                                    type="color" 
                                    value={wallColor} 
                                    onChange={(e) => setWallColor(e.target.value)}
                                    style={{ width: '40px', height: '40px', padding: 0, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', cursor: 'pointer', background: 'transparent' }}
                                    title="Choose Custom Color (Eyedropper)"
                                />
                                <input 
                                    type="text" 
                                    value={wallColor} 
                                    onChange={(e) => setWallColor(e.target.value)}
                                    placeholder="#FFFFFF"
                                    style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.3)', color: 'white', outline: 'none', fontSize: '13px', textTransform: 'uppercase' }}
                                />
                            </div>
                        </div>

                        <div>
                            <h4 style={{ color: 'white', margin: '0 0 8px 0', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}><Layers size={14} /> Floor Textures</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                <div 
                                    onClick={() => setFloorTextureUrl(null)}
                                    style={{ background: '#333', color: '#94a3b8', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', borderRadius: '8px', cursor: 'pointer', border: floorTextureUrl === null ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    Default
                                </div>
                                {floorTextures.map((tex) => (
                                    <div 
                                        key={tex.id}
                                        onClick={() => setFloorTextureUrl(tex.url)}
                                        style={{ 
                                            height: '60px', borderRadius: '8px', cursor: 'pointer',
                                            backgroundImage: `url(${tex.url})`, backgroundSize: 'cover', backgroundPosition: 'center',
                                            border: floorTextureUrl === tex.url ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)'
                                        }}
                                        title={tex.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Canvas ref={canvasRef} shadows gl={{ antialias: true, preserveDrawingBuffer: true }}>
                <CameraController mode={mode} bounds={bounds} />

                {/* BACKGROUND & ENVIRONMENT */}
                <color attach="background" args={[isNight ? "#0f111a" : "#1c1c28"]} />
                <Environment preset={isNight ? "night" : "city"} />
                
                {/* LIGHTING LOGIC */}
                {isNight ? (
                    <>
                        <ambientLight intensity={0.2} />
                        {/* Interior warm lights simulated */}
                        <pointLight position={[0, 2, 0]} intensity={1.5} color="#fcd34d" distance={10} castShadow />
                        <directionalLight position={[5, 10, 5]} intensity={0.3} color="#93c5fd" castShadow />
                    </>
                ) : (
                    <>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} />
                        <directionalLight position={[-10, 10, -10]} intensity={0.5} />
                    </>
                )}

                {/* HOUSE MODEL */}
                <group position={[-bounds.centerX, 0, -bounds.centerZ]}>
                    <BuildingFloor house={house} bounds={bounds} floorTextureUrl={floorTextureUrl} />
                    {validRooms.length > 0 && validRooms.map(r => <RoomFloor key={r.id} room={r} floorTextureUrl={floorTextureUrl} />)}
                    {walls.map((wall, idx) => <Wall key={wall.id || `w-${idx}`} wall={wall} doors={doors} windows={windows} isNight={isNight} wallColor={wallColor} />)}
                    
                    {/* PLACED FURNITURE */}
                    <Suspense fallback={null}>
                        {placedItems.map(item => (
                            <FurnitureItem 
                                key={item.id} 
                                item={item} 
                                onUpdate={(id, pos) => {
                                    setPlacedItems(items => items.map(i => i.id === id ? { ...i, position: [pos.x, pos.y, pos.z] } : i));
                                }} 
                                onRemove={(id) => {
                                    setPlacedItems(items => items.filter(i => i.id !== id));
                                }} 
                            />
                        ))}
                    </Suspense>
                </group>

                {/* GRID FOR ARCHITECTURAL FEEL */}
                <Grid position={[0, -0.01, 0]} args={[50, 50]} cellSize={1} cellThickness={0.5} cellColor={isNight ? "#2a2a3a" : "#4a4a5a"} sectionSize={5} sectionThickness={1} sectionColor={isNight ? "#3d3d5c" : "#6d6d8c"} fadeDistance={40} infiniteGrid />

                <OrbitControls makeDefault enablePan enableZoom enableRotate />
            </Canvas>
        </div>
    );
}