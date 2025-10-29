"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainLayout;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("components/Header");
var SideBar_1 = require("components/SideBar");
var react_router_dom_1 = require("react-router-dom");
function MainLayout() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)(SideBar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "w-full pl-260 transition-all duration-500", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full relative px-9 pt-4", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }) })] }));
}
