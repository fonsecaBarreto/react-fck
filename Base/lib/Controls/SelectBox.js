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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var InputWrapper_1 = __importDefault(require("../Forming/Wrappers/InputWrapper"));
var SelectBox = function (_a) {
    var _b, _c;
    var name = _a.name, label = _a.label, state = _a.state, list = _a.list, placeHolder = _a.placeHolder, className = _a.className;
    var _d = (0, react_1.useState)([]), workList = _d[0], setWorkList = _d[1];
    (0, react_1.useEffect)(function () {
        if (!list)
            throw new Error("Nenhuma Lista foi fornecida");
        var novo = list.map(function (l, i) {
            if (typeof l == "string") {
                return ({ value: i + "", label: l });
            }
            return l;
        });
        setWorkList(__spreadArray([{ value: "", label: placeHolder !== null && placeHolder !== void 0 ? placeHolder : "Nenhum Item Selecionado " }], novo, true));
    }, [list]);
    var handleInput = function (e) {
        state.data.onInput(name, { value: e.target.value, label: workList[e.target.options.selectedIndex].label });
    };
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, __assign({ label: label !== null && label !== void 0 ? label : name, error: state.errors.get[name], className: className }, { children: (0, jsx_runtime_1.jsx)("select", __assign({ disabled: list.length === 0, value: (_c = (_b = state.data.get[name]) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : "", onChange: handleInput }, { children: workList.map(function (u, i) { return (0, jsx_runtime_1.jsx)("option", __assign({ value: u.value }, { children: u.label }), i); }) }), void 0) }), void 0));
};
exports.SelectBox = SelectBox;
//# sourceMappingURL=SelectBox.js.map