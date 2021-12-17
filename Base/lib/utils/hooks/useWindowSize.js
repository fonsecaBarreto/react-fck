import { useEffect, useState } from 'react';
export function useWindowSize() {
    var _a = useState({ width: 0, height: 0 }), windowSize = _a[0], setWindowSize = _a[1];
    useEffect(function () {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowSize;
}
//# sourceMappingURL=useWindowSize.js.map