import React from 'react';
import './style.css';
import { FaTimes } from 'react-icons/fa';
export function Dialog(_a) {
    var config = _a.config, _b = _a.offset, offset = _b === void 0 ? 0 : _b, _c = _a.show, show = _c === void 0 ? true : _c;
    var Content = config.content, title = config.title, loading = config.loading, onAction = config.onAction, icon = config.icon;
    return (React.createElement(React.Fragment, null, !show ? undefined
        : React.createElement("div", { className: "app-dialog" },
            React.createElement("div", { className: "app-dialog-content", style: { marginTop: 64 + (offset) * 16 } },
                React.createElement("div", { className: "app-dialog-header" },
                    icon && React.createElement("span", null,
                        " ",
                        icon),
                    title && React.createElement("span", null, title),
                    React.createElement("button", { onClick: function () { return onAction(-1); }, className: "adc-close" },
                        React.createElement(FaTimes, null, " "))),
                React.createElement("div", { className: "app-dialog-body ".concat(loading ? ' div-loading' : '') },
                    React.createElement(Content, { onAction: onAction }))))));
}
export default Dialog;
//# sourceMappingURL=index.js.map