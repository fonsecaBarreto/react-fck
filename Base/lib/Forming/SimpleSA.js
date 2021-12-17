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
exports.SimpleSA = void 0;
var react_1 = require("react");
/*
    Adaptador de Estado, simples para formularios
*/
var SimpleSA = function (initial_data) {
    var _a = (0, react_1.useState)(__assign({}, initial_data)), data = _a[0], setData = _a[1];
    var _b = (0, react_1.useState)({}), errors = _b[0], setErrors = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var handleInputs = function (key, value, capital) {
        if (capital) {
            value = value.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
        }
        setData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[key] = value, _a)));
        });
    };
    return {
        data: {
            get: data, set: setData,
            handleInputs: handleInputs,
            clear: function () { return setData(__assign({}, initial_data)); }
        },
        errors: {
            get: errors, set: setErrors, clear: function () { setErrors({}); },
        },
        loading: {
            get: loading, set: setLoading
        },
    };
};
exports.SimpleSA = SimpleSA;
exports.default = exports.SimpleSA;
//# sourceMappingURL=SimpleSA.js.map