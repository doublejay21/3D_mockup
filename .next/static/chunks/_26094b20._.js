(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/House3DViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>House3DViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Edges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.mjs [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.mjs [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paint$2d$bucket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBucket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paint-bucket.mjs [app-client] (ecmascript) <export default as PaintBucket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sofa.mjs [app-client] (ecmascript) <export default as Sofa>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move.mjs [app-client] (ecmascript) <export default as Move>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ======================================================
// HELPERS
// ======================================================
const safeNumber = (value, fallback)=>{
    const num = Number(value);
    return Number.isFinite(num) ? num : fallback;
};
const isValidPoint = (point)=>{
    if (!point || typeof point !== "object") return false;
    const p = point;
    return Number.isFinite(Number(p.x)) && Number.isFinite(Number(p.z));
};
const getRoomColor = (name)=>{
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
    wallDay: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#f8f9fa",
        roughness: 0.8,
        metalness: 0.1
    }),
    wallNight: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#dcdfe4",
        roughness: 0.9,
        metalness: 0.1
    }),
    floorFallback: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#cbd5e1",
        roughness: 0.9,
        metalness: 0
    }),
    door: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#5c4033",
        roughness: 0.7,
        metalness: 0.1
    }),
    windowGlass: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#87ceeb",
        transmission: 0.9,
        opacity: 1,
        metalness: 0,
        roughness: 0,
        ior: 1.5,
        thickness: 0.1,
        transparent: true
    }),
    windowFrame: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#333333",
        roughness: 0.5,
        metalness: 0.8
    })
};
// ======================================================
// COMPONENTS
// ======================================================
function Wall(param) {
    let { wall, doors, windows, isNight, wallColor, isSelected, onSelect } = param;
    _s();
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Wall.useMemo[result]": ()=>{
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
            return {
                length,
                height,
                thickness,
                centerX,
                centerZ,
                angle
            };
        }
    }["Wall.useMemo[result]"], [
        wall
    ]);
    if (!result) return null;
    const wallDoors = doors.filter((d)=>d.wallId === wall.id);
    const wallWindows = windows.filter((w)=>w.wallId === wall.id);
    // Only show length label if wall is long enough
    const showLabel = result.length > 0.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            result.centerX,
            0,
            result.centerZ
        ],
        rotation: [
            0,
            -result.angle,
            0
        ],
        onClick: (e)=>{
            e.stopPropagation();
            onSelect();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    result.height / 2,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            result.length,
                            result.height,
                            result.thickness
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: isNight ? "#dcdfe4" : wallColor,
                        roughness: 0.8,
                        metalness: 0.1,
                        emissive: isSelected ? "#38bdf8" : "#000000",
                        emissiveIntensity: isSelected ? 0.3 : 0
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edges"], {
                        scale: 1.001,
                        threshold: 15,
                        color: isNight ? "#9ca3af" : "#d1d5db"
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    0,
                    result.height + 0.3,
                    0
                ],
                center: true,
                zIndexRange: [
                    100,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'rgba(0,0,0,0.65)',
                        color: 'white',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    },
                    children: [
                        result.length.toFixed(2),
                        "m"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 115,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 114,
                columnNumber: 17
            }, this),
            wallDoors.map((door, i)=>{
                const w = safeNumber(door.width, 0.9);
                const h = safeNumber(door.height, 2.1);
                const offset = safeNumber(door.offset, result.length / 2 - w / 2);
                const posX = offset - result.length / 2;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        posX,
                        h / 2,
                        0
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        receiveShadow: true,
                        material: materials.door,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    w,
                                    h,
                                    result.thickness + 0.02
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 135,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Edges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edges"], {
                                scale: 1.001,
                                color: "#3b2f2f"
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 136,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 134,
                        columnNumber: 25
                    }, this)
                }, "door-".concat(i), false, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 133,
                    columnNumber: 21
                }, this);
            }),
            wallWindows.map((win, i)=>{
                const w = safeNumber(win.width, 1.2);
                const h = safeNumber(win.height, 1.2);
                const sill = safeNumber(win.sillHeight, 0.9);
                const offset = safeNumber(win.offset, result.length / 2 - w / 2);
                const posX = offset - result.length / 2;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    position: [
                        posX,
                        sill + h / 2,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            castShadow: true,
                            receiveShadow: true,
                            material: materials.windowFrame,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    w,
                                    h,
                                    result.thickness + 0.04
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 152,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/House3DViewer.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            material: materials.windowGlass,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    w - 0.1,
                                    h - 0.1,
                                    result.thickness + 0.05
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 155,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/House3DViewer.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, this)
                    ]
                }, "win-".concat(i), true, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 150,
                    columnNumber: 21
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/House3DViewer.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this);
}
_s(Wall, "eHS1hgZid6BW1PbfBVPzAMIpSIg=");
_c = Wall;
function RoomFloor(param) {
    let { room, floorTextureUrl, isSelected, onSelect } = param;
    _s1();
    const { geometry, labelPos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RoomFloor.useMemo": ()=>{
            const polygon = Array.isArray(room.polygon) ? room.polygon.filter(isValidPoint) : [];
            if (polygon.length < 3) return {
                geometry: null,
                labelPos: [
                    0,
                    0,
                    0
                ]
            };
            let minX = Infinity, minZ = Infinity;
            const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
            shape.moveTo(Number(polygon[0].x), -Number(polygon[0].z));
            polygon.forEach({
                "RoomFloor.useMemo": (p, i)=>{
                    if (p.x < minX) minX = p.x;
                    if (p.z < minZ) minZ = p.z;
                    if (i > 0) shape.lineTo(Number(p.x), -Number(p.z));
                }
            }["RoomFloor.useMemo"]);
            shape.closePath();
            // Offset slightly inward from the absolute top-left corner
            return {
                geometry: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](shape),
                labelPos: [
                    minX + 0.5,
                    0.05,
                    minZ + 0.5
                ]
            };
        }
    }["RoomFloor.useMemo"], [
        room
    ]);
    const [loadedTexture, setLoadedTexture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomFloor.useEffect": ()=>{
            if (!floorTextureUrl) {
                setLoadedTexture(null);
                return;
            }
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            loader.setCrossOrigin('anonymous');
            loader.load(floorTextureUrl, {
                "RoomFloor.useEffect": (tex)=>{
                    tex.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                    tex.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                    tex.repeat.set(2, 2);
                    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    setLoadedTexture(tex);
                }
            }["RoomFloor.useEffect"], undefined, {
                "RoomFloor.useEffect": (err)=>console.error("Error loading floor texture:", err)
            }["RoomFloor.useEffect"]);
        }
    }["RoomFloor.useEffect"], [
        floorTextureUrl
    ]);
    if (!geometry) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0,
            -0.02,
            0
        ],
        onClick: (e)=>{
            e.stopPropagation();
            onSelect();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry,
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                receiveShadow: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    map: loadedTexture || undefined,
                    color: loadedTexture ? "#ffffff" : getRoomColor(room.name),
                    roughness: 0.8,
                    metalness: 0.1,
                    emissive: isSelected ? "#38bdf8" : "#000000",
                    emissiveIntensity: isSelected ? 0.3 : 0
                }, loadedTexture ? loadedTexture.uuid : 'none', false, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 215,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this),
            room.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: labelPos,
                center: true,
                zIndexRange: [
                    50,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        textShadow: '0px 2px 4px rgba(0,0,0,0.8)',
                        pointerEvents: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        textAlign: 'left',
                        whiteSpace: 'nowrap'
                    },
                    children: room.name
                }, void 0, false, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 227,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 226,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/House3DViewer.tsx",
        lineNumber: 213,
        columnNumber: 9
    }, this);
}
_s1(RoomFloor, "eoLRdnEpuNBB7SxUydEZKkOeYAw=");
_c1 = RoomFloor;
function BuildingFloor(param) {
    let { house, bounds, floorTextureUrl, isSelected, onSelect } = param;
    var _house_building, _house_building1;
    _s2();
    let width = safeNumber((_house_building = house.building) === null || _house_building === void 0 ? void 0 : _house_building.width, 0);
    let depth = safeNumber((_house_building1 = house.building) === null || _house_building1 === void 0 ? void 0 : _house_building1.depth, 0);
    let posX = width / 2;
    let posZ = depth / 2;
    if (width <= 0 || depth <= 0) {
        width = bounds.width;
        depth = bounds.depth;
        posX = bounds.centerX;
        posZ = bounds.centerZ;
    }
    if (width <= 0 || depth <= 0) return null;
    const [loadedTexture, setLoadedTexture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingFloor.useEffect": ()=>{
            if (!floorTextureUrl) {
                setLoadedTexture(null);
                return;
            }
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
            loader.setCrossOrigin('anonymous');
            loader.load(floorTextureUrl, {
                "BuildingFloor.useEffect": (tex)=>{
                    tex.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                    tex.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
                    tex.repeat.set(width / 2, depth / 2);
                    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                    setLoadedTexture(tex);
                }
            }["BuildingFloor.useEffect"], undefined, {
                "BuildingFloor.useEffect": (err)=>console.error("Error loading building floor texture:", err)
            }["BuildingFloor.useEffect"]);
        }
    }["BuildingFloor.useEffect"], [
        floorTextureUrl,
        width,
        depth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            posX,
            -0.04,
            posZ
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            rotation: [
                -Math.PI / 2,
                0,
                0
            ],
            receiveShadow: true,
            onClick: (e)=>{
                e.stopPropagation();
                onSelect();
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                    args: [
                        width,
                        depth
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 275,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    map: loadedTexture || undefined,
                    color: loadedTexture ? "#ffffff" : materials.floorFallback.color,
                    roughness: 0.9,
                    metalness: 0,
                    emissive: isSelected ? "#38bdf8" : "#000000",
                    emissiveIntensity: isSelected ? 0.3 : 0
                }, loadedTexture ? loadedTexture.uuid : 'none', false, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 276,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/House3DViewer.tsx",
            lineNumber: 274,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/House3DViewer.tsx",
        lineNumber: 273,
        columnNumber: 9
    }, this);
}
_s2(BuildingFloor, "3WcYDe+v+3E6EXX5ZSGS2uvP3j8=");
_c2 = BuildingFloor;
function getHouseBounds(house) {
    const walls = Array.isArray(house.walls) ? house.walls : [];
    const xs = [];
    const zs = [];
    walls.forEach((wall)=>{
        if (isValidPoint(wall.start)) {
            xs.push(Number(wall.start.x));
            zs.push(Number(wall.start.z));
        }
        if (isValidPoint(wall.end)) {
            xs.push(Number(wall.end.x));
            zs.push(Number(wall.end.z));
        }
    });
    if (xs.length === 0 || zs.length === 0) {
        var _house_building, _house_building1;
        const width = safeNumber((_house_building = house.building) === null || _house_building === void 0 ? void 0 : _house_building.width, 6);
        const depth = safeNumber((_house_building1 = house.building) === null || _house_building1 === void 0 ? void 0 : _house_building1.depth, 6);
        return {
            minX: 0,
            maxX: width,
            minZ: 0,
            maxZ: depth,
            width,
            depth,
            centerX: width / 2,
            centerZ: depth / 2
        };
    }
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minZ = Math.min(...zs);
    const maxZ = Math.max(...zs);
    return {
        minX,
        maxX,
        minZ,
        maxZ,
        width: maxX - minX,
        depth: maxZ - minZ,
        centerX: (minX + maxX) / 2,
        centerZ: (minZ + maxZ) / 2
    };
}
// ======================================================
// CAMERA CONTROLLER
// ======================================================
function CameraController(param) {
    let { mode, bounds } = param;
    _s3();
    const { camera, controls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraController.useEffect": ()=>{
            if (!controls) return;
            const ctrl = controls;
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
        }
    }["CameraController.useEffect"], [
        mode,
        camera,
        controls,
        bounds
    ]);
    return null;
}
_s3(CameraController, "YaxTskQsz9Z4RJVC9zwu4wdylVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c3 = CameraController;
// ======================================================
// 3D FURNITURE PLACEMENT COMPONENT
// ======================================================
function FurnitureItem(param) {
    let { item, isSelected, transformMode, onSelect, onUpdate, setDragContext } = param;
    _s4();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])(item.modelUrl);
    // Process the scene once to center it and place it on the floor
    const processedScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FurnitureItem.useMemo[processedScene]": ()=>{
            const c = scene.clone();
            // Calculate bounding box of the original model
            const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(c);
            const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
            // Offset the original scene so its bottom is at Y=0 and it is centered on X/Z
            c.position.x = -center.x;
            c.position.y = -box.min.y;
            c.position.z = -center.z;
            // Create a wrapper group. The TransformControls will move this group.
            const wrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            wrapper.add(c);
            return wrapper;
        }
    }["FurnitureItem.useMemo[processedScene]"], [
        scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FurnitureItem.useEffect": ()=>{
            processedScene.traverse({
                "FurnitureItem.useEffect": (child)=>{
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                }
            }["FurnitureItem.useEffect"]);
        }
    }["FurnitureItem.useEffect"], [
        processedScene
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: (e)=>{
            e.stopPropagation();
            onSelect();
        },
        onPointerDown: (e)=>{
            if (isSelected && setDragContext) {
                e.stopPropagation();
                setDragContext({
                    id: item.id,
                    offsetX: item.position[0] - e.point.x,
                    offsetZ: item.position[2] - e.point.z
                });
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
            object: processedScene,
            position: item.position,
            rotation: item.rotation
        }, void 0, false, {
            fileName: "[project]/components/House3DViewer.tsx",
            lineNumber: 390,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/House3DViewer.tsx",
        lineNumber: 377,
        columnNumber: 9
    }, this);
}
_s4(FurnitureItem, "2r67wi75mgSDvgpzvHIdHU+0eeQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c4 = FurnitureItem;
class FurnitureErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: this.props.position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                    center: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(220,38,38,0.9)',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            whiteSpace: 'nowrap'
                        },
                        children: "Failed to load model"
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 403,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 402,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 401,
                columnNumber: 17
            }, this);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
}
function FurnitureLoading(param) {
    let { position } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
            center: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/House3DViewer.tsx",
                            lineNumber: 420,
                            columnNumber: 25
                        }, this),
                        "Loading 3D..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 419,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 418,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/House3DViewer.tsx",
            lineNumber: 417,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/House3DViewer.tsx",
        lineNumber: 416,
        columnNumber: 9
    }, this);
}
_c5 = FurnitureLoading;
// ======================================================
// CUSTOM DRAG CONTROLLER
// ======================================================
function DragController(param) {
    let { dragContext, setDragContext, onUpdate } = param;
    _s5();
    const { camera, raycaster, gl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const plane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DragController.useMemo[plane]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), 0)
    }["DragController.useMemo[plane]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DragController.useEffect": ()=>{
            if (!dragContext) return;
            const handlePointerMove = {
                "DragController.useEffect.handlePointerMove": (e)=>{
                    const rect = gl.domElement.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
                    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
                    const pointerCoords = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, y);
                    raycaster.setFromCamera(pointerCoords, camera);
                    const target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                    raycaster.ray.intersectPlane(plane, target);
                    if (target) {
                        onUpdate(dragContext.id, {
                            x: target.x + dragContext.offsetX,
                            y: 0,
                            z: target.z + dragContext.offsetZ
                        });
                    }
                }
            }["DragController.useEffect.handlePointerMove"];
            const handlePointerUp = {
                "DragController.useEffect.handlePointerUp": ()=>{
                    if (setDragContext) {
                        setDragContext(null, Date.now()); // Pass timestamp to indicate when drag ended
                    }
                }
            }["DragController.useEffect.handlePointerUp"];
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
            return ({
                "DragController.useEffect": ()=>{
                    window.removeEventListener('pointermove', handlePointerMove);
                    window.removeEventListener('pointerup', handlePointerUp);
                }
            })["DragController.useEffect"];
        }
    }["DragController.useEffect"], [
        dragContext,
        camera,
        raycaster,
        gl,
        onUpdate,
        setDragContext,
        plane
    ]);
    return null;
}
_s5(DragController, "svYzDvFRVe6Qdne8orcgWbQVfGU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c6 = DragController;
function House3DViewer(param) {
    let { house } = param;
    _s6();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('orbit');
    const [isNight, setIsNight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // New states for Materials Phase 1 (Upgraded)
    const [wallColorsMap, setWallColorsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [floorTexturesMap, setFloorTexturesMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showMaterialPanel, setShowMaterialPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedElement, setSelectedElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // New states for IKEA Furniture Phase 3
    const [showSearchPanel, setShowSearchPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [placedItems, setPlacedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingModelId, setLoadingModelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedItemId, setSelectedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transformMode, setTransformMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('translate');
    const [dragContext, setDragContextState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dragEndTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const setDragContext = (ctx, endTime)=>{
        if (endTime) dragEndTimeRef.current = endTime;
        setDragContextState(ctx);
    };
    const selectedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "House3DViewer.useMemo[selectedItem]": ()=>placedItems.find({
                "House3DViewer.useMemo[selectedItem]": (i)=>i.id === selectedItemId
            }["House3DViewer.useMemo[selectedItem]"])
    }["House3DViewer.useMemo[selectedItem]"], [
        placedItems,
        selectedItemId
    ]);
    const floorTextures = [
        {
            id: 'wood1',
            name: 'Hardwood',
            url: 'https://threejs.org/examples/textures/hardwood2_diffuse.jpg'
        },
        {
            id: 'wood2',
            name: 'Dark Wood',
            url: 'https://threejs.org/examples/textures/crate.gif'
        },
        {
            id: 'grass',
            name: 'Grass',
            url: 'https://threejs.org/examples/textures/terrain/grasslight-big.jpg'
        },
        {
            id: 'brick',
            name: 'Red Brick',
            url: 'https://threejs.org/examples/textures/brick_diffuse.jpg'
        },
        {
            id: 'concrete',
            name: 'Concrete',
            url: 'https://threejs.org/examples/textures/planets/moon_1024.jpg'
        },
        {
            id: 'water',
            name: 'Water Pool',
            url: 'https://threejs.org/examples/textures/water.jpg'
        },
        {
            id: 'grid',
            name: 'Blueprint Grid',
            url: 'https://threejs.org/examples/textures/uv_grid_opengl.jpg'
        },
        {
            id: 'lava',
            name: 'Lava',
            url: 'https://threejs.org/examples/textures/lava/lavatile.jpg'
        }
    ];
    const wallColors = [
        '#ffffff',
        '#f8f9fa',
        '#e2e8f0',
        '#cbd5e1',
        '#94a3b8',
        '#475569',
        '#fef3c7',
        '#fde68a',
        '#fcd34d',
        '#fbbf24',
        '#dbeafe',
        '#bfdbfe',
        '#93c5fd',
        '#3b82f6',
        '#d1fae5',
        '#a7f3d0',
        '#6ee7b7',
        '#10b981',
        '#fce7f3',
        '#fbcfe8',
        '#f9a8d4',
        '#ec4899',
        '#ffedd5',
        '#fed7aa',
        '#fdba74',
        '#f97316'
    ];
    const walls = Array.isArray(house === null || house === void 0 ? void 0 : house.walls) ? house.walls : [];
    const rooms = Array.isArray(house === null || house === void 0 ? void 0 : house.rooms) ? house.rooms : [];
    const doors = Array.isArray(house === null || house === void 0 ? void 0 : house.doors) ? house.doors : [];
    const windows = Array.isArray(house === null || house === void 0 ? void 0 : house.windows) ? house.windows : [];
    const validRooms = rooms.filter((r)=>Array.isArray(r.polygon) && r.polygon.length >= 3);
    const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "House3DViewer.useMemo[bounds]": ()=>getHouseBounds(house)
    }["House3DViewer.useMemo[bounds]"], [
        house
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "House3DViewer.useEffect": ()=>{
            const handleFullscreenChange = {
                "House3DViewer.useEffect.handleFullscreenChange": ()=>{
                    setIsFullscreen(!!document.fullscreenElement);
                }
            }["House3DViewer.useEffect.handleFullscreenChange"];
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            return ({
                "House3DViewer.useEffect": ()=>document.removeEventListener('fullscreenchange', handleFullscreenChange)
            })["House3DViewer.useEffect"];
        }
    }["House3DViewer.useEffect"], []);
    const handleSearch = async ()=>{
        if (!searchQuery.trim()) return;
        setIsSearching(true);
        try {
            const res = await fetch("http://localhost:8000/api/search?q=".concat(encodeURIComponent(searchQuery), "&limit=10"));
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
    const handleAddItem = async (itemCode, name, preFetchedUrl)=>{
        if (loadingModelId) return;
        setLoadingModelId(itemCode);
        let urlToLoad = preFetchedUrl;
        if (!urlToLoad) {
            try {
                const res = await fetch("http://localhost:8000/api/item/".concat(itemCode, "/3d"));
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
            const newItem = {
                id: Math.random().toString(36).substring(7),
                itemCode,
                name,
                modelUrl: urlToLoad,
                position: [
                    bounds.centerX,
                    0,
                    bounds.centerZ
                ],
                rotation: [
                    0,
                    0,
                    0
                ]
            };
            setPlacedItems((prev)=>[
                    ...prev,
                    newItem
                ]);
            setShowSearchPanel(false);
        } else {
            alert("ขออภัยครับ สินค้าชิ้นนี้ (".concat(name, ") ไม่มีโมเดล 3D ให้บริการ"));
        }
        setLoadingModelId(null);
    };
    if (!house || walls.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                minHeight: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                background: "rgba(0,0,0,0.2)",
                color: "#94a3b8"
            },
            children: "No house data or walls generated."
        }, void 0, false, {
            fileName: "[project]/components/House3DViewer.tsx",
            lineNumber: 607,
            columnNumber: 13
        }, this);
    }
    const takeSnapshot = ()=>{
        if (!canvasRef.current) return;
        const dataUrl = canvasRef.current.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = "ai-interior-snapshot-".concat(Date.now(), ".png");
        a.click();
    };
    const toggleFullscreen = ()=>{
        if (!document.fullscreenElement) {
            var _containerRef_current;
            (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.requestFullscreen().catch((err)=>{
                console.error("Error attempting to enable full-screen mode: ".concat(err.message));
            });
        } else {
            document.exitFullscreen();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            width: "100%",
            height: isFullscreen ? "100vh" : "650px",
            overflow: "hidden",
            borderRadius: isFullscreen ? "0px" : "14px",
            position: "relative",
            backgroundColor: isNight ? "#0f111a" : "#1c1c28",
            fontFamily: 'system-ui, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowSearchPanel(!showSearchPanel),
                        style: {
                            background: showSearchPanel ? 'rgba(99, 102, 241, 0.9)' : 'rgba(15, 23, 42, 0.65)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__["Sofa"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 638,
                                columnNumber: 21
                            }, this),
                            " Add Furniture"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 637,
                        columnNumber: 17
                    }, this),
                    showSearchPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(15, 23, 42, 0.75)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '16px',
                            padding: '16px',
                            width: '320px',
                            backdropFilter: 'blur(16px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                            maxHeight: '450px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    color: 'white',
                                    margin: '0',
                                    fontSize: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontWeight: '600'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 642,
                                        columnNumber: 157
                                    }, this),
                                    " Catalog"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 642,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        onKeyDown: (e)=>e.key === 'Enter' && handleSearch(),
                                        placeholder: "e.g. Sofa, Billy, Table",
                                        style: {
                                            flex: 1,
                                            padding: '8px 12px',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            background: 'rgba(0,0,0,0.4)',
                                            color: 'white',
                                            outline: 'none',
                                            fontSize: '13px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 644,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSearch,
                                        disabled: isSearching,
                                        style: {
                                            background: '#38bdf8',
                                            color: '#0f172a',
                                            border: 'none',
                                            padding: '0 12px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        },
                                        children: isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 16,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 646,
                                            columnNumber: 48
                                        }, this) : 'Go'
                                    }, void 0, false, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 645,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 643,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflowY: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    flex: 1,
                                    paddingRight: '4px'
                                },
                                children: [
                                    searchResults.length === 0 && !isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#94a3b8',
                                            fontSize: '12px',
                                            textAlign: 'center',
                                            padding: '20px 0'
                                        },
                                        children: "Search for Poly Haven models (e.g. Sofa, Chair) to add them to your room."
                                    }, void 0, false, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 650,
                                        columnNumber: 76
                                    }, this),
                                    searchResults.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '12px',
                                                background: 'rgba(255,255,255,0.03)',
                                                padding: '8px',
                                                borderRadius: '10px',
                                                alignItems: 'center',
                                                border: '1px solid rgba(255,255,255,0.05)'
                                            },
                                            children: [
                                                item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.image,
                                                    alt: item.name,
                                                    style: {
                                                        width: '48px',
                                                        height: '48px',
                                                        objectFit: 'contain',
                                                        background: 'white',
                                                        borderRadius: '6px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/House3DViewer.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '48px',
                                                        height: '48px',
                                                        background: '#333',
                                                        borderRadius: '6px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/House3DViewer.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1,
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: 'white',
                                                                fontSize: '13px',
                                                                fontWeight: '600',
                                                                whiteSpace: 'nowrap',
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden'
                                                            },
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/House3DViewer.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#94a3b8',
                                                                fontSize: '11px',
                                                                whiteSpace: 'nowrap',
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden',
                                                                marginTop: '2px'
                                                            },
                                                            children: item.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/House3DViewer.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/House3DViewer.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleAddItem(item.id, item.name, item.modelUrl),
                                                    disabled: loadingModelId === item.id,
                                                    style: {
                                                        background: loadingModelId === item.id ? 'rgba(255,255,255,0.1)' : '#10b981',
                                                        color: 'white',
                                                        border: 'none',
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '8px',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    },
                                                    children: loadingModelId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        size: 16,
                                                        className: "animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/House3DViewer.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 71
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/House3DViewer.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 120
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/House3DViewer.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 652,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 649,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 641,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 636,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleFullscreen,
                        style: {
                            background: 'rgba(15, 23, 42, 0.65)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 675,
                                columnNumber: 21
                            }, this),
                            " ",
                            isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 674,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (mode === 'orbit') setMode('top');
                            else if (mode === 'top') setMode('person');
                            else setMode('orbit');
                        },
                        style: {
                            background: 'rgba(15, 23, 42, 0.65)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        },
                        children: [
                            mode === 'orbit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 678,
                                columnNumber: 41
                            }, this) : mode === 'top' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 678,
                                columnNumber: 78
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 678,
                                columnNumber: 98
                            }, this),
                            mode === 'orbit' ? 'Blueprint View' : mode === 'top' ? 'First Person View' : '3D Orbit View'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 677,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsNight(!isNight),
                        style: {
                            background: 'rgba(15, 23, 42, 0.65)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        },
                        children: [
                            isNight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 682,
                                columnNumber: 32
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 682,
                                columnNumber: 52
                            }, this),
                            isNight ? 'Day Mode' : 'Night Mode'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 681,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: takeSnapshot,
                        style: {
                            background: 'rgba(56, 189, 248, 0.8)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#0f172a',
                            fontWeight: 'bold',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 686,
                                columnNumber: 21
                            }, this),
                            " Snapshot"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 685,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowMaterialPanel(!showMaterialPanel),
                        style: {
                            background: 'rgba(16, 185, 129, 0.8)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            fontWeight: 'bold',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backdropFilter: 'blur(12px)',
                            fontSize: '13px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paint$2d$bucket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBucket$3e$__["PaintBucket"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 689,
                                columnNumber: 21
                            }, this),
                            " Materials"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 688,
                        columnNumber: 17
                    }, this),
                    showMaterialPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(15, 23, 42, 0.75)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '16px',
                            padding: '16px',
                            width: '280px',
                            backdropFilter: 'blur(16px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                            maxHeight: '400px',
                            overflowY: 'auto'
                        },
                        children: !selectedElement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: '#94a3b8',
                                fontSize: '13px',
                                textAlign: 'center',
                                padding: '20px 0'
                            },
                            children: "Please click on a wall or floor in the 3D view to change its material."
                        }, void 0, false, {
                            fileName: "[project]/components/House3DViewer.tsx",
                            lineNumber: 696,
                            columnNumber: 29
                        }, this) : selectedElement.type === 'wall' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        color: 'white',
                                        margin: '0 0 12px 0',
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paint$2d$bucket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBucket$3e$__["PaintBucket"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 701,
                                            columnNumber: 155
                                        }, this),
                                        " Wall Color"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 701,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "color",
                                            value: wallColorsMap[selectedElement.id] || '#f8f9fa',
                                            onChange: (e)=>setWallColorsMap((prev)=>({
                                                        ...prev,
                                                        [selectedElement.id]: e.target.value
                                                    })),
                                            style: {
                                                width: '32px',
                                                height: '32px',
                                                padding: '0',
                                                border: 'none',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                background: 'transparent'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 703,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: wallColorsMap[selectedElement.id] || '#f8f9fa',
                                            onChange: (e)=>setWallColorsMap((prev)=>({
                                                        ...prev,
                                                        [selectedElement.id]: e.target.value
                                                    })),
                                            placeholder: "#FFFFFF",
                                            style: {
                                                flex: 1,
                                                padding: '6px 10px',
                                                borderRadius: '6px',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                background: 'rgba(0,0,0,0.3)',
                                                color: 'white',
                                                outline: 'none',
                                                fontSize: '13px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 704,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 702,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(6, 1fr)',
                                        gap: '6px'
                                    },
                                    children: wallColors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setWallColorsMap((prev)=>({
                                                        ...prev,
                                                        [selectedElement.id]: color
                                                    })),
                                            style: {
                                                width: '100%',
                                                aspectRatio: '1/1',
                                                backgroundColor: color,
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                border: (wallColorsMap[selectedElement.id] || '#f8f9fa') === color ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)'
                                            }
                                        }, color, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 708,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 706,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const currentColor = wallColorsMap[selectedElement.id] || '#f8f9fa';
                                        const newMap = {
                                            ...wallColorsMap
                                        };
                                        walls.forEach((w)=>newMap[w.id] = currentColor);
                                        setWallColorsMap(newMap);
                                    },
                                    style: {
                                        marginTop: '16px',
                                        width: '100%',
                                        background: 'rgba(56, 189, 248, 0.1)',
                                        color: '#38bdf8',
                                        border: '1px solid rgba(56, 189, 248, 0.3)',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.2s'
                                    },
                                    onMouseOver: (e)=>e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)',
                                    onMouseOut: (e)=>e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)',
                                    children: "Apply to All Walls"
                                }, void 0, false, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 711,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/House3DViewer.tsx",
                            lineNumber: 700,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        color: 'white',
                                        margin: '0 0 12px 0',
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 727,
                                            columnNumber: 155
                                        }, this),
                                        " Floor Texture"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 727,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setFloorTexturesMap((prev)=>({
                                                        ...prev,
                                                        [selectedElement.id]: null
                                                    })),
                                            style: {
                                                background: 'rgba(255,255,255,0.05)',
                                                color: '#94a3b8',
                                                fontSize: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: '60px',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                border: floorTexturesMap[selectedElement.id] === undefined || floorTexturesMap[selectedElement.id] === null ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)'
                                            },
                                            children: "Default"
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 729,
                                            columnNumber: 37
                                        }, this),
                                        floorTextures.map((tex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setFloorTexturesMap((prev)=>({
                                                            ...prev,
                                                            [selectedElement.id]: tex.url
                                                        })),
                                                style: {
                                                    height: '60px',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    backgroundImage: "url(".concat(tex.url, ")"),
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    border: floorTexturesMap[selectedElement.id] === tex.url ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)'
                                                },
                                                title: tex.name
                                            }, tex.id, false, {
                                                fileName: "[project]/components/House3DViewer.tsx",
                                                lineNumber: 733,
                                                columnNumber: 41
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 728,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/House3DViewer.tsx",
                            lineNumber: 726,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 694,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 673,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '16px',
                    right: selectedItemId ? '250px' : '-350px',
                    zIndex: 10,
                    transition: 'right 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '280px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'rgba(15, 23, 42, 0.75)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        padding: '20px',
                        width: '100%',
                        backdropFilter: 'blur(16px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                    },
                    children: selectedItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            color: 'white',
                                            margin: '0 0 4px 0',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden'
                                        },
                                        children: selectedItem.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 748,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#94a3b8',
                                            fontSize: '13px'
                                        },
                                        children: "Selected Item"
                                    }, void 0, false, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 749,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 747,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            background: 'rgba(59, 130, 246, 0.2)',
                                            color: '#60a5fa',
                                            border: '1px solid #3b82f6',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            cursor: 'default',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__["Move"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/House3DViewer.tsx",
                                                lineNumber: 756,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '12px'
                                                },
                                                children: "Drag to Move"
                                            }, void 0, false, {
                                                fileName: "[project]/components/House3DViewer.tsx",
                                                lineNumber: 757,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 753,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setPlacedItems((items)=>items.map((i)=>{
                                                    if (i.id === selectedItemId) {
                                                        return {
                                                            ...i,
                                                            rotation: [
                                                                i.rotation[0],
                                                                i.rotation[1] + Math.PI / 2,
                                                                i.rotation[2]
                                                            ]
                                                        };
                                                    }
                                                    return i;
                                                }));
                                        },
                                        style: {
                                            background: 'rgba(255,255,255,0.05)',
                                            color: 'white',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '10px',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'all 0.2s'
                                        },
                                        onMouseOver: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.1)',
                                        onMouseOut: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.05)',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/House3DViewer.tsx",
                                                lineNumber: 772,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '12px'
                                                },
                                                children: "Rotate 90°"
                                            }, void 0, false, {
                                                fileName: "[project]/components/House3DViewer.tsx",
                                                lineNumber: 773,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 759,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 752,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '1px',
                                    background: 'rgba(255,255,255,0.1)',
                                    width: '100%'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 777,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedItemId(null);
                                            setShowSearchPanel(true);
                                        },
                                        style: {
                                            background: '#10b981',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            transition: 'all 0.2s'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/House3DViewer.tsx",
                                                lineNumber: 787,
                                                columnNumber: 37
                                            }, this),
                                            " Save & Add New"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 780,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setPlacedItems((items)=>items.filter((i)=>i.id !== selectedItemId));
                                            setSelectedItemId(null);
                                        },
                                        style: {
                                            background: 'rgba(239, 68, 68, 0.1)',
                                            border: '1px solid rgba(239, 68, 68, 0.3)',
                                            color: '#fca5a5',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            transition: 'all 0.2s'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/House3DViewer.tsx",
                                                lineNumber: 796,
                                                columnNumber: 37
                                            }, this),
                                            " Remove Item"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 789,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 779,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#94a3b8',
                            fontSize: '13px',
                            textAlign: 'center'
                        },
                        children: "No item selected"
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 801,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/House3DViewer.tsx",
                    lineNumber: 744,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 743,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                ref: canvasRef,
                onPointerMissed: ()=>{
                    if (Date.now() - dragEndTimeRef.current < 200) return;
                    setSelectedItemId(null);
                    setSelectedElement(null);
                },
                shadows: true,
                dpr: [
                    1,
                    1.5
                ],
                gl: {
                    antialias: true,
                    preserveDrawingBuffer: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {
                        mode: mode,
                        bounds: bounds
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 807,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                        attach: "background",
                        args: [
                            isNight ? "#0f111a" : "#1c1c28"
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 810,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                        preset: isNight ? "night" : "city"
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 811,
                        columnNumber: 17
                    }, this),
                    isNight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                intensity: 0.2
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 816,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                                position: [
                                    0,
                                    2,
                                    0
                                ],
                                intensity: 1.5,
                                color: "#fcd34d",
                                distance: 10,
                                castShadow: true
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 818,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                                position: [
                                    5,
                                    10,
                                    5
                                ],
                                intensity: 0.3,
                                color: "#93c5fd",
                                castShadow: true
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 819,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                intensity: 0.5
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 823,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                                position: [
                                    10,
                                    20,
                                    10
                                ],
                                intensity: 1.5,
                                castShadow: true,
                                "shadow-mapSize": [
                                    2048,
                                    2048
                                ],
                                "shadow-bias": -0.0001
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 824,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                                position: [
                                    -10,
                                    10,
                                    -10
                                ],
                                intensity: 0.5
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 825,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        position: [
                            -bounds.centerX,
                            0,
                            -bounds.centerZ
                        ],
                        onClick: ()=>{
                            if (Date.now() - dragEndTimeRef.current < 200) return;
                            setSelectedItemId(null);
                            setSelectedElement(null);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildingFloor, {
                                house: house,
                                bounds: bounds,
                                floorTextureUrl: floorTexturesMap['building-floor'] || null,
                                isSelected: (selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.type) === 'floor' && selectedElement.id === 'building-floor',
                                onSelect: ()=>{
                                    if (Date.now() - dragEndTimeRef.current < 200) return;
                                    setSelectedElement({
                                        type: 'floor',
                                        id: 'building-floor'
                                    });
                                    setShowMaterialPanel(true);
                                    setSelectedItemId(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/House3DViewer.tsx",
                                lineNumber: 832,
                                columnNumber: 21
                            }, this),
                            validRooms.map((room, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomFloor, {
                                    room: room,
                                    floorTextureUrl: floorTexturesMap[room.id] || null,
                                    isSelected: (selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.type) === 'floor' && selectedElement.id === room.id,
                                    onSelect: ()=>{
                                        if (Date.now() - dragEndTimeRef.current < 200) return;
                                        setSelectedElement({
                                            type: 'floor',
                                            id: room.id
                                        });
                                        setShowMaterialPanel(true);
                                        setSelectedItemId(null);
                                    }
                                }, "room-".concat(i), false, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 842,
                                    columnNumber: 25
                                }, this)),
                            walls.map((wall, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wall, {
                                    wall: wall,
                                    doors: doors,
                                    windows: windows,
                                    isNight: isNight,
                                    wallColor: wallColorsMap[wall.id] || '#f8f9fa',
                                    isSelected: (selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.type) === 'wall' && selectedElement.id === wall.id,
                                    onSelect: ()=>{
                                        if (Date.now() - dragEndTimeRef.current < 200) return;
                                        setSelectedElement({
                                            type: 'wall',
                                            id: wall.id
                                        });
                                        setShowMaterialPanel(true);
                                        setSelectedItemId(null);
                                    }
                                }, "wall-".concat(i), false, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 853,
                                    columnNumber: 25
                                }, this)),
                            placedItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FurnitureErrorBoundary, {
                                    position: item.position,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FurnitureLoading, {
                                            position: item.position
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 868,
                                            columnNumber: 49
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FurnitureItem, {
                                            item: item,
                                            isSelected: selectedItemId === item.id,
                                            transformMode: transformMode,
                                            onSelect: ()=>{
                                                setSelectedItemId(item.id);
                                                setSelectedElement(null);
                                            },
                                            setDragContext: setDragContext,
                                            onUpdate: (id, pos, rot)=>{
                                                setPlacedItems((items)=>items.map((i)=>i.id === id ? {
                                                            ...i,
                                                            position: [
                                                                pos.x,
                                                                pos.y,
                                                                pos.z
                                                            ],
                                                            rotation: rot ? [
                                                                rot.x,
                                                                rot.y,
                                                                rot.z
                                                            ] : i.rotation
                                                        } : i));
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/House3DViewer.tsx",
                                            lineNumber: 869,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/House3DViewer.tsx",
                                        lineNumber: 868,
                                        columnNumber: 29
                                    }, this)
                                }, item.id, false, {
                                    fileName: "[project]/components/House3DViewer.tsx",
                                    lineNumber: 867,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 830,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                        position: [
                            0,
                            -0.01,
                            0
                        ],
                        args: [
                            50,
                            50
                        ],
                        cellSize: 1,
                        cellThickness: 0.5,
                        cellColor: isNight ? "#2a2a3a" : "#4a4a5a",
                        sectionSize: 5,
                        sectionThickness: 1,
                        sectionColor: isNight ? "#3d3d5c" : "#6d6d8c",
                        fadeDistance: 40,
                        infiniteGrid: true
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 885,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DragController, {
                        dragContext: dragContext,
                        setDragContext: setDragContext,
                        onUpdate: (id, pos)=>{
                            setPlacedItems((items)=>items.map((i)=>i.id === id ? {
                                        ...i,
                                        position: [
                                            pos.x,
                                            pos.y,
                                            pos.z
                                        ]
                                    } : i));
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 887,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        makeDefault: true,
                        enablePan: true,
                        enableZoom: true,
                        enableRotate: true,
                        enabled: !dragContext
                    }, void 0, false, {
                        fileName: "[project]/components/House3DViewer.tsx",
                        lineNumber: 895,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/House3DViewer.tsx",
                lineNumber: 806,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/House3DViewer.tsx",
        lineNumber: 633,
        columnNumber: 9
    }, this);
}
_s6(House3DViewer, "ek51W3WB4T3qD3EJArqnUPUtuG4=");
_c7 = House3DViewer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Wall");
__turbopack_context__.k.register(_c1, "RoomFloor");
__turbopack_context__.k.register(_c2, "BuildingFloor");
__turbopack_context__.k.register(_c3, "CameraController");
__turbopack_context__.k.register(_c4, "FurnitureItem");
__turbopack_context__.k.register(_c5, "FurnitureLoading");
__turbopack_context__.k.register(_c6, "DragController");
__turbopack_context__.k.register(_c7, "House3DViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.mjs [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.mjs [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$House3DViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/House3DViewer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// ── Compress image ─────────────────────────────────────────────────────────
async function compressImage(file) {
    let maxPx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1920;
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = ()=>reject(new Error('Cannot read file'));
        reader.onload = (e)=>{
            const dataUrl = e.target.result;
            const img = new Image();
            img.onerror = ()=>resolve(dataUrl);
            img.onload = ()=>{
                if (img.width <= maxPx && img.height <= maxPx) {
                    resolve(dataUrl);
                    return;
                }
                let w = img.width, h = img.height;
                if (w >= h && w > maxPx) {
                    h = Math.round(h * maxPx / w);
                    w = maxPx;
                } else if (h > maxPx) {
                    w = Math.round(w * maxPx / h);
                    h = maxPx;
                }
                const canvas = document.createElement('canvas');
                canvas.width = w;
                canvas.height = h;
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    resolve(dataUrl);
                    return;
                }
                ctx.drawImage(img, 0, 0, w, h);
                const mime = [
                    'image/png',
                    'image/jpeg',
                    'image/webp'
                ].includes(file.type) ? file.type : 'image/jpeg';
                resolve(canvas.toDataURL(mime, mime === 'image/png' ? undefined : 0.88));
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    });
}
const WELCOME = {
    id: 'welcome',
    sender: 'ai',
    text: 'สวัสดีครับ! ผมคือ AI Interior Designer 🛋️✨\n\nอัปโหลด Floor Plan แล้วระบบจะวิเคราะห์โครงสร้างและสร้างโมเดล 3D ที่สามารถหมุนและซูมได้ครับ',
    images: [],
    isLoading: false,
    isError: false,
    houseData: null
};
const LOADING_TEXTS = [
    'กำลังวิเคราะห์แปลนห้อง...',
    'กำลังคำนวณโครงสร้าง 3D...',
    'AI กำลังสร้างโมเดลให้คุณ...',
    'ใกล้เสร็จแล้ว รออีกนิดนะครับ...'
];
const STYLE_CHIPS = [
    'Modern Luxury',
    'Minimalist',
    'Muji',
    'Industrial',
    'Japandi',
    'Nordic'
];
function Page() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        WELCOME
    ]);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isWelcome = messages.length === 1 && messages[0].id === 'welcome';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            var _bottomRef_current;
            (_bottomRef_current = bottomRef.current) === null || _bottomRef_current === void 0 ? void 0 : _bottomRef_current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["Page.useEffect"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const el = textareaRef.current;
            if (!el) return;
            el.style.height = 'auto';
            el.style.height = el.scrollHeight + 'px';
        }
    }["Page.useEffect"], [
        prompt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!busy) return;
            let i = 0;
            const t = setInterval({
                "Page.useEffect.t": ()=>{
                    i = (i + 1) % LOADING_TEXTS.length;
                    setMessages({
                        "Page.useEffect.t": (prev)=>prev.map({
                                "Page.useEffect.t": (m)=>m.isLoading ? {
                                        ...m,
                                        text: LOADING_TEXTS[i]
                                    } : m
                            }["Page.useEffect.t"])
                    }["Page.useEffect.t"]);
                }
            }["Page.useEffect.t"], 7000);
            return ({
                "Page.useEffect": ()=>clearInterval(t)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        busy
    ]);
    const addFiles = (fl)=>{
        if (!fl || fl.length === 0) return;
        setFiles((prev)=>[
                ...prev,
                ...Array.from(fl)
            ]);
    };
    const removeFile = (i)=>setFiles((f)=>f.filter((_, idx)=>idx !== i));
    const canSend = (!!prompt.trim() || files.length > 0) && !busy;
    const onKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (canSend) submit();
        }
    };
    const downloadHouse = (data)=>{
        const a = Object.assign(document.createElement('a'), {
            href: URL.createObjectURL(new Blob([
                JSON.stringify(data, null, 2)
            ], {
                type: 'application/json'
            })),
            download: "house-".concat(Date.now(), ".json")
        });
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    const reset = ()=>{
        setMessages([
            WELCOME
        ]);
        setFiles([]);
        setPrompt('');
    };
    const submit = async ()=>{
        if (!canSend) return;
        const curFiles = [
            ...files
        ];
        const curPrompt = prompt.trim();
        setFiles([]);
        setPrompt('');
        const userMsg = {
            id: Date.now().toString(),
            sender: 'user',
            text: curPrompt,
            images: curFiles.map((f)=>URL.createObjectURL(f)),
            isLoading: false,
            isError: false,
            houseData: null
        };
        const aiMsg = {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            text: LOADING_TEXTS[0],
            images: [],
            isLoading: true,
            isError: false,
            houseData: null
        };
        setMessages((prev)=>[
                ...prev,
                userMsg,
                aiMsg
            ]);
        setBusy(true);
        try {
            let fileBase64 = null;
            if (curFiles.length > 0) {
                try {
                    fileBase64 = await compressImage(curFiles[0]);
                } catch (e) {
                    console.warn('Compress failed:', e);
                }
            }
            const payload = {};
            if (curPrompt) payload.prompt = curPrompt;
            if (fileBase64) payload.file = fileBase64;
            const res = await fetch('/api/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            console.log('Response:', data);
            var _data_house;
            const house = (_data_house = data === null || data === void 0 ? void 0 : data.house) !== null && _data_house !== void 0 ? _data_house : null;
            setMessages((prev)=>prev.map((m)=>{
                    var _data_error;
                    return m.id === aiMsg.id ? {
                        ...m,
                        isLoading: false,
                        text: house ? 'สร้าง 3D โมเดลเสร็จเรียบร้อยแล้วครับ ✨ ลองหมุนและซูมดูได้เลย' : (_data_error = data === null || data === void 0 ? void 0 : data.error) !== null && _data_error !== void 0 ? _data_error : 'รับคำสั่งแล้วครับ แต่ยังไม่ได้รับข้อมูลโมเดล 3D กลับมา',
                        houseData: house
                    } : m;
                }));
        } catch (err) {
            setMessages((prev)=>prev.map((m)=>m.id === aiMsg.id ? {
                        ...m,
                        isLoading: false,
                        isError: true,
                        text: 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้งครับ'
                    } : m));
        } finally{
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-canvas",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-grid",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "sidebar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-logo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "logo-mark",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 40
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "logo-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "AI Interior Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Powered by PromptXAI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "new-project-btn",
                                onClick: reset,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    " โปรเจกต์ใหม่"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sidebar-section-title",
                                        children: "ความสามารถ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "feature-list",
                                        children: [
                                            {
                                                icon: '🖼️',
                                                cls: 'fi-purple',
                                                title: 'วิเคราะห์แปลน',
                                                sub: 'อ่านผังห้องจากภาพ'
                                            },
                                            {
                                                icon: '🏠',
                                                cls: 'fi-blue',
                                                title: 'สร้าง 3D โมเดล',
                                                sub: 'Three.js real-time'
                                            },
                                            {
                                                icon: '🔄',
                                                cls: 'fi-cyan',
                                                title: 'หมุน & ซูม',
                                                sub: 'Interactive viewer'
                                            },
                                            {
                                                icon: '📐',
                                                cls: 'fi-green',
                                                title: 'ข้อมูลมิติจริง',
                                                sub: 'หน่วยเป็นเมตร'
                                            }
                                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "feature-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "feature-icon ".concat(f.cls),
                                                        children: f.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "feature-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: f.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: f.sub
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, f.title, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sidebar-section-title",
                                        children: "สไตล์ยอดนิยม"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-chips",
                                        style: {
                                            justifyContent: 'flex-start'
                                        },
                                        children: STYLE_CHIPS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chip",
                                                onClick: ()=>setPrompt((p)=>p ? "".concat(p, ", สไตล์ ").concat(s) : "สไตล์ ".concat(s)),
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-footer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "AI จะวิเคราะห์แปลนห้องและสร้างโมเดล 3D",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 54
                                        }, this),
                                        "จากภาพที่คุณอัปโหลดครับ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "main-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "top-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "page-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "status-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this),
                                            "AI Interior Designer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "top-actions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "top-btn",
                                            onClick: reset,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this),
                                                " รีเซ็ต"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "messages-area",
                                children: [
                                    isWelcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "welcome-hero",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hero-icon",
                                                children: "🏛️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hero-title",
                                                children: [
                                                    "ออกแบบห้องด้วย",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "AI 3D Interior"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hero-sub",
                                                children: [
                                                    "อัปโหลดรูปแปลนห้อง หรือรูปห้องว่าง",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 53
                                                    }, this),
                                                    "AI จะวิเคราะห์และสร้างโมเดล 3D ให้คุณทันที"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hero-chips",
                                                children: STYLE_CHIPS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "chip",
                                                        onClick: ()=>setPrompt((p)=>p ? "".concat(p, ", สไตล์ ").concat(s) : "สไตล์ ".concat(s)),
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    messages.filter((m)=>!(isWelcome && m.id === 'welcome')).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "msg-row ".concat(msg.sender),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "avatar ".concat(msg.sender),
                                                    children: msg.sender === 'ai' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 42
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 62
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bubble ".concat(msg.sender).concat(msg.isError ? ' error' : ''),
                                                    children: msg.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "dots",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "loading-text",
                                                                children: msg.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            msg.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    whiteSpace: 'pre-wrap'
                                                                },
                                                                children: msg.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 36
                                                            }, this),
                                                            msg.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bubble-images",
                                                                children: msg.images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "image-scan-container ".concat(msg.isLoading ? 'scanning' : ''),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: src,
                                                                                alt: "upload"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 286,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            msg.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "scan-line"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 287,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 25
                                                            }, this),
                                                            msg.houseData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "viewer-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "viewer-label",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "🏠"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 295,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " 3D Floor Plan Model — ลองหมุนและซูมด้วยเมาส์ได้เลย"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$House3DViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        house: msg.houseData
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "download-btn",
                                                                        onClick: ()=>downloadHouse(msg.houseData),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                size: 13
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " โหลดข้อมูล 3D (JSON)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, msg.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: bottomRef
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "input-zone",
                                children: [
                                    files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "previews",
                                        children: files.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "thumb",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: URL.createObjectURL(f),
                                                        alt: "preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "thumb-rm",
                                                        onClick: ()=>removeFile(i),
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "input-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "attach-btn",
                                                title: "แนบรูปภาพ",
                                                style: {
                                                    opacity: busy ? 0.4 : 1,
                                                    pointerEvents: busy ? 'none' : 'auto'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        multiple: true,
                                                        onChange: (e)=>addFiles(e.target.files)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ref: textareaRef,
                                                className: "chat-input",
                                                rows: 1,
                                                placeholder: "อัปโหลดแปลนห้อง หรือบอกสไตล์ที่ต้องการ...",
                                                value: prompt,
                                                onChange: (e)=>setPrompt(e.target.value),
                                                onKeyDown: onKeyDown,
                                                disabled: busy
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "send-btn".concat(canSend ? ' active' : ''),
                                                onClick: submit,
                                                disabled: !canSend,
                                                children: busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 17,
                                                    className: "spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 66
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "input-hint",
                                        children: "Enter ส่ง • Shift+Enter ขึ้นบรรทัดใหม่ • รองรับ PNG, JPG, WebP"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "mtywVZPXw54rVHc5iaKkYESymJM=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_26094b20._.js.map