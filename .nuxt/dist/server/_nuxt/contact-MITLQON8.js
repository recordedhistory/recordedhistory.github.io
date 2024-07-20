import { _ as __nuxt_component_0 } from "./Container-Roa14yT2.js";
import { _ as __nuxt_component_1 } from "./Sectionhead-e8mou4JU.js";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = __nuxt_component_1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Us`);
                } else {
                  return [
                    createTextVNode("Contact Us")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`If you have questions or you would like to book an appointment, please use the contact form below.`);
                } else {
                  return [
                    createTextVNode("If you have questions or you would like to book an appointment, please use the contact form below.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mx-auto max-w-4xl mt-16"${_scopeId}><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5nYW_tRrtx1b30kNHwof-YHAtIB0vRvWQv5QU0G-WPQ5j_g/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0"${_scopeId}>Loading…</iframe></div>`);
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("Contact Us")
                ]),
                desc: withCtx(() => [
                  createTextVNode("If you have questions or you would like to book an appointment, please use the contact form below.")
                ]),
                _: 1
              }),
              createVNode("div", { class: "mx-auto max-w-4xl mt-16" }, [
                createVNode("iframe", {
                  src: "https://docs.google.com/forms/d/e/1FAIpQLSf5nYW_tRrtx1b30kNHwof-YHAtIB0vRvWQv5QU0G-WPQ5j_g/viewform?embedded=true",
                  width: "100%",
                  height: "1200",
                  frameborder: "0",
                  marginheight: "0",
                  marginwidth: "0"
                }, "Loading…")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-MITLQON8.js.map
