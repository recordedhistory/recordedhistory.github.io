import { u as useAppConfig, r as resolveIconName } from './index-vGroYSw4.mjs';
import { useSSRContext, defineComponent, computed, mergeProps } from 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/vue/dist/vue.cjs.prod.js';
import { ssrRenderAttrs } from 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/klona/dist/index.mjs';
import '../server.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/h3/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/destr/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/scule/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/walker/Desktop/recordedhistory.github.io/node_modules/pathe/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconCSS",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const props = __props;
    const iconName = computed(() => {
      var _a, _b;
      if ((_b = (_a = appConfig.nuxtIcon) == null ? void 0 : _a.aliases) == null ? void 0 : _b[props.name]) {
        return appConfig.nuxtIcon.aliases[props.name];
      }
      return props.name;
    });
    const resolvedIcon = computed(() => resolveIconName(iconName.value));
    const iconUrl = computed(() => {
      var _a, _b;
      const customUrl = (_b = (_a = appConfig.nuxtIcon) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url;
      if (customUrl) {
        try {
          new URL(customUrl);
        } catch (e) {
          console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");
          return;
        }
      }
      const baseUrl = customUrl || "https://api.iconify.design";
      return `url('${baseUrl}/${resolvedIcon.value.prefix}/${resolvedIcon.value.name}.svg')`;
    });
    const sSize = computed(() => {
      var _a, _b, _c;
      if (!props.size && typeof ((_a = appConfig.nuxtIcon) == null ? void 0 : _a.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--efdb04fa": iconUrl.value
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { width: sSize.value, height: sSize.value }
      }, _attrs, _cssVars))} data-v-41e8d397></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/IconCSS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41e8d397"]]);

export { IconCSS as default };
//# sourceMappingURL=IconCSS-Lo2fqbU0.mjs.map
