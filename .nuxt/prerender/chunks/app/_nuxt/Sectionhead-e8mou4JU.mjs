import { useSSRContext, mergeProps } from 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/vue/dist/vue.cjs.prod.js';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Sectionhead",
  __ssrInlineRender: true,
  props: {
    align: {
      default: "center"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: ["mt-16"] }, _attrs))}><h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(`Title`);
      }, _push, _parent);
      _push(`</h1><p class="text-lg mt-4 text-slate-600">`);
      ssrRenderSlot(_ctx.$slots, "desc", {}, () => {
        _push(`Some description goes here`);
      }, _push, _parent);
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Sectionhead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Sectionhead-e8mou4JU.mjs.map
