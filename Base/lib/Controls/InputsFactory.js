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
exports.InputAdapter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FormRow_1 = __importDefault(require("../FormRow"));
var GeneralInput = function (_a) {
    var s = _a.s, n = _a.n, t = _a.t, p = _a.p;
    return ((0, jsx_runtime_1.jsx)("input", { type: t, placeholder: p || '', value: s.data.get[n], onInput: function (e) { return s.data.handleInputs(n, e.target.value); } }, void 0));
};
var TextAreaInput = function (_a) {
    var s = _a.s, n = _a.n, p = _a.p, _b = _a.rows, rows = _b === void 0 ? 3 : _b;
    return ((0, jsx_runtime_1.jsx)("textarea", { rows: rows, placeholder: p || '', value: s.data.get[n], onInput: function (e) { return s.data.handleInputs(n, e.target.value); } }, void 0));
};
var SelectInput = function (_a) {
    var s = _a.s, n = _a.n, list = _a.list, p = _a.p, label = _a.label, d = _a.d;
    // d expects a default index (optional)
    if (!list)
        throw new Error("Nehuma Lista foi fornecida para coluna: " + n);
    var _b = (0, react_1.useState)([]), workList = _b[0], setWorkList = _b[1];
    (0, react_1.useEffect)(function () {
        if (d != null) {
            setWorkList(__spreadArray([], list, true));
            if (list.length > 0)
                s.data.handleInputs(n, label ? { value: list[d].value, label: list[d].label } : list[d].value);
        }
        else {
            setWorkList(__spreadArray([{ value: "", label: p || "Nenhum Item Selecionado " }], list, true));
        }
    }, [list.length]);
    var handleInput = function (e) {
        s.data.handleInputs(n, label ? { value: e.target.value, label: workList[e.target.options.selectedIndex].label } : e.target.value);
    };
    return ((0, jsx_runtime_1.jsx)("select", __assign({ disabled: list.length === 0, value: label ? s.data.get[n].value : s.data.get[n], onChange: handleInput }, { children: workList.map(function (u, i) { return (0, jsx_runtime_1.jsx)("option", __assign({ value: u.value }, { children: u.label }), i); }) }), void 0));
};
var ViewBox = function (_a) {
    var s = _a.s, n = _a.n, p = _a.p;
    return ((0, jsx_runtime_1.jsx)("input", { disabled: true, type: 'text', defaultValue: s.data.get[n].label || p }, void 0));
};
var InputAdapter = function (_a) {
    var state = _a.state, name = _a.name, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, placeholder = _a.placeholder, list = _a.list, def = _a.def;
    if (!state || !name)
        throw new Error("001");
    return ((0, jsx_runtime_1.jsx)(FormRow_1.default, __assign({ label: label || name, error: state.errors.get[name] }, { children: ['text', 'number', 'password'].includes(type) ?
            (0, jsx_runtime_1.jsx)(GeneralInput, __assign({ s: state, n: name, t: type, p: placeholder }, { children: " " }), void 0)
            : type === "textarea" ?
                (0, jsx_runtime_1.jsx)(TextAreaInput, { s: state, n: name, p: placeholder }, void 0)
                : type === "select" ?
                    (0, jsx_runtime_1.jsx)(SelectInput, { s: state, p: placeholder, n: name, list: list, d: def }, void 0)
                    : type === "selectView" ?
                        (0, jsx_runtime_1.jsx)(SelectInput, { s: state, p: placeholder, n: name, list: list, label: true, d: def }, void 0)
                        : type === "viewbox" ?
                            (0, jsx_runtime_1.jsx)(ViewBox, { s: state, n: name, p: placeholder }, void 0)
                            : (0, jsx_runtime_1.jsx)("span", { children: " - " }, void 0) }), void 0));
};
exports.InputAdapter = InputAdapter;
exports.default = exports.InputAdapter;
//# sourceMappingURL=InputsFactory.js.map