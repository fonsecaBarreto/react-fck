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
exports.MakeNotification = exports.NotificationType = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var Dialog_1 = require("../Dialog");
var fi_1 = require("react-icons/fi");
var gr_1 = require("react-icons/gr");
var bs_1 = require("react-icons/bs");
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["SUCCESS"] = 0] = "SUCCESS";
    NotificationType[NotificationType["FAILURE"] = 1] = "FAILURE";
    NotificationType[NotificationType["INFO"] = 2] = "INFO";
    NotificationType[NotificationType["CONFIRMATION"] = 3] = "CONFIRMATION";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
function MakeNotification(onAction, messages, title, type) {
    if (messages === void 0) { messages = []; }
    if (title === void 0) { title = ""; }
    var icon;
    var buttons = [];
    switch (type) {
        case NotificationType.SUCCESS:
            icon = (0, jsx_runtime_1.jsx)(gr_1.GrStatusGood, { children: "," }, void 0);
            messages = messages || ["Operação Relizada com sucesso"];
            buttons = ["Ok"];
            break;
        case NotificationType.FAILURE:
            icon = (0, jsx_runtime_1.jsx)(fi_1.FiAlertCircle, {}, void 0),
                messages = messages || ["Não foi possivel realizar essa ação."];
            buttons = ["Ok"];
            break;
        case NotificationType.INFO:
            icon = (0, jsx_runtime_1.jsx)(fi_1.FiUserCheck, {}, void 0);
            messages = messages || [""],
                buttons = [];
            break;
        case NotificationType.CONFIRMATION:
            icon = (0, jsx_runtime_1.jsx)(bs_1.BsQuestionOctagon, {}, void 0);
            messages = messages || ["Confirme!"],
                buttons = ["Continuar", "Cancelar"];
            break;
    }
    return (0, Dialog_1.MakeDialogConfig)(function (_a) {
        var onAction = _a.onAction;
        return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "notify-dialog" }, { children: [icon && (0, jsx_runtime_1.jsxs)("span", __assign({ className: "notify-d-icon" }, { children: [" ", icon, " "] }), void 0), (0, jsx_runtime_1.jsx)("section", __assign({ className: "notify-d-content-body" }, { children: messages.length > 0 && messages.map(function (m, i) { return ((0, jsx_runtime_1.jsx)("span", { children: m }, i)); }) }), void 0), (0, jsx_runtime_1.jsx)("section", __assign({ className: "notify-d-btns" }, { children: buttons.map(function (b, i) { return ((0, jsx_runtime_1.jsxs)("button", __assign({ onClick: function () { return onAction(i); } }, { children: [" ", b, " "] }), i)); }) }), void 0)] }), void 0));
    }, onAction, title);
}
exports.MakeNotification = MakeNotification;
exports.default = MakeNotification;
//# sourceMappingURL=MakeNotification.js.map