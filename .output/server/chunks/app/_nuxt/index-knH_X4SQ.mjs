import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './Container-Roa14yT2.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-N-8fBKHb.mjs';
import { useSSRContext, withCtx, createVNode, defineComponent, mergeProps, renderSlot, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { _ as _imports_0$1, a as _imports_1 } from './IMG_0093-fBY9fUas.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../server.mjs';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    href: {},
    size: { default: "lg" },
    block: { type: Boolean },
    styleName: { default: "primary" },
    className: {}
  },
  setup(__props) {
    const sizes = {
      lg: "px-5 py-2.5",
      md: "px-4 py-2"
    };
    const styles = {
      outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
      primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
      inverted: "bg-white text-black border-2 border-transparent",
      muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: _ctx.href,
        class: [
          "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
          _ctx.block && "w-full",
          sizes[_ctx.size],
          styles[_ctx.styleName]
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Link.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("IMG_0132.e3ojazaw.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LandingLink = _sfc_main$3;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8" }, _attrs))}><div class="p-24 md:order-1 hidden md:block"><img class="rounded-full scale-125"${ssrRenderAttr("src", _imports_0)} alt="Starship starts the engine" loading="eager" format="avif" width="512" height="512" title="microphone"></div><div><h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight"> We record your stories in your voice </h1><p class="text-lg mt-4 text-slate-600 max-w-xl"> Through a high-quality interview, you or your loved ones&#39; memories are brought to life in curated candor </p><div class="mt-6 flex flex-col sm:flex-row gap-3">`);
  _push(ssrRenderComponent(_component_LandingLink, {
    href: "/contact",
    rel: "noopener"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get started`);
      } else {
        return [
          createTextVNode("Get started")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_LandingLink, {
    size: "lg",
    styleName: "outline",
    rel: "noopener",
    href: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Listen to our work`);
      } else {
        return [
          createTextVNode("Listen to our work")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></main>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_2 = "" + buildAssetsURL("IMG-2127.nVZfIUUt.jpeg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="mt-16 md:mt-0"><h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> Here\u2019s How It Works </h2><ul class="text-lg mt-4 text-slate-600 list-disc ml-7"><li>You fill out the questionnaire found <a class="underline font-bold" href="/contact">here</a> so that we can craft thoughtful questions.</li><li>A member of the Recorded History team will contact you to schedule the conversation.</li><li>Then, sit with an interviewer to capture you or your loved ones&#39; memories in a casual conversation. We can meet wherever you\u2019re most comfortable.</li><li>Within 2 weeks, you will receive a digital file, USB thumb drive and CD with an edited, professional quality recording that you will be able to cherish forever.</li></ul></div><div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"><div class="flex gap-4 items-start"><div><img title="David Lapier" class="mb-4"${ssrRenderAttr("src", _imports_0$1)}><iframe title="David Lapier" width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1197840955%3Fsecret_token%3Ds-1mcca0gwGFV&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe></div></div><div class="flex gap-4 items-start"><div><img title="Janet Dunkelberg" class="mb-4"${ssrRenderAttr("src", _imports_1)}><iframe title="Janet Dunkelberg" width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1197841225%3Fsecret_token%3Ds-gLGGvpTRiFs&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe></div></div><div class="flex gap-4 items-start"><div><img title="Steven Wright" class="mb-4"${ssrRenderAttr("src", _imports_2)}><iframe title="Steven Wright" width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1197841135%3Fsecret_token%3Ds-IQYz4O69Bwq&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe></div></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Features.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingHero = __nuxt_component_1;
      const _component_LandingFeatures = __nuxt_component_2;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingHero, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LandingFeatures, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingHero),
              createVNode(_component_LandingFeatures)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-knH_X4SQ.mjs.map
