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
var jsx_runtime_1 = require("react/jsx-runtime");
var LoginModal_1 = __importDefault(require("@/lib/LoginModal"));
var useToggle_1 = __importDefault(require("@/lib/useToggle"));
function App() {
    var _a = (0, useToggle_1.default)(false), isModalOpen = _a[0], handleOpenModal = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleOpenModal }, { children: "\uB85C\uADF8\uC778 \uBAA8\uB2EC" })), (0, jsx_runtime_1.jsx)(LoginModal_1.default, { isModalOpen: isModalOpen, handleOpenModal: handleOpenModal })] }));
}
exports.default = App;
