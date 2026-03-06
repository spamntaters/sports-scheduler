(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel,
    "CarouselContent",
    ()=>CarouselContent,
    "CarouselItem",
    ()=>CarouselItem,
    "CarouselNext",
    ()=>CarouselNext,
    "CarouselPrevious",
    ()=>CarouselPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CarouselContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useCarousel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9";
    }
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function Carousel(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9";
    }
    let children;
    let className;
    let opts;
    let plugins;
    let props;
    let setApi;
    let t1;
    if ($[1] !== t0) {
        ({ orientation: t1, opts, setApi, plugins, className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = opts;
        $[5] = plugins;
        $[6] = props;
        $[7] = setApi;
        $[8] = t1;
    } else {
        children = $[2];
        className = $[3];
        opts = $[4];
        plugins = $[5];
        props = $[6];
        setApi = $[7];
        t1 = $[8];
    }
    const orientation = t1 === undefined ? "horizontal" : t1;
    const t2 = orientation === "horizontal" ? "x" : "y";
    let t3;
    if ($[9] !== opts || $[10] !== t2) {
        t3 = {
            ...opts,
            axis: t2
        };
        $[9] = opts;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const [carouselRef, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t3, plugins);
    const [canScrollPrev, setCanScrollPrev] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [canScrollNext, setCanScrollNext] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    let t4;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Carousel[onSelect]": (api_0)=>{
                if (!api_0) {
                    return;
                }
                setCanScrollPrev(api_0.canScrollPrev());
                setCanScrollNext(api_0.canScrollNext());
            }
        })["Carousel[onSelect]"];
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const onSelect = t4;
    let t5;
    if ($[13] !== api) {
        t5 = ({
            "Carousel[scrollPrev]": ()=>{
                api?.scrollPrev();
            }
        })["Carousel[scrollPrev]"];
        $[13] = api;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const scrollPrev = t5;
    let t6;
    if ($[15] !== api) {
        t6 = ({
            "Carousel[scrollNext]": ()=>{
                api?.scrollNext();
            }
        })["Carousel[scrollNext]"];
        $[15] = api;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const scrollNext = t6;
    let t7;
    if ($[17] !== scrollNext || $[18] !== scrollPrev) {
        t7 = ({
            "Carousel[handleKeyDown]": (event)=>{
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    scrollPrev();
                } else {
                    if (event.key === "ArrowRight") {
                        event.preventDefault();
                        scrollNext();
                    }
                }
            }
        })["Carousel[handleKeyDown]"];
        $[17] = scrollNext;
        $[18] = scrollPrev;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const handleKeyDown = t7;
    let t8;
    let t9;
    if ($[20] !== api || $[21] !== setApi) {
        t8 = ({
            "Carousel[useEffect()]": ()=>{
                if (!api || !setApi) {
                    return;
                }
                setApi(api);
            }
        })["Carousel[useEffect()]"];
        t9 = [
            api,
            setApi
        ];
        $[20] = api;
        $[21] = setApi;
        $[22] = t8;
        $[23] = t9;
    } else {
        t8 = $[22];
        t9 = $[23];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t8, t9);
    let t10;
    let t11;
    if ($[24] !== api) {
        t10 = ({
            "Carousel[useEffect()]": ()=>{
                if (!api) {
                    return;
                }
                onSelect(api);
                api.on("reInit", onSelect);
                api.on("select", onSelect);
                return ()=>{
                    api?.off("select", onSelect);
                };
            }
        })["Carousel[useEffect()]"];
        t11 = [
            api,
            onSelect
        ];
        $[24] = api;
        $[25] = t10;
        $[26] = t11;
    } else {
        t10 = $[25];
        t11 = $[26];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t10, t11);
    const t12 = orientation || (opts?.axis === "y" ? "vertical" : "horizontal");
    let t13;
    if ($[27] !== api || $[28] !== canScrollNext || $[29] !== canScrollPrev || $[30] !== carouselRef || $[31] !== opts || $[32] !== scrollNext || $[33] !== scrollPrev || $[34] !== t12) {
        t13 = {
            carouselRef,
            api,
            opts,
            orientation: t12,
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        };
        $[27] = api;
        $[28] = canScrollNext;
        $[29] = canScrollPrev;
        $[30] = carouselRef;
        $[31] = opts;
        $[32] = scrollNext;
        $[33] = scrollPrev;
        $[34] = t12;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== className) {
        t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className);
        $[36] = className;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== children || $[39] !== handleKeyDown || $[40] !== props || $[41] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onKeyDownCapture: handleKeyDown,
            className: t14,
            role: "region",
            "aria-roledescription": "carousel",
            "data-slot": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[38] = children;
        $[39] = handleKeyDown;
        $[40] = props;
        $[41] = t14;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] !== t13 || $[44] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
            value: t13,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[43] = t13;
        $[44] = t15;
        $[45] = t16;
    } else {
        t16 = $[45];
    }
    return t16;
}
_s1(Carousel, "nmXEUAU4TrcVcToApkGXsEW1X78=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Carousel;
function CarouselContent(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    const { carouselRef, orientation } = useCarousel();
    const t1 = orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col";
    let t2;
    if ($[4] !== className || $[5] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", t1, className);
        $[4] = className;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 304,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== carouselRef || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: carouselRef,
            className: "overflow-hidden",
            "data-slot": "carousel-content",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 313,
            columnNumber: 10
        }, this);
        $[10] = carouselRef;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_s2(CarouselContent, "jQxxZhDwSf0lh4R1fnTcF4q8bX8=", false, function() {
    return [
        useCarousel
    ];
});
_c1 = CarouselContent;
function CarouselItem(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    const { orientation } = useCarousel();
    const t1 = orientation === "horizontal" ? "pl-4" : "pt-4";
    let t2;
    if ($[4] !== className || $[5] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 shrink-0 grow-0 basis-full", t1, className);
        $[4] = className;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "group",
            "aria-roledescription": "slide",
            "data-slot": "carousel-item",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 359,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s3(CarouselItem, "A/D6JTqpVAsy3kjHbQMMYEL2tww=", false, function() {
    return [
        useCarousel
    ];
});
_c2 = CarouselItem;
function CarouselPrevious(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const variant = t1 === undefined ? "outline" : t1;
    const size = t2 === undefined ? "icon" : t2;
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    const t3 = orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90";
    let t4;
    if ($[6] !== className || $[7] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", t3, className);
        $[6] = className;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = !canScrollPrev;
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 419,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Previous slide"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 420,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== props || $[12] !== scrollPrev || $[13] !== size || $[14] !== t4 || $[15] !== t5 || $[16] !== variant) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "data-slot": "carousel-previous",
            variant: variant,
            size: size,
            className: t4,
            disabled: t5,
            onClick: scrollPrev,
            ...props,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 429,
            columnNumber: 10
        }, this);
        $[11] = props;
        $[12] = scrollPrev;
        $[13] = size;
        $[14] = t4;
        $[15] = t5;
        $[16] = variant;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s4(CarouselPrevious, "8LUD2tfVphx6WnRQtMD+FytHUvo=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselPrevious;
function CarouselNext(t0) {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e2776a95c6ee270bd22be39a146526f305a12aa11ba6f18ac0b95e6047144f9";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const variant = t1 === undefined ? "outline" : t1;
    const size = t2 === undefined ? "icon" : t2;
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    const t3 = orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90";
    let t4;
    if ($[6] !== className || $[7] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", t3, className);
        $[6] = className;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = !canScrollNext;
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 493,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Next slide"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 494,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== props || $[12] !== scrollNext || $[13] !== size || $[14] !== t4 || $[15] !== t5 || $[16] !== variant) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "data-slot": "carousel-next",
            variant: variant,
            size: size,
            className: t4,
            disabled: t5,
            onClick: scrollNext,
            ...props,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 503,
            columnNumber: 10
        }, this);
        $[11] = props;
        $[12] = scrollNext;
        $[13] = size;
        $[14] = t4;
        $[15] = t5;
        $[16] = variant;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s5(CarouselNext, "i0pmJBg/CJlkCyUiwU+/jSGwijk=", false, function() {
    return [
        useCarousel
    ];
});
_c4 = CarouselNext;
;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Carousel");
__turbopack_context__.k.register(_c1, "CarouselContent");
__turbopack_context__.k.register(_c2, "CarouselItem");
__turbopack_context__.k.register(_c3, "CarouselPrevious");
__turbopack_context__.k.register(_c4, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript) <export * as Separator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Separator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "b5fd443faf074418e7f233ae7a86d489367f4b8bd530eb295c9cf3d50c733788") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b5fd443faf074418e7f233ae7a86d489367f4b8bd530eb295c9cf3d50c733788";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, orientation: t1, decorative: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const orientation = t1 === undefined ? "horizontal" : t1;
    const decorative = t2 === undefined ? true : t2;
    let t3;
    if ($[6] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className);
        $[6] = className;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== decorative || $[9] !== orientation || $[10] !== props || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Separator$3e$__["Separator"].Root, {
            "data-slot": "separator",
            decorative: decorative,
            orientation: orientation,
            className: t3,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/separator.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = decorative;
        $[9] = orientation;
        $[10] = props;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areOptionsEqual",
    ()=>areOptionsEqual,
    "arePluginsEqual",
    ()=>arePluginsEqual,
    "canUseDOM",
    ()=>canUseDOM,
    "sortAndMapPluginToOptions",
    ()=>sortAndMapPluginToOptions
]);
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
    return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
    const optionsAKeys = Object.keys(optionsA);
    const optionsBKeys = Object.keys(optionsB);
    if (optionsAKeys.length !== optionsBKeys.length) return false;
    const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
    const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
    if (breakpointsA !== breakpointsB) return false;
    return optionsAKeys.every((key)=>{
        const valueA = optionsA[key];
        const valueB = optionsB[key];
        if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
        if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
        return areOptionsEqual(valueA, valueB);
    });
}
function sortAndMapPluginToOptions(plugins) {
    return plugins.concat().sort((a, b)=>a.name > b.name ? 1 : -1).map((plugin)=>plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
    if (pluginsA.length !== pluginsB.length) return false;
    const optionsA = sortAndMapPluginToOptions(pluginsA);
    const optionsB = sortAndMapPluginToOptions(pluginsB);
    return optionsA.every((optionA, index)=>{
        const optionB = optionsB[index];
        return areOptionsEqual(optionA, optionB);
    });
}
;
 //# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map
}),
"[project]/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmblaCarousel
]);
function isNumber(subject) {
    return typeof subject === 'number';
}
function isString(subject) {
    return typeof subject === 'string';
}
function isBoolean(subject) {
    return typeof subject === 'boolean';
}
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
    return Math.abs(n);
}
function mathSign(n) {
    return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
    return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
    if (valueB === 0 || valueA === 0) return 0;
    if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
    const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
    return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
    return objectKeys(array).map(Number);
}
function arrayLast(array) {
    return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
    return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
    return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
    return Array.from(Array(n), (_, i)=>startAt + i);
}
function objectKeys(object) {
    return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
    return [
        objectA,
        objectB
    ].reduce((mergedObjects, currentObject)=>{
        objectKeys(currentObject).forEach((key)=>{
            const valueA = mergedObjects[key];
            const valueB = currentObject[key];
            const areObjects = isObject(valueA) && isObject(valueB);
            mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
        });
        return mergedObjects;
    }, {});
}
function isMouseEvent(evt, ownerWindow) {
    return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
    const predefined = {
        start,
        center,
        end
    };
    function start() {
        return 0;
    }
    function center(n) {
        return end(n) / 2;
    }
    function end(n) {
        return viewSize - n;
    }
    function measure(n, index) {
        if (isString(align)) return predefined[align](n);
        return align(viewSize, n, index);
    }
    const self = {
        measure
    };
    return self;
}
function EventStore() {
    let listeners = [];
    function add(node, type, handler, options = {
        passive: true
    }) {
        let removeListener;
        if ('addEventListener' in node) {
            node.addEventListener(type, handler, options);
            removeListener = ()=>node.removeEventListener(type, handler, options);
        } else {
            const legacyMediaQueryList = node;
            legacyMediaQueryList.addListener(handler);
            removeListener = ()=>legacyMediaQueryList.removeListener(handler);
        }
        listeners.push(removeListener);
        return self;
    }
    function clear() {
        listeners = listeners.filter((remove)=>remove());
    }
    const self = {
        add,
        clear
    };
    return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
    const documentVisibleHandler = EventStore();
    const fixedTimeStep = 1000 / 60;
    let lastTimeStamp = null;
    let accumulatedTime = 0;
    let animationId = 0;
    function init() {
        documentVisibleHandler.add(ownerDocument, 'visibilitychange', ()=>{
            if (ownerDocument.hidden) reset();
        });
    }
    function destroy() {
        stop();
        documentVisibleHandler.clear();
    }
    function animate(timeStamp) {
        if (!animationId) return;
        if (!lastTimeStamp) {
            lastTimeStamp = timeStamp;
            update();
            update();
        }
        const timeElapsed = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        accumulatedTime += timeElapsed;
        while(accumulatedTime >= fixedTimeStep){
            update();
            accumulatedTime -= fixedTimeStep;
        }
        const alpha = accumulatedTime / fixedTimeStep;
        render(alpha);
        if (animationId) {
            animationId = ownerWindow.requestAnimationFrame(animate);
        }
    }
    function start() {
        if (animationId) return;
        animationId = ownerWindow.requestAnimationFrame(animate);
    }
    function stop() {
        ownerWindow.cancelAnimationFrame(animationId);
        lastTimeStamp = null;
        accumulatedTime = 0;
        animationId = 0;
    }
    function reset() {
        lastTimeStamp = null;
        accumulatedTime = 0;
    }
    const self = {
        init,
        destroy,
        start,
        stop,
        update,
        render
    };
    return self;
}
function Axis(axis, contentDirection) {
    const isRightToLeft = contentDirection === 'rtl';
    const isVertical = axis === 'y';
    const scroll = isVertical ? 'y' : 'x';
    const cross = isVertical ? 'x' : 'y';
    const sign = !isVertical && isRightToLeft ? -1 : 1;
    const startEdge = getStartEdge();
    const endEdge = getEndEdge();
    function measureSize(nodeRect) {
        const { height, width } = nodeRect;
        return isVertical ? height : width;
    }
    function getStartEdge() {
        if (isVertical) return 'top';
        return isRightToLeft ? 'right' : 'left';
    }
    function getEndEdge() {
        if (isVertical) return 'bottom';
        return isRightToLeft ? 'left' : 'right';
    }
    function direction(n) {
        return n * sign;
    }
    const self = {
        scroll,
        cross,
        startEdge,
        endEdge,
        measureSize,
        direction
    };
    return self;
}
function Limit(min = 0, max = 0) {
    const length = mathAbs(min - max);
    function reachedMin(n) {
        return n < min;
    }
    function reachedMax(n) {
        return n > max;
    }
    function reachedAny(n) {
        return reachedMin(n) || reachedMax(n);
    }
    function constrain(n) {
        if (!reachedAny(n)) return n;
        return reachedMin(n) ? min : max;
    }
    function removeOffset(n) {
        if (!length) return n;
        return n - length * Math.ceil((n - max) / length);
    }
    const self = {
        length,
        max,
        min,
        constrain,
        reachedAny,
        reachedMax,
        reachedMin,
        removeOffset
    };
    return self;
}
function Counter(max, start, loop) {
    const { constrain } = Limit(0, max);
    const loopEnd = max + 1;
    let counter = withinLimit(start);
    function withinLimit(n) {
        return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
    }
    function get() {
        return counter;
    }
    function set(n) {
        counter = withinLimit(n);
        return self;
    }
    function add(n) {
        return clone().set(get() + n);
    }
    function clone() {
        return Counter(max, get(), loop);
    }
    const self = {
        get,
        set,
        add,
        clone
    };
    return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
    const { cross: crossAxis, direction } = axis;
    const focusNodes = [
        'INPUT',
        'SELECT',
        'TEXTAREA'
    ];
    const nonPassiveEvent = {
        passive: false
    };
    const initEvents = EventStore();
    const dragEvents = EventStore();
    const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
    const snapForceBoost = {
        mouse: 300,
        touch: 400
    };
    const freeForceBoost = {
        mouse: 500,
        touch: 600
    };
    const baseSpeed = dragFree ? 43 : 25;
    let isMoving = false;
    let startScroll = 0;
    let startCross = 0;
    let pointerIsDown = false;
    let preventScroll = false;
    let preventClick = false;
    let isMouse = false;
    function init(emblaApi) {
        if (!watchDrag) return;
        function downIfAllowed(evt) {
            if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
        }
        const node = rootNode;
        initEvents.add(node, 'dragstart', (evt)=>evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', ()=>undefined, nonPassiveEvent).add(node, 'touchend', ()=>undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
    }
    function destroy() {
        initEvents.clear();
        dragEvents.clear();
    }
    function addDragEvents() {
        const node = isMouse ? ownerDocument : rootNode;
        dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
    }
    function isFocusNode(node) {
        const nodeName = node.nodeName || '';
        return focusNodes.includes(nodeName);
    }
    function forceBoost() {
        const boost = dragFree ? freeForceBoost : snapForceBoost;
        const type = isMouse ? 'mouse' : 'touch';
        return boost[type];
    }
    function allowedForce(force, targetChanged) {
        const next = index.add(mathSign(force) * -1);
        const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
        if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
        if (skipSnaps && targetChanged) return baseForce * 0.5;
        return scrollTarget.byIndex(next.get(), 0).distance;
    }
    function down(evt) {
        const isMouseEvt = isMouseEvent(evt, ownerWindow);
        isMouse = isMouseEvt;
        preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
        isMoving = deltaAbs(target.get(), location.get()) >= 2;
        if (isMouseEvt && evt.button !== 0) return;
        if (isFocusNode(evt.target)) return;
        pointerIsDown = true;
        dragTracker.pointerDown(evt);
        scrollBody.useFriction(0).useDuration(0);
        target.set(location);
        addDragEvents();
        startScroll = dragTracker.readPoint(evt);
        startCross = dragTracker.readPoint(evt, crossAxis);
        eventHandler.emit('pointerDown');
    }
    function move(evt) {
        const isTouchEvt = !isMouseEvent(evt, ownerWindow);
        if (isTouchEvt && evt.touches.length >= 2) return up(evt);
        const lastScroll = dragTracker.readPoint(evt);
        const lastCross = dragTracker.readPoint(evt, crossAxis);
        const diffScroll = deltaAbs(lastScroll, startScroll);
        const diffCross = deltaAbs(lastCross, startCross);
        if (!preventScroll && !isMouse) {
            if (!evt.cancelable) return up(evt);
            preventScroll = diffScroll > diffCross;
            if (!preventScroll) return up(evt);
        }
        const diff = dragTracker.pointerMove(evt);
        if (diffScroll > dragThreshold) preventClick = true;
        scrollBody.useFriction(0.3).useDuration(0.75);
        animation.start();
        target.add(direction(diff));
        evt.preventDefault();
    }
    function up(evt) {
        const currentLocation = scrollTarget.byDistance(0, false);
        const targetChanged = currentLocation.index !== index.get();
        const rawForce = dragTracker.pointerUp(evt) * forceBoost();
        const force = allowedForce(direction(rawForce), targetChanged);
        const forceFactor = factorAbs(rawForce, force);
        const speed = baseSpeed - 10 * forceFactor;
        const friction = baseFriction + forceFactor / 50;
        preventScroll = false;
        pointerIsDown = false;
        dragEvents.clear();
        scrollBody.useDuration(speed).useFriction(friction);
        scrollTo.distance(force, !dragFree);
        isMouse = false;
        eventHandler.emit('pointerUp');
    }
    function click(evt) {
        if (preventClick) {
            evt.stopPropagation();
            evt.preventDefault();
            preventClick = false;
        }
    }
    function pointerDown() {
        return pointerIsDown;
    }
    const self = {
        init,
        destroy,
        pointerDown
    };
    return self;
}
function DragTracker(axis, ownerWindow) {
    const logInterval = 170;
    let startEvent;
    let lastEvent;
    function readTime(evt) {
        return evt.timeStamp;
    }
    function readPoint(evt, evtAxis) {
        const property = evtAxis || axis.scroll;
        const coord = `client${property === 'x' ? 'X' : 'Y'}`;
        return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
    }
    function pointerDown(evt) {
        startEvent = evt;
        lastEvent = evt;
        return readPoint(evt);
    }
    function pointerMove(evt) {
        const diff = readPoint(evt) - readPoint(lastEvent);
        const expired = readTime(evt) - readTime(startEvent) > logInterval;
        lastEvent = evt;
        if (expired) startEvent = evt;
        return diff;
    }
    function pointerUp(evt) {
        if (!startEvent || !lastEvent) return 0;
        const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
        const diffTime = readTime(evt) - readTime(startEvent);
        const expired = readTime(evt) - readTime(lastEvent) > logInterval;
        const force = diffDrag / diffTime;
        const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
        return isFlick ? force : 0;
    }
    const self = {
        pointerDown,
        pointerMove,
        pointerUp,
        readPoint
    };
    return self;
}
function NodeRects() {
    function measure(node) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
        const offset = {
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
        return offset;
    }
    const self = {
        measure
    };
    return self;
}
function PercentOfView(viewSize) {
    function measure(n) {
        return viewSize * (n / 100);
    }
    const self = {
        measure
    };
    return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
    const observeNodes = [
        container
    ].concat(slides);
    let resizeObserver;
    let containerSize;
    let slideSizes = [];
    let destroyed = false;
    function readSize(node) {
        return axis.measureSize(nodeRects.measure(node));
    }
    function init(emblaApi) {
        if (!watchResize) return;
        containerSize = readSize(container);
        slideSizes = slides.map(readSize);
        function defaultCallback(entries) {
            for (const entry of entries){
                if (destroyed) return;
                const isContainer = entry.target === container;
                const slideIndex = slides.indexOf(entry.target);
                const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
                const newSize = readSize(isContainer ? container : slides[slideIndex]);
                const diffSize = mathAbs(newSize - lastSize);
                if (diffSize >= 0.5) {
                    emblaApi.reInit();
                    eventHandler.emit('resize');
                    break;
                }
            }
        }
        resizeObserver = new ResizeObserver((entries)=>{
            if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
                defaultCallback(entries);
            }
        });
        ownerWindow.requestAnimationFrame(()=>{
            observeNodes.forEach((node)=>resizeObserver.observe(node));
        });
    }
    function destroy() {
        destroyed = true;
        if (resizeObserver) resizeObserver.disconnect();
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
    let scrollVelocity = 0;
    let scrollDirection = 0;
    let scrollDuration = baseDuration;
    let scrollFriction = baseFriction;
    let rawLocation = location.get();
    let rawLocationPrevious = 0;
    function seek() {
        const displacement = target.get() - location.get();
        const isInstant = !scrollDuration;
        let scrollDistance = 0;
        if (isInstant) {
            scrollVelocity = 0;
            previousLocation.set(target);
            location.set(target);
            scrollDistance = displacement;
        } else {
            previousLocation.set(location);
            scrollVelocity += displacement / scrollDuration;
            scrollVelocity *= scrollFriction;
            rawLocation += scrollVelocity;
            location.add(scrollVelocity);
            scrollDistance = rawLocation - rawLocationPrevious;
        }
        scrollDirection = mathSign(scrollDistance);
        rawLocationPrevious = rawLocation;
        return self;
    }
    function settled() {
        const diff = target.get() - offsetLocation.get();
        return mathAbs(diff) < 0.001;
    }
    function duration() {
        return scrollDuration;
    }
    function direction() {
        return scrollDirection;
    }
    function velocity() {
        return scrollVelocity;
    }
    function useBaseDuration() {
        return useDuration(baseDuration);
    }
    function useBaseFriction() {
        return useFriction(baseFriction);
    }
    function useDuration(n) {
        scrollDuration = n;
        return self;
    }
    function useFriction(n) {
        scrollFriction = n;
        return self;
    }
    const self = {
        direction,
        duration,
        velocity,
        seek,
        settled,
        useBaseFriction,
        useBaseDuration,
        useFriction,
        useDuration
    };
    return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
    const pullBackThreshold = percentOfView.measure(10);
    const edgeOffsetTolerance = percentOfView.measure(50);
    const frictionLimit = Limit(0.1, 0.99);
    let disabled = false;
    function shouldConstrain() {
        if (disabled) return false;
        if (!limit.reachedAny(target.get())) return false;
        if (!limit.reachedAny(location.get())) return false;
        return true;
    }
    function constrain(pointerDown) {
        if (!shouldConstrain()) return;
        const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
        const diffToEdge = mathAbs(limit[edge] - location.get());
        const diffToTarget = target.get() - location.get();
        const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
        target.subtract(diffToTarget * friction);
        if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
            target.set(limit.constrain(target.get()));
            scrollBody.useDuration(25).useBaseFriction();
        }
    }
    function toggleActive(active) {
        disabled = !active;
    }
    const self = {
        shouldConstrain,
        constrain,
        toggleActive
    };
    return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
    const scrollBounds = Limit(-contentSize + viewSize, 0);
    const snapsBounded = measureBounded();
    const scrollContainLimit = findScrollContainLimit();
    const snapsContained = measureContained();
    function usePixelTolerance(bound, snap) {
        return deltaAbs(bound, snap) <= 1;
    }
    function findScrollContainLimit() {
        const startSnap = snapsBounded[0];
        const endSnap = arrayLast(snapsBounded);
        const min = snapsBounded.lastIndexOf(startSnap);
        const max = snapsBounded.indexOf(endSnap) + 1;
        return Limit(min, max);
    }
    function measureBounded() {
        return snapsAligned.map((snapAligned, index)=>{
            const { min, max } = scrollBounds;
            const snap = scrollBounds.constrain(snapAligned);
            const isFirst = !index;
            const isLast = arrayIsLastIndex(snapsAligned, index);
            if (isFirst) return max;
            if (isLast) return min;
            if (usePixelTolerance(min, snap)) return min;
            if (usePixelTolerance(max, snap)) return max;
            return snap;
        }).map((scrollBound)=>parseFloat(scrollBound.toFixed(3)));
    }
    function measureContained() {
        if (contentSize <= viewSize + pixelTolerance) return [
            scrollBounds.max
        ];
        if (containScroll === 'keepSnaps') return snapsBounded;
        const { min, max } = scrollContainLimit;
        return snapsBounded.slice(min, max);
    }
    const self = {
        snapsContained,
        scrollContainLimit
    };
    return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
    const max = scrollSnaps[0];
    const min = loop ? max - contentSize : arrayLast(scrollSnaps);
    const limit = Limit(min, max);
    const self = {
        limit
    };
    return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
    const jointSafety = 0.1;
    const min = limit.min + jointSafety;
    const max = limit.max + jointSafety;
    const { reachedMin, reachedMax } = Limit(min, max);
    function shouldLoop(direction) {
        if (direction === 1) return reachedMax(location.get());
        if (direction === -1) return reachedMin(location.get());
        return false;
    }
    function loop(direction) {
        if (!shouldLoop(direction)) return;
        const loopDistance = contentSize * (direction * -1);
        vectors.forEach((v)=>v.add(loopDistance));
    }
    const self = {
        loop
    };
    return self;
}
function ScrollProgress(limit) {
    const { max, length } = limit;
    function get(n) {
        const currentLocation = n - max;
        return length ? currentLocation / -length : 0;
    }
    const self = {
        get
    };
    return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
    const { startEdge, endEdge } = axis;
    const { groupSlides } = slidesToScroll;
    const alignments = measureSizes().map(alignment.measure);
    const snaps = measureUnaligned();
    const snapsAligned = measureAligned();
    function measureSizes() {
        return groupSlides(slideRects).map((rects)=>arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
    }
    function measureUnaligned() {
        return slideRects.map((rect)=>containerRect[startEdge] - rect[startEdge]).map((snap)=>-mathAbs(snap));
    }
    function measureAligned() {
        return groupSlides(snaps).map((g)=>g[0]).map((snap, index)=>snap + alignments[index]);
    }
    const self = {
        snaps,
        snapsAligned
    };
    return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
    const { groupSlides } = slidesToScroll;
    const { min, max } = scrollContainLimit;
    const slideRegistry = createSlideRegistry();
    function createSlideRegistry() {
        const groupedSlideIndexes = groupSlides(slideIndexes);
        const doNotContain = !containSnaps || containScroll === 'keepSnaps';
        if (scrollSnaps.length === 1) return [
            slideIndexes
        ];
        if (doNotContain) return groupedSlideIndexes;
        return groupedSlideIndexes.slice(min, max).map((group, index, groups)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(groups, index);
            if (isFirst) {
                const range = arrayLast(groups[0]) + 1;
                return arrayFromNumber(range);
            }
            if (isLast) {
                const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
                return arrayFromNumber(range, arrayLast(groups)[0]);
            }
            return group;
        });
    }
    const self = {
        slideRegistry
    };
    return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
    const { reachedAny, removeOffset, constrain } = limit;
    function minDistance(distances) {
        return distances.concat().sort((a, b)=>mathAbs(a) - mathAbs(b))[0];
    }
    function findTargetSnap(target) {
        const distance = loop ? removeOffset(target) : constrain(target);
        const ascDiffsToSnaps = scrollSnaps.map((snap, index)=>({
                diff: shortcut(snap - distance, 0),
                index
            })).sort((d1, d2)=>mathAbs(d1.diff) - mathAbs(d2.diff));
        const { index } = ascDiffsToSnaps[0];
        return {
            index,
            distance
        };
    }
    function shortcut(target, direction) {
        const targets = [
            target,
            target + contentSize,
            target - contentSize
        ];
        if (!loop) return target;
        if (!direction) return minDistance(targets);
        const matchingTargets = targets.filter((t)=>mathSign(t) === direction);
        if (matchingTargets.length) return minDistance(matchingTargets);
        return arrayLast(targets) - contentSize;
    }
    function byIndex(index, direction) {
        const diffToSnap = scrollSnaps[index] - targetVector.get();
        const distance = shortcut(diffToSnap, direction);
        return {
            index,
            distance
        };
    }
    function byDistance(distance, snap) {
        const target = targetVector.get() + distance;
        const { index, distance: targetSnapDistance } = findTargetSnap(target);
        const reachedBound = !loop && reachedAny(target);
        if (!snap || reachedBound) return {
            index,
            distance
        };
        const diffToSnap = scrollSnaps[index] - targetSnapDistance;
        const snapDistance = distance + shortcut(diffToSnap, 0);
        return {
            index,
            distance: snapDistance
        };
    }
    const self = {
        byDistance,
        byIndex,
        shortcut
    };
    return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
    function scrollTo(target) {
        const distanceDiff = target.distance;
        const indexDiff = target.index !== indexCurrent.get();
        targetVector.add(distanceDiff);
        if (distanceDiff) {
            if (scrollBody.duration()) {
                animation.start();
            } else {
                animation.update();
                animation.render(1);
                animation.update();
            }
        }
        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit('select');
        }
    }
    function distance(n, snap) {
        const target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }
    function index(n, direction) {
        const targetIndex = indexCurrent.clone().set(n);
        const target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }
    const self = {
        distance,
        index
    };
    return self;
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
    const focusListenerOptions = {
        passive: true,
        capture: true
    };
    let lastTabPressTime = 0;
    function init(emblaApi) {
        if (!watchFocus) return;
        function defaultCallback(index) {
            const nowTime = new Date().getTime();
            const diffTime = nowTime - lastTabPressTime;
            if (diffTime > 10) return;
            eventHandler.emit('slideFocusStart');
            root.scrollLeft = 0;
            const group = slideRegistry.findIndex((group)=>group.includes(index));
            if (!isNumber(group)) return;
            scrollBody.useDuration(0);
            scrollTo.index(group, 0);
            eventHandler.emit('slideFocus');
        }
        eventStore.add(document, 'keydown', registerTabPress, false);
        slides.forEach((slide, slideIndex)=>{
            eventStore.add(slide, 'focus', (evt)=>{
                if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
                    defaultCallback(slideIndex);
                }
            }, focusListenerOptions);
        });
    }
    function registerTabPress(event) {
        if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
    }
    const self = {
        init
    };
    return self;
}
function Vector1D(initialValue) {
    let value = initialValue;
    function get() {
        return value;
    }
    function set(n) {
        value = normalizeInput(n);
    }
    function add(n) {
        value += normalizeInput(n);
    }
    function subtract(n) {
        value -= normalizeInput(n);
    }
    function normalizeInput(n) {
        return isNumber(n) ? n : n.get();
    }
    const self = {
        get,
        set,
        add,
        subtract
    };
    return self;
}
function Translate(axis, container) {
    const translate = axis.scroll === 'x' ? x : y;
    const containerStyle = container.style;
    let previousTarget = null;
    let disabled = false;
    function x(n) {
        return `translate3d(${n}px,0px,0px)`;
    }
    function y(n) {
        return `translate3d(0px,${n}px,0px)`;
    }
    function to(target) {
        if (disabled) return;
        const newTarget = roundToTwoDecimals(axis.direction(target));
        if (newTarget === previousTarget) return;
        containerStyle.transform = translate(newTarget);
        previousTarget = newTarget;
    }
    function toggleActive(active) {
        disabled = !active;
    }
    function clear() {
        if (disabled) return;
        containerStyle.transform = '';
        if (!container.getAttribute('style')) container.removeAttribute('style');
    }
    const self = {
        clear,
        to,
        toggleActive
    };
    return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
    const roundingSafety = 0.5;
    const ascItems = arrayKeys(slideSizesWithGaps);
    const descItems = arrayKeys(slideSizesWithGaps).reverse();
    const loopPoints = startPoints().concat(endPoints());
    function removeSlideSizes(indexes, from) {
        return indexes.reduce((a, i)=>{
            return a - slideSizesWithGaps[i];
        }, from);
    }
    function slidesInGap(indexes, gap) {
        return indexes.reduce((a, i)=>{
            const remainingGap = removeSlideSizes(a, gap);
            return remainingGap > 0 ? a.concat([
                i
            ]) : a;
        }, []);
    }
    function findSlideBounds(offset) {
        return snaps.map((snap, index)=>({
                start: snap - slideSizes[index] + roundingSafety + offset,
                end: snap + viewSize - roundingSafety + offset
            }));
    }
    function findLoopPoints(indexes, offset, isEndEdge) {
        const slideBounds = findSlideBounds(offset);
        return indexes.map((index)=>{
            const initial = isEndEdge ? 0 : -contentSize;
            const altered = isEndEdge ? contentSize : 0;
            const boundEdge = isEndEdge ? 'end' : 'start';
            const loopPoint = slideBounds[index][boundEdge];
            return {
                index,
                loopPoint,
                slideLocation: Vector1D(-1),
                translate: Translate(axis, slides[index]),
                target: ()=>location.get() > loopPoint ? initial : altered
            };
        });
    }
    function startPoints() {
        const gap = scrollSnaps[0];
        const indexes = slidesInGap(descItems, gap);
        return findLoopPoints(indexes, contentSize, false);
    }
    function endPoints() {
        const gap = viewSize - scrollSnaps[0] - 1;
        const indexes = slidesInGap(ascItems, gap);
        return findLoopPoints(indexes, -contentSize, true);
    }
    function canLoop() {
        return loopPoints.every(({ index })=>{
            const otherIndexes = ascItems.filter((i)=>i !== index);
            return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
        });
    }
    function loop() {
        loopPoints.forEach((loopPoint)=>{
            const { target, translate, slideLocation } = loopPoint;
            const shiftLocation = target();
            if (shiftLocation === slideLocation.get()) return;
            translate.to(shiftLocation);
            slideLocation.set(shiftLocation);
        });
    }
    function clear() {
        loopPoints.forEach((loopPoint)=>loopPoint.translate.clear());
    }
    const self = {
        canLoop,
        clear,
        loop,
        loopPoints
    };
    return self;
}
function SlidesHandler(container, eventHandler, watchSlides) {
    let mutationObserver;
    let destroyed = false;
    function init(emblaApi) {
        if (!watchSlides) return;
        function defaultCallback(mutations) {
            for (const mutation of mutations){
                if (mutation.type === 'childList') {
                    emblaApi.reInit();
                    eventHandler.emit('slidesChanged');
                    break;
                }
            }
        }
        mutationObserver = new MutationObserver((mutations)=>{
            if (destroyed) return;
            if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
                defaultCallback(mutations);
            }
        });
        mutationObserver.observe(container, {
            childList: true
        });
    }
    function destroy() {
        if (mutationObserver) mutationObserver.disconnect();
        destroyed = true;
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function SlidesInView(container, slides, eventHandler, threshold) {
    const intersectionEntryMap = {};
    let inViewCache = null;
    let notInViewCache = null;
    let intersectionObserver;
    let destroyed = false;
    function init() {
        intersectionObserver = new IntersectionObserver((entries)=>{
            if (destroyed) return;
            entries.forEach((entry)=>{
                const index = slides.indexOf(entry.target);
                intersectionEntryMap[index] = entry;
            });
            inViewCache = null;
            notInViewCache = null;
            eventHandler.emit('slidesInView');
        }, {
            root: container.parentElement,
            threshold
        });
        slides.forEach((slide)=>intersectionObserver.observe(slide));
    }
    function destroy() {
        if (intersectionObserver) intersectionObserver.disconnect();
        destroyed = true;
    }
    function createInViewList(inView) {
        return objectKeys(intersectionEntryMap).reduce((list, slideIndex)=>{
            const index = parseInt(slideIndex);
            const { isIntersecting } = intersectionEntryMap[index];
            const inViewMatch = inView && isIntersecting;
            const notInViewMatch = !inView && !isIntersecting;
            if (inViewMatch || notInViewMatch) list.push(index);
            return list;
        }, []);
    }
    function get(inView = true) {
        if (inView && inViewCache) return inViewCache;
        if (!inView && notInViewCache) return notInViewCache;
        const slideIndexes = createInViewList(inView);
        if (inView) inViewCache = slideIndexes;
        if (!inView) notInViewCache = slideIndexes;
        return slideIndexes;
    }
    const self = {
        init,
        destroy,
        get
    };
    return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
    const { measureSize, startEdge, endEdge } = axis;
    const withEdgeGap = slideRects[0] && readEdgeGap;
    const startGap = measureStartGap();
    const endGap = measureEndGap();
    const slideSizes = slideRects.map(measureSize);
    const slideSizesWithGaps = measureWithGaps();
    function measureStartGap() {
        if (!withEdgeGap) return 0;
        const slideRect = slideRects[0];
        return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
    }
    function measureEndGap() {
        if (!withEdgeGap) return 0;
        const style = ownerWindow.getComputedStyle(arrayLast(slides));
        return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
    }
    function measureWithGaps() {
        return slideRects.map((rect, index, rects)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(rects, index);
            if (isFirst) return slideSizes[index] + startGap;
            if (isLast) return slideSizes[index] + endGap;
            return rects[index + 1][startEdge] - rect[startEdge];
        }).map(mathAbs);
    }
    const self = {
        slideSizes,
        slideSizesWithGaps,
        startGap,
        endGap
    };
    return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
    const { startEdge, endEdge, direction } = axis;
    const groupByNumber = isNumber(slidesToScroll);
    function byNumber(array, groupSize) {
        return arrayKeys(array).filter((i)=>i % groupSize === 0).map((i)=>array.slice(i, i + groupSize));
    }
    function bySize(array) {
        if (!array.length) return [];
        return arrayKeys(array).reduce((groups, rectB, index)=>{
            const rectA = arrayLast(groups) || 0;
            const isFirst = rectA === 0;
            const isLast = rectB === arrayLastIndex(array);
            const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
            const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
            const gapA = !loop && isFirst ? direction(startGap) : 0;
            const gapB = !loop && isLast ? direction(endGap) : 0;
            const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
            if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
            if (isLast) groups.push(array.length);
            return groups;
        }, []).map((currentSize, index, groups)=>{
            const previousSize = Math.max(groups[index - 1] || 0);
            return array.slice(previousSize, currentSize);
        });
    }
    function groupSlides(array) {
        return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
    }
    const self = {
        groupSlides
    };
    return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
    // Options
    const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
    // Measurements
    const pixelTolerance = 2;
    const nodeRects = NodeRects();
    const containerRect = nodeRects.measure(container);
    const slideRects = slides.map(nodeRects.measure);
    const axis = Axis(scrollAxis, direction);
    const viewSize = axis.measureSize(containerRect);
    const percentOfView = PercentOfView(viewSize);
    const alignment = Alignment(align, viewSize);
    const containSnaps = !loop && !!containScroll;
    const readEdgeGap = loop || !!containScroll;
    const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
    const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
    const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
    const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
    const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
    // Indexes
    const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    const indexPrevious = index.clone();
    const slideIndexes = arrayKeys(slides);
    // Animation
    const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } })=>{
        if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
        scrollBody.seek();
    };
    const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha)=>{
        const shouldSettle = scrollBody.settled();
        const withinBounds = !scrollBounds.shouldConstrain();
        const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
        const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
        if (hasSettledAndIdle) animation.stop();
        const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
        offsetLocation.set(interpolatedLocation);
        if (loop) {
            scrollLooper.loop(scrollBody.direction());
            slideLooper.loop();
        }
        translate.to(offsetLocation.get());
        if (hasSettledAndIdle) eventHandler.emit('settle');
        if (!hasSettled) eventHandler.emit('scroll');
    };
    const animation = Animations(ownerDocument, ownerWindow, ()=>update(engine), (alpha)=>render(engine, alpha));
    // Shared
    const friction = 0.68;
    const startLocation = scrollSnaps[index.get()];
    const location = Vector1D(startLocation);
    const previousLocation = Vector1D(startLocation);
    const offsetLocation = Vector1D(startLocation);
    const target = Vector1D(startLocation);
    const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
    const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
    const scrollProgress = ScrollProgress(limit);
    const eventStore = EventStore();
    const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
    const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
    const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
    // Engine
    const engine = {
        ownerDocument,
        ownerWindow,
        eventHandler,
        containerRect,
        slideRects,
        animation,
        axis,
        dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
        eventStore,
        percentOfView,
        index,
        indexPrevious,
        limit,
        location,
        offsetLocation,
        previousLocation,
        options,
        resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
        scrollBody,
        scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
            location,
            offsetLocation,
            previousLocation,
            target
        ]),
        scrollProgress,
        scrollSnapList: scrollSnaps.map(scrollProgress.get),
        scrollSnaps,
        scrollTarget,
        scrollTo,
        slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
        slideFocus,
        slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
        slidesInView,
        slideIndexes,
        slideRegistry,
        slidesToScroll,
        target,
        translate: Translate(axis, container)
    };
    return engine;
}
function EventHandler() {
    let listeners = {};
    let api;
    function init(emblaApi) {
        api = emblaApi;
    }
    function getListeners(evt) {
        return listeners[evt] || [];
    }
    function emit(evt) {
        getListeners(evt).forEach((e)=>e(api, evt));
        return self;
    }
    function on(evt, cb) {
        listeners[evt] = getListeners(evt).concat([
            cb
        ]);
        return self;
    }
    function off(evt, cb) {
        listeners[evt] = getListeners(evt).filter((e)=>e !== cb);
        return self;
    }
    function clear() {
        listeners = {};
    }
    const self = {
        init,
        emit,
        off,
        on,
        clear
    };
    return self;
}
const defaultOptions = {
    align: 'center',
    axis: 'x',
    container: null,
    slides: null,
    containScroll: 'trimSnaps',
    direction: 'ltr',
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
    watchFocus: true
};
function OptionsHandler(ownerWindow) {
    function mergeOptions(optionsA, optionsB) {
        return objectsMergeDeep(optionsA, optionsB || {});
    }
    function optionsAtMedia(options) {
        const optionsAtMedia = options.breakpoints || {};
        const matchedMediaOptions = objectKeys(optionsAtMedia).filter((media)=>ownerWindow.matchMedia(media).matches).map((media)=>optionsAtMedia[media]).reduce((a, mediaOption)=>mergeOptions(a, mediaOption), {});
        return mergeOptions(options, matchedMediaOptions);
    }
    function optionsMediaQueries(optionsList) {
        return optionsList.map((options)=>objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries)=>acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
    }
    const self = {
        mergeOptions,
        optionsAtMedia,
        optionsMediaQueries
    };
    return self;
}
function PluginsHandler(optionsHandler) {
    let activePlugins = [];
    function init(emblaApi, plugins) {
        activePlugins = plugins.filter(({ options })=>optionsHandler.optionsAtMedia(options).active !== false);
        activePlugins.forEach((plugin)=>plugin.init(emblaApi, optionsHandler));
        return plugins.reduce((map, plugin)=>Object.assign(map, {
                [plugin.name]: plugin
            }), {});
    }
    function destroy() {
        activePlugins = activePlugins.filter((plugin)=>plugin.destroy());
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
    const ownerDocument = root.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    const optionsHandler = OptionsHandler(ownerWindow);
    const pluginsHandler = PluginsHandler(optionsHandler);
    const mediaHandlers = EventStore();
    const eventHandler = EventHandler();
    const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
    const { on, off, emit } = eventHandler;
    const reInit = reActivate;
    let destroyed = false;
    let engine;
    let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
    let options = mergeOptions(optionsBase);
    let pluginList = [];
    let pluginApis;
    let container;
    let slides;
    function storeElements() {
        const { container: userContainer, slides: userSlides } = options;
        const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
        container = customContainer || root.children[0];
        const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
        slides = [].slice.call(customSlides || container.children);
    }
    function createEngine(options) {
        const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
        if (options.loop && !engine.slideLooper.canLoop()) {
            const optionsWithoutLoop = Object.assign({}, options, {
                loop: false
            });
            return createEngine(optionsWithoutLoop);
        }
        return engine;
    }
    function activate(withOptions, withPlugins) {
        if (destroyed) return;
        optionsBase = mergeOptions(optionsBase, withOptions);
        options = optionsAtMedia(optionsBase);
        pluginList = withPlugins || pluginList;
        storeElements();
        engine = createEngine(options);
        optionsMediaQueries([
            optionsBase,
            ...pluginList.map(({ options })=>options)
        ]).forEach((query)=>mediaHandlers.add(query, 'change', reActivate));
        if (!options.active) return;
        engine.translate.to(engine.location.get());
        engine.animation.init();
        engine.slidesInView.init();
        engine.slideFocus.init(self);
        engine.eventHandler.init(self);
        engine.resizeHandler.init(self);
        engine.slidesHandler.init(self);
        if (engine.options.loop) engine.slideLooper.loop();
        if (container.offsetParent && slides.length) engine.dragHandler.init(self);
        pluginApis = pluginsHandler.init(self, pluginList);
    }
    function reActivate(withOptions, withPlugins) {
        const startIndex = selectedScrollSnap();
        deActivate();
        activate(mergeOptions({
            startIndex
        }, withOptions), withPlugins);
        eventHandler.emit('reInit');
    }
    function deActivate() {
        engine.dragHandler.destroy();
        engine.eventStore.clear();
        engine.translate.clear();
        engine.slideLooper.clear();
        engine.resizeHandler.destroy();
        engine.slidesHandler.destroy();
        engine.slidesInView.destroy();
        engine.animation.destroy();
        pluginsHandler.destroy();
        mediaHandlers.clear();
    }
    function destroy() {
        if (destroyed) return;
        destroyed = true;
        mediaHandlers.clear();
        deActivate();
        eventHandler.emit('destroy');
        eventHandler.clear();
    }
    function scrollTo(index, jump, direction) {
        if (!options.active || destroyed) return;
        engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
        engine.scrollTo.index(index, direction || 0);
    }
    function scrollNext(jump) {
        const next = engine.index.add(1).get();
        scrollTo(next, jump, -1);
    }
    function scrollPrev(jump) {
        const prev = engine.index.add(-1).get();
        scrollTo(prev, jump, 1);
    }
    function canScrollNext() {
        const next = engine.index.add(1).get();
        return next !== selectedScrollSnap();
    }
    function canScrollPrev() {
        const prev = engine.index.add(-1).get();
        return prev !== selectedScrollSnap();
    }
    function scrollSnapList() {
        return engine.scrollSnapList;
    }
    function scrollProgress() {
        return engine.scrollProgress.get(engine.offsetLocation.get());
    }
    function selectedScrollSnap() {
        return engine.index.get();
    }
    function previousScrollSnap() {
        return engine.indexPrevious.get();
    }
    function slidesInView() {
        return engine.slidesInView.get();
    }
    function slidesNotInView() {
        return engine.slidesInView.get(false);
    }
    function plugins() {
        return pluginApis;
    }
    function internalEngine() {
        return engine;
    }
    function rootNode() {
        return root;
    }
    function containerNode() {
        return container;
    }
    function slideNodes() {
        return slides;
    }
    const self = {
        canScrollNext,
        canScrollPrev,
        containerNode,
        internalEngine,
        destroy,
        off,
        on,
        emit,
        plugins,
        previousScrollSnap,
        reInit,
        rootNode,
        scrollNext,
        scrollPrev,
        scrollProgress,
        scrollSnapList,
        scrollTo,
        selectedScrollSnap,
        slideNodes,
        slidesInView,
        slidesNotInView
    };
    activate(userOptions, userPlugins);
    setTimeout(()=>eventHandler.emit('init'), 0);
    return self;
}
EmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel.esm.js.map
}),
"[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEmblaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-client] (ecmascript)");
;
;
;
function useEmblaCarousel(options = {}, plugins = []) {
    const storedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(options);
    const storedPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(plugins);
    const [emblaApi, setEmblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const reInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEmblaCarousel.useCallback[reInit]": ()=>{
            if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
        }
    }["useEmblaCarousel.useCallback[reInit]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areOptionsEqual"])(storedOptions.current, options)) return;
            storedOptions.current = options;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        options,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arePluginsEqual"])(storedPlugins.current, plugins)) return;
            storedPlugins.current = plugins;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        plugins,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"])() && viewport) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].globalOptions = useEmblaCarousel.globalOptions;
                const newEmblaApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(viewport, storedOptions.current, storedPlugins.current);
                setEmblaApi(newEmblaApi);
                return ({
                    "useEmblaCarousel.useEffect": ()=>newEmblaApi.destroy()
                })["useEmblaCarousel.useEffect"];
            } else {
                setEmblaApi(undefined);
            }
        }
    }["useEmblaCarousel.useEffect"], [
        viewport,
        setEmblaApi
    ]);
    return [
        setViewport,
        emblaApi
    ];
}
useEmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-react.esm.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Separator",
    ()=>Separator
]);
// src/separator.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = [
    "horizontal",
    "vertical"
];
var Separator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
        role: "none"
    } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
    });
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
}
var Root = Separator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript) <export * as Separator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1ad19e9d._.js.map