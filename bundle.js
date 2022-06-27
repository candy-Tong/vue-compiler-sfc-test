"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// external-global-plugin:vue
var require_vue = __commonJS({
  "external-global-plugin:vue"(exports, module) {
    module.exports = window.Vue;
  }
});

// build.temp.js
var import_vue = __toESM(require_vue());
var import_vue2 = __toESM(require_vue());
var __sfc_main__ = {
  name: "Main",
  setup() {
    const message = (0, import_vue.ref)("Main");
    return {
      message
    };
  }
};
function render(_ctx, _cache) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", null, (0, import_vue2.toDisplayString)(_ctx.message), 1);
}
__sfc_main__.render = render;
var build_temp_default = __sfc_main__;
export {
  build_temp_default as default,
  render
};