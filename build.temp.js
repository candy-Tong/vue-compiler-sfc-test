
import { ref } from "vue";

const __sfc_main__ = {
  name: "Main",
  setup() {
    const message = ref("Main");
    return {
      message,
    };
  },
};

import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", null, _toDisplayString(_ctx.message), 1 /* TEXT */))
}
const renderModule = {}
__sfc_main__.render=render
export default __sfc_main__