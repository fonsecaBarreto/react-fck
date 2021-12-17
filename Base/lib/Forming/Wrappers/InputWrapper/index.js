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
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var InputWrapper = function (_a) {
    var children = _a.children, label = _a.label, error = _a.error, className = _a.className;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "input-wrapper ".concat(className, " ").concat(error ? "warning" : '') }, { children: [(0, jsx_runtime_1.jsx)("label", { children: label }, void 0), children, error && (0, jsx_runtime_1.jsx)("span", __assign({ className: "form-error" }, { children: error }), void 0)] }), void 0));
};
exports.default = InputWrapper;
//# sourceMappingURL=index.js.map