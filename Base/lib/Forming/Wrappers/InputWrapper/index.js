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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var InputWrapper = function (_a) {
    var children = _a.children, label = _a.label, error = _a.error, className = _a.className, _b = _a.w100, w100 = _b === void 0 ? true : _b;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "input-wrapper ".concat(error ? "warning" : '', " ").concat(w100 ? "w100" : "", " ").concat(className, " ") }, { children: [(0, jsx_runtime_1.jsx)("label", { children: label }, void 0), children, error && (0, jsx_runtime_1.jsx)("span", __assign({ className: "form-error" }, { children: error }), void 0)] }), void 0));
};
exports.InputWrapper = InputWrapper;
exports.default = exports.InputWrapper;
//# sourceMappingURL=index.js.map