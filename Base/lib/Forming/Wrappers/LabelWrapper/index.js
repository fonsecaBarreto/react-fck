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
exports.LabelWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var LabelWrapper = function (_a) {
    var label = _a.label, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "label-wrapper" }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: [label, ":"] }, void 0), " ", children] }), void 0));
};
exports.LabelWrapper = LabelWrapper;
exports.default = exports.LabelWrapper;
//# sourceMappingURL=index.js.map