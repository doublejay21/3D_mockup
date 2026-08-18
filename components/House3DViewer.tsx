"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Grid, Environment, Edges, Html, TransformControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useState, useEffect, useRef, Suspense, Component, ReactNode } from "react";
import { Camera, Sun, Moon, Maximize, Map, PaintBucket, Layers, Search, Plus, Trash2, Sofa, Loader2, RotateCcw, Eye, Move } from "lucide-react";

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

function Wall({ wall, doors, windows, isNight, wallColor, isSelected, onSelect }: { wall: WallData, doors: DoorData[], windows: WindowData[], isNight: boolean, wallColor: string, isSelected: boolean, onSelect: () => void }) {
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
        <group position={[result.centerX, 0, result.centerZ]} rotation={[0, -result.angle, 0]} onClick={(e) => { e.stopPropagation(); onSelect(); }}>
            {/* Main Wall Body */}
            <mesh position={[0, result.height / 2, 0]} castShadow receiveShadow>
                <boxGeometry args={[result.length, result.height, result.thickness]} />
                <meshStandardMaterial color={isNight ? "#dcdfe4" : wallColor} roughness={0.8} metalness={0.1} emissive={isSelected ? "#38bdf8" : "#000000"} emissiveIntensity={isSelected ? 0.3 : 0} />
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

function RoomFloor({ room, floorTextureUrl, isSelected, onSelect }: { room: RoomData, floorTextureUrl: string | null, isSelected: boolean, onSelect: () => void }) {
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
        loader.load(
            floorTextureUrl, 
            (tex) => {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(2, 2);
                tex.colorSpace = THREE.SRGBColorSpace;
                setLoadedTexture(tex);
            },
            undefined,
            (err) => console.error("Error loading floor texture:", err)
        );
    }, [floorTextureUrl]);

    if (!geometry) return null;

    return (
        <group position={[0, -0.02, 0]} onClick={(e) => { e.stopPropagation(); onSelect(); }}>
            <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <meshStandardMaterial 
                    key={loadedTexture ? loadedTexture.uuid : 'none'}
                    map={loadedTexture || undefined} 
                    color={loadedTexture ? "#ffffff" : getRoomColor(room.name)} 
                    roughness={0.8} 
                    metalness={0.1} 
                    emissive={isSelected ? "#38bdf8" : "#000000"} 
                    emissiveIntensity={isSelected ? 0.3 : 0}
                />
            </mesh>
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

function BuildingFloor({ house, bounds, floorTextureUrl, isSelected, onSelect }: { house: HouseData, bounds: any, floorTextureUrl: string | null, isSelected: boolean, onSelect: () => void }) {
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
        loader.load(
            floorTextureUrl, 
            (tex) => {
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(width / 2, depth / 2);
                tex.colorSpace = THREE.SRGBColorSpace;
                setLoadedTexture(tex);
            },
            undefined,
            (err) => console.error("Error loading building floor texture:", err)
        );
    }, [floorTextureUrl, width, depth]);

    return (
        <group position={[posX, -0.04, posZ]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow onClick={(e) => { e.stopPropagation(); onSelect(); }}>
                <planeGeometry args={[width, depth]} />
                <meshStandardMaterial 
                    key={loadedTexture ? loadedTexture.uuid : 'none'}
                    map={loadedTexture || undefined} 
                    color={loadedTexture ? "#ffffff" : materials.floorFallback.color} 
                    roughness={0.9} 
                    metalness={0} 
                    emissive={isSelected ? "#38bdf8" : "#000000"} 
                    emissiveIntensity={isSelected ? 0.3 : 0}
                />
            </mesh>
        </group>
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
function CameraController({ mode, bounds }: { mode: 'orbit' | 'top' | 'person', bounds: any }) {
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
        } else if (mode === 'person') {
            camera.position.set(0, 1.6, 2); // 1.6m eye level
            ctrl.target.set(0, 1.6, 0);
            ctrl.maxPolarAngle = Math.PI; // Full look around
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
function FurnitureItem({ item, isSelected, transformMode, onSelect, onUpdate, setDragContext }: { item: PlacedItem, isSelected: boolean, transformMode: 'translate' | 'rotate', onSelect: () => void, onUpdate: (id: string, pos: any, rot: any) => void, setDragContext?: any }) {
    const { scene } = useGLTF(item.modelUrl);
    
    // Process the scene once to center it and place it on the floor
    const processedScene = useMemo(() => {
        const c = scene.clone();
        
        // Calculate bounding box of the original model
        const box = new THREE.Box3().setFromObject(c);
        const center = box.getCenter(new THREE.Vector3());
        
        // Offset the original scene so its bottom is at Y=0 and it is centered on X/Z
        c.position.x = -center.x;
        c.position.y = -box.min.y;
        c.position.z = -center.z;
        
        // Create a wrapper group. The TransformControls will move this group.
        const wrapper = new THREE.Group();
        wrapper.add(c);
        return wrapper;
    }, [scene]);

    useEffect(() => {
        processedScene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [processedScene]);

    return (
        <group 
            onClick={(e) => { e.stopPropagation(); onSelect(); }}
            onPointerDown={(e) => {
                if (isSelected && setDragContext) {
                    e.stopPropagation();
                    setDragContext({
                        id: item.id,
                        offsetX: item.position[0] - e.point.x,
                        offsetZ: item.position[2] - e.point.z
                    });
                }
            }}
        >
            <primitive object={processedScene} position={item.position} rotation={item.rotation} />
        </group>
    );
}

class FurnitureErrorBoundary extends Component<{position: any, children: ReactNode}, {hasError: boolean}> {
    constructor(props: any) { super(props); this.state = { hasError: false }; }
    static getDerivedStateFromError() { return { hasError: true }; }
    render() {
        if (this.state.hasError) {
            return (
                <group position={this.props.position}>
                    <Html center>
                        <div style={{ background: 'rgba(220,38,38,0.9)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap' }}>
                            Failed to load model
                        </div>
                    </Html>
                </group>
            );
        }
        return this.props.children;
    }
}

function FurnitureLoading({ position }: { position: any }) {
    return (
        <group position={position}>
            <Html center>
                <div style={{ background: 'rgba(0,0,0,0.8)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Loading 3D...
                    </div>
                </div>
            </Html>
        </group>
    );
}

// ======================================================
// CUSTOM DRAG CONTROLLER
// ======================================================
function DragController({ dragContext, setDragContext, onUpdate }: { dragContext: {id: string, offsetX: number, offsetZ: number} | null, setDragContext: any, onUpdate: any }) {
    const { camera, raycaster, gl } = useThree();
    const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);

    useEffect(() => {
        if (!dragContext) return;

        const handlePointerMove = (e: PointerEvent) => {
            const rect = gl.domElement.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            
            const pointerCoords = new THREE.Vector2(x, y);
            raycaster.setFromCamera(pointerCoords, camera);
            const target = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, target);
            
            if (target) {
                onUpdate(dragContext.id, {
                    x: target.x + dragContext.offsetX,
                    y: 0,
                    z: target.z + dragContext.offsetZ
                });
            }
        };

        const handlePointerUp = () => {
            if (setDragContext) {
                setDragContext(null, Date.now()); // Pass timestamp to indicate when drag ended
            }
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [dragContext, camera, raycaster, gl, onUpdate, setDragContext, plane]);

    return null;
}

// ======================================================
// MAIN VIEWER
// ======================================================
export default function House3DViewer({ house }: { house: HouseData }) {
    const [mode, setMode] = useState<'orbit' | 'top' | 'person'>('orbit');
    const [isNight, setIsNight] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // New states for Materials Phase 1 (Upgraded)
    const [wallColorsMap, setWallColorsMap] = useState<Record<string, string>>({});
    const [floorTexturesMap, setFloorTexturesMap] = useState<Record<string, string | null>>({});
    const [showMaterialPanel, setShowMaterialPanel] = useState(false);
    const [selectedElement, setSelectedElement] = useState<{type: 'wall'|'floor', id: string} | null>(null);

    // New states for IKEA Furniture Phase 3
    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
    const [loadingModelId, setLoadingModelId] = useState<string | null>(null);

    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [transformMode, setTransformMode] = useState<'translate' | 'rotate'>('translate');
    const [dragContext, setDragContextState] = useState<{ id: string, offsetX: number, offsetZ: number } | null>(null);
    const dragEndTimeRef = useRef<number>(0);

    const setDragContext = (ctx: any, endTime?: number) => {
        if (endTime) dragEndTimeRef.current = endTime;
        setDragContextState(ctx);
    };
    
    const selectedItem = useMemo(() => placedItems.find(i => i.id === selectedItemId), [placedItems, selectedItemId]);

    const floorTextures = [
        { id: 'wood1', name: 'Hardwood', url: 'https://threejs.org/examples/textures/hardwood2_diffuse.jpg' },
        { id: 'wood2', name: 'Dark Wood', url: 'https://threejs.org/examples/textures/crate.gif' },
        { id: 'grass', name: 'Grass', url: 'https://threejs.org/examples/textures/terrain/grasslight-big.jpg' },
        { id: 'brick', name: 'Red Brick', url: 'https://threejs.org/examples/textures/brick_diffuse.jpg' },
        { id: 'concrete', name: 'Concrete', url: 'https://threejs.org/examples/textures/planets/moon_1024.jpg' },
        { id: 'water', name: 'Water Pool', url: 'https://threejs.org/examples/textures/water.jpg' },
        { id: 'grid', name: 'Blueprint Grid', url: 'https://threejs.org/examples/textures/uv_grid_opengl.jpg' },
        { id: 'lava', name: 'Lava', url: 'https://threejs.org/examples/textures/lava/lavatile.jpg' }
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
            setSearchResults(data || []);
            if (!data || data.length === 0) {
                alert("ไม่พบโมเดล 3D จากคำค้นหานี้ครับ ลองเปลี่ยนคำค้นหาเป็นภาษาอังกฤษ เช่น chair, table, sofa ดูนะครับ");
            }
        } catch (e) {
            console.error(e);
            alert("Error searching for items");
        }
        setIsSearching(false);
    };

    const handleAddItem = async (itemCode: string, name: string, preFetchedUrl?: string) => {
        if (loadingModelId) return;
        setLoadingModelId(itemCode);
        
        let urlToLoad = preFetchedUrl;
        
        if (!urlToLoad) {
            try {
                const res = await fetch(`http://localhost:8000/api/item/${itemCode}/3d`);
                const data = await res.json();
                if (data.modelUrl) {
                    urlToLoad = data.modelUrl;
                } else {
                    const str = JSON.stringify(data);
                    const match = str.match(/(https:\/\/[^"']*\.(glb|gltf))/i);
                    if (match) urlToLoad = match[1];
                }
            } catch (e) {
                console.error("Failed to load 3D model", e);
                alert("เกิดข้อผิดพลาดในการดึงไฟล์ 3D จากเซิร์ฟเวอร์");
            }
        }

        if (urlToLoad) {
            const newItem: PlacedItem = {
                id: Math.random().toString(36).substring(7),
                itemCode,
                name,
                modelUrl: urlToLoad,
                position: [bounds.centerX, 0, bounds.centerZ],
                rotation: [0, 0, 0]
            };
            setPlacedItems(prev => [...prev, newItem]);
            setShowSearchPanel(false); 
        } else {
            alert(`ขออภัยครับ สินค้าชิ้นนี้ (${name}) ไม่มีโมเดล 3D ให้บริการ`);
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
        <div ref={containerRef} style={{ width: "100%", height: isFullscreen ? "100vh" : "650px", overflow: "hidden", borderRadius: isFullscreen ? "0px" : "14px", position: "relative", backgroundColor: isNight ? "#0f111a" : "#1c1c28", fontFamily: 'system-ui, sans-serif' }}>
            
            {/* LEFT FLOATING UI: IKEA SEARCH */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                <button onClick={() => setShowSearchPanel(!showSearchPanel)} style={{ background: showSearchPanel ? 'rgba(99, 102, 241, 0.9)' : 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(12px)', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <Sofa size={16} /> Add Furniture
                </button>
                {showSearchPanel && (
                    <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '16px', width: '320px', backdropFilter: 'blur(16px)', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', maxHeight: '450px' }}>
                        <h4 style={{ color: 'white', margin: '0', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}><Search size={16} /> Catalog</h4>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder="e.g. Sofa, Billy, Table" style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.4)', color: 'white', outline: 'none', fontSize: '13px' }} />
                            <button onClick={handleSearch} disabled={isSearching} style={{ background: '#38bdf8', color: '#0f172a', border: 'none', padding: '0 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                                {isSearching ? <Loader2 size={16} className="animate-spin" /> : 'Go'}
                            </button>
                        </div>
                        <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, paddingRight: '4px' }}>
                            {searchResults.length === 0 && !isSearching && <div style={{ color: '#94a3b8', fontSize: '12px', textAlign: 'center', padding: '20px 0' }}>Search for Poly Haven models (e.g. Sofa, Chair) to add them to your room.</div>}
                            {searchResults.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '8px', borderRadius: '10px', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} style={{ width: '48px', height: '48px', objectFit: 'contain', background: 'white', borderRadius: '6px' }} />
                                    ) : (
                                        <div style={{ width: '48px', height: '48px', background: '#333', borderRadius: '6px' }} />
                                    )}
                                    <div style={{ flex: 1, overflow: 'hidden' }}>
                                        <div style={{ color: 'white', fontSize: '13px', fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{item.name}</div>
                                        <div style={{ color: '#94a3b8', fontSize: '11px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', marginTop: '2px' }}>{item.type}</div>
                                    </div>
                                    <button onClick={() => handleAddItem(item.id, item.name, item.modelUrl)} disabled={loadingModelId === item.id} style={{ background: loadingModelId === item.id ? 'rgba(255,255,255,0.1)' : '#10b981', color: 'white', border: 'none', width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {loadingModelId === item.id ? <Loader2 size={16} className="animate-spin" /> : <Plus size={18} />}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* RIGHT FLOATING UI: GLOBAL CONTROLS */}
            <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <button onClick={toggleFullscreen} style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(12px)', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <Maximize size={16} /> {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </button>
                <button onClick={() => { if (mode === 'orbit') setMode('top'); else if (mode === 'top') setMode('person'); else setMode('orbit'); }} style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(12px)', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {mode === 'orbit' ? <Map size={16} /> : mode === 'top' ? <Eye size={16} /> : <Maximize size={16} />}
                    {mode === 'orbit' ? 'Blueprint View' : mode === 'top' ? 'First Person View' : '3D Orbit View'}
                </button>
                <button onClick={() => setIsNight(!isNight)} style={{ background: 'rgba(15, 23, 42, 0.65)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '8px 12px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(12px)', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {isNight ? <Sun size={16} /> : <Moon size={16} />}
                    {isNight ? 'Day Mode' : 'Night Mode'}
                </button>
                <button onClick={takeSnapshot} style={{ background: 'rgba(56, 189, 248, 0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#0f172a', fontWeight: 'bold', padding: '8px 12px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(12px)', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <Camera size={16} /> Snapshot
                </button>
                <button onClick={() => setShowMaterialPanel(!showMaterialPanel)} style={{ background: 'rgba(16, 185, 129, 0.8)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontWeight: 'bold', padding: '8px 12px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(12px)', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <PaintBucket size={16} /> Materials
                </button>

                {/* MATERIAL PANEL */}
                {showMaterialPanel && (
                    <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '16px', width: '280px', backdropFilter: 'blur(16px)', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', maxHeight: '400px', overflowY: 'auto' }}>
                        {!selectedElement ? (
                            <div style={{ color: '#94a3b8', fontSize: '13px', textAlign: 'center', padding: '20px 0' }}>
                                Please click on a wall or floor in the 3D view to change its material.
                            </div>
                        ) : selectedElement.type === 'wall' ? (
                            <div>
                                <h4 style={{ color: 'white', margin: '0 0 12px 0', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}><PaintBucket size={14} /> Wall Color</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <input type="color" value={wallColorsMap[selectedElement.id] || '#f8f9fa'} onChange={(e) => setWallColorsMap(prev => ({...prev, [selectedElement.id]: e.target.value}))} style={{ width: '32px', height: '32px', padding: '0', border: 'none', borderRadius: '6px', cursor: 'pointer', background: 'transparent' }} />
                                    <input type="text" value={wallColorsMap[selectedElement.id] || '#f8f9fa'} onChange={(e) => setWallColorsMap(prev => ({...prev, [selectedElement.id]: e.target.value}))} placeholder="#FFFFFF" style={{ flex: 1, padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.3)', color: 'white', outline: 'none', fontSize: '13px' }} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px' }}>
                                    {wallColors.map((color) => (
                                        <div key={color} onClick={() => setWallColorsMap(prev => ({...prev, [selectedElement.id]: color}))} style={{ width: '100%', aspectRatio: '1/1', backgroundColor: color, borderRadius: '6px', cursor: 'pointer', border: (wallColorsMap[selectedElement.id] || '#f8f9fa') === color ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)' }} />
                                    ))}
                                </div>
                                <button 
                                    onClick={() => {
                                        const currentColor = wallColorsMap[selectedElement.id] || '#f8f9fa';
                                        const newMap = { ...wallColorsMap };
                                        walls.forEach(w => newMap[w.id] = currentColor);
                                        setWallColorsMap(newMap);
                                    }}
                                    style={{ marginTop: '16px', width: '100%', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '8px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'}
                                >
                                    Apply to All Walls
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h4 style={{ color: 'white', margin: '0 0 12px 0', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}><Layers size={14} /> Floor Texture</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                    <div onClick={() => setFloorTexturesMap(prev => ({...prev, [selectedElement.id]: null}))} style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', borderRadius: '8px', cursor: 'pointer', border: (floorTexturesMap[selectedElement.id] === undefined || floorTexturesMap[selectedElement.id] === null) ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)' }}>
                                        Default
                                    </div>
                                    {floorTextures.map((tex) => (
                                        <div key={tex.id} onClick={() => setFloorTexturesMap(prev => ({...prev, [selectedElement.id]: tex.url}))} style={{ height: '60px', borderRadius: '8px', cursor: 'pointer', backgroundImage: `url(${tex.url})`, backgroundSize: 'cover', backgroundPosition: 'center', border: floorTexturesMap[selectedElement.id] === tex.url ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)' }} title={tex.name} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* RIGHT PROPERTIES PANEL (SLIDES IN WHEN ITEM SELECTED) */}
            <div style={{ position: 'absolute', top: '16px', right: selectedItemId ? '250px' : '-350px', zIndex: 10, transition: 'right 0.3s cubic-bezier(0.4, 0, 0.2, 1)', width: '280px' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', width: '100%', backdropFilter: 'blur(16px)', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                    {selectedItem ? (
                        <>
                            <div>
                                <h4 style={{ color: 'white', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{selectedItem.name}</h4>
                                <div style={{ color: '#94a3b8', fontSize: '13px' }}>Selected Item</div>
                            </div>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <button 
                                    style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', border: '1px solid #3b82f6', padding: '10px', borderRadius: '10px', cursor: 'default', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
                                >
                                    <Move size={20} />
                                    <span style={{ fontSize: '12px' }}>Drag to Move</span>
                                </button>
                                <button 
                                    onClick={() => {
                                        setPlacedItems(items => items.map(i => {
                                            if (i.id === selectedItemId) {
                                                return { ...i, rotation: [i.rotation[0], i.rotation[1] + Math.PI / 2, i.rotation[2]] };
                                            }
                                            return i;
                                        }));
                                    }}
                                    style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', borderRadius: '10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                >
                                    <RotateCcw size={20} />
                                    <span style={{ fontSize: '12px' }}>Rotate 90°</span>
                                </button>
                            </div>
                            
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }} />
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <button 
                                    onClick={() => {
                                        setSelectedItemId(null);
                                        setShowSearchPanel(true);
                                    }}
                                    style={{ background: '#10b981', color: 'white', padding: '12px', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold', border: 'none', transition: 'all 0.2s' }}
                                >
                                    <Plus size={18} /> Save & Add New
                                </button>
                                <button 
                                    onClick={() => {
                                        setPlacedItems(items => items.filter(i => i.id !== selectedItemId));
                                        setSelectedItemId(null);
                                    }}
                                    style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#fca5a5', padding: '12px', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px', fontWeight: 'bold', transition: 'all 0.2s' }}
                                >
                                    <Trash2 size={18} /> Remove Item
                                </button>
                            </div>
                        </>
                    ) : (
                        <div style={{ color: '#94a3b8', fontSize: '13px', textAlign: 'center' }}>No item selected</div>
                    )}
                </div>
            </div>

            <Canvas ref={canvasRef} onPointerMissed={() => { if (Date.now() - dragEndTimeRef.current < 200) return; setSelectedItemId(null); setSelectedElement(null); }} shadows dpr={[1, 1.5]} gl={{ antialias: true, preserveDrawingBuffer: true }}>
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
                <group position={[-bounds.centerX, 0, -bounds.centerZ]} onClick={() => { if (Date.now() - dragEndTimeRef.current < 200) return; setSelectedItemId(null); setSelectedElement(null); }}>
                    {/* BUILDING FLOOR */}
                    <BuildingFloor 
                        house={house} 
                        bounds={bounds} 
                        floorTextureUrl={floorTexturesMap['building-floor'] || null} 
                        isSelected={selectedElement?.type === 'floor' && selectedElement.id === 'building-floor'}
                        onSelect={() => { if (Date.now() - dragEndTimeRef.current < 200) return; setSelectedElement({type: 'floor', id: 'building-floor'}); setShowMaterialPanel(true); setSelectedItemId(null); }}
                    />

                    {/* ROOM FLOORS */}
                    {validRooms.map((room, i) => (
                        <RoomFloor 
                            key={`room-${i}`} 
                            room={room} 
                            floorTextureUrl={floorTexturesMap[room.id] || null} 
                            isSelected={selectedElement?.type === 'floor' && selectedElement.id === room.id}
                            onSelect={() => { if (Date.now() - dragEndTimeRef.current < 200) return; setSelectedElement({type: 'floor', id: room.id}); setShowMaterialPanel(true); setSelectedItemId(null); }}
                        />
                    ))}

                    {/* WALLS */}
                    {walls.map((wall, i) => (
                        <Wall 
                            key={`wall-${i}`} 
                            wall={wall} 
                            doors={doors} 
                            windows={windows} 
                            isNight={isNight} 
                            wallColor={wallColorsMap[wall.id] || '#f8f9fa'} 
                            isSelected={selectedElement?.type === 'wall' && selectedElement.id === wall.id}
                            onSelect={() => { if (Date.now() - dragEndTimeRef.current < 200) return; setSelectedElement({type: 'wall', id: wall.id}); setShowMaterialPanel(true); setSelectedItemId(null); }}
                        />
                    ))}
                    
                    {/* PLACED FURNITURE */}
                    {placedItems.map(item => (
                        <FurnitureErrorBoundary key={item.id} position={item.position}>
                            <Suspense fallback={<FurnitureLoading position={item.position} />}>
                                <FurnitureItem 
                                    item={item} 
                                    isSelected={selectedItemId === item.id}
                                    transformMode={transformMode}
                                    onSelect={() => { setSelectedItemId(item.id); setSelectedElement(null); }}
                                    setDragContext={setDragContext}
                                    onUpdate={(id, pos, rot) => {
                                        setPlacedItems(items => items.map(i => i.id === id ? { ...i, position: [pos.x, pos.y, pos.z], rotation: rot ? [rot.x, rot.y, rot.z] : i.rotation } : i));
                                    }} 
                                />
                            </Suspense>
                        </FurnitureErrorBoundary>
                    ))}
                </group>

                {/* GRID FOR ARCHITECTURAL FEEL */}
                <Grid position={[0, -0.01, 0]} args={[50, 50]} cellSize={1} cellThickness={0.5} cellColor={isNight ? "#2a2a3a" : "#4a4a5a"} sectionSize={5} sectionThickness={1} sectionColor={isNight ? "#3d3d5c" : "#6d6d8c"} fadeDistance={40} infiniteGrid />

                <DragController 
                    dragContext={dragContext} 
                    setDragContext={setDragContext}
                    onUpdate={(id: string, pos: any) => {
                        setPlacedItems(items => items.map(i => i.id === id ? { ...i, position: [pos.x, pos.y, pos.z] } : i));
                    }} 
                />

                <OrbitControls makeDefault enablePan enableZoom enableRotate enabled={!dragContext} />
            </Canvas>
        </div>
    );
}