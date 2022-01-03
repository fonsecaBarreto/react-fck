"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
require("./style.css");
var si_1 = require("react-icons/si");
var FormGrid = function (_a) {
    var title = _a.title, children = _a.children, columns = _a.columns, _b = _a.freeze, freeze = _b === void 0 ? false : _b, icon = _a.icon;
    var _c = (0, react_1.useState)([]), cols = _c[0], setCols = _c[1];
    (0, react_1.useEffect)(function () {
        if (!columns)
            return;
        var novo = columns.map(function (c, i) {
            if (typeof c == "number") {
                return { sm: 12, lg: c };
            }
            return c;
        });
        setCols(novo);
    }, [columns]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-panel ".concat(freeze ? 'freeze' : '') }, { children: [(0, jsx_runtime_1.jsx)("section", { children: title && (0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [icon ? { icon: icon } : (0, jsx_runtime_1.jsx)(si_1.SiPlatformdotsh, {}, void 0), (0, jsx_runtime_1.jsxs)("span", __assign({ className: "cf-title" }, { children: ["  ", title || ""] }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("section", __assign({ className: "form-panel-content" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "form-panel-grid" }, { children: react_1.default.Children.map(children, function (x, i) { var _a, _b, _c, _d; return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "grid-row r-lg".concat((_b = (_a = cols[i]) === null || _a === void 0 ? void 0 : _a.lg) !== null && _b !== void 0 ? _b : 12, " r-sm").concat((_d = (_c = cols[i]) === null || _c === void 0 ? void 0 : _c.sm) !== null && _d !== void 0 ? _d : 12) }, { children: [" ", x, " "] }), void 0)); }) }), void 0) }), void 0)] }), void 0));
};
exports.FormGrid = FormGrid;
exports.default = exports.FormGrid;
//# sourceMappingURL=index.js.map