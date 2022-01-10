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
exports.TextBox = exports.TextBoxTypes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var InputWrapper_1 = __importDefault(require("../Forming/Wrappers/InputWrapper"));
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var TextBoxTypes;
(function (TextBoxTypes) {
    TextBoxTypes["TEXT"] = "text";
    TextBoxTypes["VIEW"] = "view";
    TextBoxTypes["TEXTAREA"] = "textarea";
    TextBoxTypes["NUMBER"] = "number";
    TextBoxTypes["PASSWORD"] = "password";
})(TextBoxTypes = exports.TextBoxTypes || (exports.TextBoxTypes = {}));
var TextBox = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var name = _a.name, label = _a.label, type = _a.type, placeHolder = _a.placeHolder, state = _a.state, className = _a.className, mask = _a.mask;
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, __assign({ label: label !== null && label !== void 0 ? label : name, error: state.errors.get[name], className: className }, { children: type == TextBoxTypes.TEXTAREA ?
            (0, jsx_runtime_1.jsx)("textarea", { rows: 4, cols: 50, placeholder: placeHolder !== null && placeHolder !== void 0 ? placeHolder : '', value: (_c = (_b = state.data.get) === null || _b === void 0 ? void 0 : _b[name]) !== null && _c !== void 0 ? _c : "", onInput: function (e) { return state.data.onInput(name, e.target.value); } }, void 0)
            : type == TextBoxTypes.VIEW ?
                (0, jsx_runtime_1.jsx)("input", { disabled: true, type: 'text', value: (_e = (_d = state.data.get) === null || _d === void 0 ? void 0 : _d[name]) !== null && _e !== void 0 ? _e : "" }, void 0)
                :
                    mask ?
                        (0, jsx_runtime_1.jsx)(react_input_mask_1.default, { className: "custom-input", type: 'text', placeholder: placeHolder !== null && placeHolder !== void 0 ? placeHolder : '', mask: mask, value: (_g = (_f = state.data.get) === null || _f === void 0 ? void 0 : _f[name]) !== null && _g !== void 0 ? _g : "", onInput: function (e) { return state.data.onInput(name, e.target.value); } }, void 0)
                        :
                            (0, jsx_runtime_1.jsx)("input", { type: type, placeholder: placeHolder !== null && placeHolder !== void 0 ? placeHolder : '', value: (_j = (_h = state.data.get) === null || _h === void 0 ? void 0 : _h[name]) !== null && _j !== void 0 ? _j : "", onInput: function (e) { return state.data.onInput(name, e.target.value); } }, void 0) }), void 0));
};
exports.TextBox = TextBox;
//# sourceMappingURL=TextBox.js.map