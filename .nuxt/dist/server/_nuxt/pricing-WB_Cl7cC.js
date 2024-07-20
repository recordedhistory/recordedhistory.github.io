import { _ as __nuxt_component_0 } from "./Container-Roa14yT2.js";
import { _ as __nuxt_component_1 } from "./Sectionhead-e8mou4JU.js";
import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {
  __name: "pricing",
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
                  _push3(`Pricing`);
                } else {
                  return [
                    createTextVNode("Pricing")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><p class="mb-4"${_scopeId2}>Our rate to preserve your memories is $100 per hour. Most clients book a two- to three-hour interview.</p><p class="mb-4"${_scopeId2}>This includes:</p><p${_scopeId2}>-Thoughtful questions curated specifically for you or your loved one</p><p${_scopeId2}>-Professional setup for a high-quality audio recording of our conversation</p><p${_scopeId2}>-Delivery of a USB thumb drive containing your memories</p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", { class: "mb-4" }, "Our rate to preserve your memories is $100 per hour. Most clients book a two- to three-hour interview."),
                      createVNode("p", { class: "mb-4" }, "This includes:"),
                      createVNode("p", null, "-Thoughtful questions curated specifically for you or your loved one"),
                      createVNode("p", null, "-Professional setup for a high-quality audio recording of our conversation"),
                      createVNode("p", null, "-Delivery of a USB thumb drive containing your memories")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("Pricing")
                ]),
                desc: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("p", { class: "mb-4" }, "Our rate to preserve your memories is $100 per hour. Most clients book a two- to three-hour interview."),
                    createVNode("p", { class: "mb-4" }, "This includes:"),
                    createVNode("p", null, "-Thoughtful questions curated specifically for you or your loved one"),
                    createVNode("p", null, "-Professional setup for a high-quality audio recording of our conversation"),
                    createVNode("p", null, "-Delivery of a USB thumb drive containing your memories")
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pricing-WB_Cl7cC.js.map
