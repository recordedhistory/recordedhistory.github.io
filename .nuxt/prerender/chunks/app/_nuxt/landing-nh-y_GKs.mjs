import { _ as __nuxt_component_0$1 } from './Container-Roa14yT2.mjs';
import { useSSRContext, ref, withCtx, unref, createVNode, openBlock, createBlock, withDirectives, vShow, Fragment, renderList, toDisplayString, mergeProps } from 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/vue/dist/vue.cjs.prod.js';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';

const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const menuitems = [
      {
        title: "About",
        path: "/about"
      },
      {
        title: "Pricing",
        path: "/pricing"
      },
      {
        title: "Reserve/Contact",
        path: "/contact"
      }
    ];
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="flex flex-col lg:flex-row justify-between items-center my-5"${_scopeId}><div class="flex w-full lg:w-auto items-center justify-between"${_scopeId}><a href="/" class="text-lg"${_scopeId}><span class="font-bold text-slate-800"${_scopeId}>Recorded</span><span class="text-slate-500"${_scopeId}>History</span></a><div class="block lg:hidden"${_scopeId}><button class="text-gray-800"${_scopeId}><svg fill="currentColor" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><title${_scopeId}>Menu</title><path style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"${_scopeId}></path><path style="${ssrRenderStyle(!unref(open) ? null : { display: "none" })}" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"${_scopeId}></path></svg></button></div></div><nav class="${ssrRenderClass([{ block: unref(open), hidden: !unref(open) }, "w-full lg:w-auto mt-2 lg:flex lg:mt-0"])}"${_scopeId}><ul class="flex flex-col lg:flex-row lg:gap-3"${_scopeId}><!--[-->`);
            ssrRenderList(menuitems, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.path)} class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"${_scopeId}>${ssrInterpolate(item.title)}</a></li>`);
            });
            _push2(`<!--]--></ul></nav></header>`);
          } else {
            return [
              createVNode("header", { class: "flex flex-col lg:flex-row justify-between items-center my-5" }, [
                createVNode("div", { class: "flex w-full lg:w-auto items-center justify-between" }, [
                  createVNode("a", {
                    href: "/",
                    class: "text-lg"
                  }, [
                    createVNode("span", { class: "font-bold text-slate-800" }, "Recorded"),
                    createVNode("span", { class: "text-slate-500" }, "History")
                  ]),
                  createVNode("div", { class: "block lg:hidden" }, [
                    createVNode("button", {
                      onClick: ($event) => open.value = !unref(open),
                      class: "text-gray-800"
                    }, [
                      (openBlock(), createBlock("svg", {
                        fill: "currentColor",
                        class: "w-4 h-4",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("title", null, "Menu"),
                        withDirectives(createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                        }, null, 512), [
                          [vShow, unref(open)]
                        ]),
                        withDirectives(createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                        }, null, 512), [
                          [vShow, !unref(open)]
                        ])
                      ]))
                    ], 8, ["onClick"])
                  ])
                ]),
                createVNode("nav", {
                  class: ["w-full lg:w-auto mt-2 lg:flex lg:mt-0", { block: unref(open), hidden: !unref(open) }]
                }, [
                  createVNode("ul", { class: "flex flex-col lg:flex-row lg:gap-3" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(menuitems, (item) => {
                      return createVNode("li", null, [
                        createVNode("a", {
                          href: item.path,
                          class: "flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                        }, toDisplayString(item.title), 9, ["href"])
                      ]);
                    }), 64))
                  ])
                ], 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "my-20" }, _attrs))}><p class="text-center text-sm text-slate-500"> Copyright \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} All rights reserved. </p><p class="text-center text-xs text-slate-500 mt-1 px-2"> Site by <a target="_blank" rel="noopener" class="hover:underline" href="https://walkerlyle.com/"> donjuanpedro </a></p></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingNavbar = __nuxt_component_0;
  const _component_LandingFooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { landing as default };
//# sourceMappingURL=landing-nh-y_GKs.mjs.map
