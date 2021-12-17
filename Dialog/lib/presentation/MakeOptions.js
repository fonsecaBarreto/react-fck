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
exports.MakeOptions = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var Dialog_1 = require("../Dialog");
function MakeOptions(onAction, options, title) {
    if (options === void 0) { options = []; }
    if (title === void 0) { title = "Opções"; }
    return (0, Dialog_1.MakeDialogConfig)(function (_a) {
        var onAction = _a.onAction;
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "options-dialog" }, { children: options.map(function (o, i) {
                return ((0, jsx_runtime_1.jsxs)("button", __assign({ onClick: function () { return onAction(i); } }, { children: [" ", o.label, " "] }), i));
            }) }), void 0));
    }, onAction, title);
}
exports.MakeOptions = MakeOptions;
exports.default = MakeOptions;
//# sourceMappingURL=MakeOptions.js.map