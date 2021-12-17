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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./style.css");
var si_1 = require("react-icons/si");
var FormPanel = function (_a) {
    var title = _a.title, children = _a.children, _b = _a.columns, columns = _b === void 0 ? [] : _b, freeze = _a.freeze;
    var classNames = ["one", "two", "three", "four", "five", "six"];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-panel ".concat(freeze ? 'freeze' : '') }, { children: [(0, jsx_runtime_1.jsx)("section", { children: title && (0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(si_1.SiPlatformdotsh, {}, void 0), (0, jsx_runtime_1.jsxs)("span", __assign({ className: "cf-title" }, { children: ["  ", title || ""] }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("section", __assign({ className: "form-panel-content" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "form-panel-grid" }, { children: react_1.default.Children.map(children, function (x, i) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "grid-row ".concat(classNames[columns[i] - 1]) }, { children: [" ", x, " "] }), void 0)); }) }), void 0) }), void 0)] }), void 0));
};
exports.FormPanel = FormPanel;
exports.default = exports.FormPanel;
//# sourceMappingURL=index.js.map