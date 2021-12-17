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
exports.InputControlComponent = exports.InputControl = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var InputWrapper_1 = __importDefault(require("../Forming/Wrappers/InputWrapper"));
var InputControl;
(function (InputControl) {
    var InputTypes;
    (function (InputTypes) {
        InputTypes[InputTypes["TEXT"] = 0] = "TEXT";
        InputTypes[InputTypes["NUMBER"] = 1] = "NUMBER";
        InputTypes[InputTypes["PASSWORD"] = 2] = "PASSWORD";
        InputTypes[InputTypes["TEXTAREA"] = 3] = "TEXTAREA";
        InputTypes[InputTypes["SELECT"] = 4] = "SELECT";
        InputTypes[InputTypes["SELECTVIEW"] = 5] = "SELECTVIEW";
        InputTypes[InputTypes["VIEWBOX"] = 6] = "VIEWBOX";
    })(InputTypes = InputControl.InputTypes || (InputControl.InputTypes = {}));
})(InputControl = exports.InputControl || (exports.InputControl = {}));
var InputControlComponent = function (_a) {
    var state = _a.state, name = _a.name, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, placeholder = _a.placeholder;
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, __assign({ label: label || name, error: state.errors.get[name] }, { children: ['text', 'number', 'password'].includes(type) ?
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
exports.InputControlComponent = InputControlComponent;
var GeneralInput = function (_a) {
    var s = _a.s, n = _a.n, t = _a.t, p = _a.p;
    return ((0, jsx_runtime_1.jsxs)(exports.InputControlComponent, { children: [(0, jsx_runtime_1.jsx)("input", { type: t, placeholder: p || '', value: s.data.get[n], onInput: function (e) { return s.data.handleInputs(n, e.target.value); } }, void 0), ")"] }, void 0));
};
/*
const TextAreaInput = ({s, n, p, rows=3}) =>{
    return (
    <textarea
         rows={rows}
         placeholder={p || ''}
         value={s.data.get[n]}
         onInput={e=>  s.data.handleInputs(n, e.target.value) } >
    </textarea>)
}

const SelectInput = ({s, n, list, p, label, d }) => {
    // d expects a default index (optional)
    if(!list) throw new Error("Nehuma Lista foi fornecida para coluna: "+n);
    const [ workList, setWorkList] = useState([])
    useEffect(()=>{
         if(d != null){
              setWorkList([ ...list])
              if(list.length > 0)
                   s.data.handleInputs(n, label ? { value: list[d].value, label: list[d].label } : list[d].value);
         }else{
              setWorkList([ {value: "", label: p || "Nenhum Item Selecionado "}, ...list])
         }
    },[ list.length ])

    const handleInput = (e) =>{
         s.data.handleInputs(n, label ? { value: e.target.value, label: workList[e.target.options.selectedIndex].label } : e.target.value)
    }
    return (<select
              disabled={list.length === 0}
              value={ label ?  s.data.get[n].value :  s.data.get[n]}
              onChange={handleInput}>
         {workList.map((u,i)=><option value={u.value} key={i}>{u.label}</option>)}
    </select>)
}

const ViewBox = ({s, n, p }) => {
    return (<input disabled={true} type={'text'} defaultValue={s.data.get[n].label || p } ></input>)
}
 */
exports.default = Inputcontrol;
//# sourceMappingURL=InputControl.js.map