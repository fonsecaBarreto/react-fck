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
exports.Dialog = exports.MakeDialogConfig = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./style.css");
var fa_1 = require("react-icons/fa");
var MakeDialogConfig = function (content, onAction, title, icon, loading) {
    if (title === void 0) { title = "..."; }
    if (icon === void 0) { icon = null; }
    if (loading === void 0) { loading = false; }
    return ({ content: content, onAction: onAction, title: title, icon: icon, loading: loading });
};
exports.MakeDialogConfig = MakeDialogConfig;
function Dialog(_a) {
    var config = _a.config, _b = _a.offset, offset = _b === void 0 ? 0 : _b, _c = _a.show, show = _c === void 0 ? true : _c;
    var Content = config.content, title = config.title, loading = config.loading, onAction = config.onAction, icon = config.icon;
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: !show ? undefined
            : (0, jsx_runtime_1.jsx)("div", __assign({ className: "fck-dialog" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'fck-dialog-float-container' }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "fck-dialog-content" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "fck-dialog-header" }, { children: [icon && (0, jsx_runtime_1.jsxs)("span", { children: [" ", icon] }, void 0), title && (0, jsx_runtime_1.jsx)("span", { children: title }, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return onAction(-1); }, className: "adc-close" }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaTimes, { children: " " }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "fck-dialog-body ".concat(loading ? ' div-loading' : '') }, { children: (0, jsx_runtime_1.jsx)(Content, { onAction: onAction }, void 0) }), void 0)] }), void 0) }), void 0) }), void 0) }, void 0));
}
exports.Dialog = Dialog;
exports.default = Dialog;
//# sourceMappingURL=index.js.map