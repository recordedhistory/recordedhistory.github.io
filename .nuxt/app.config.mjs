
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "c2ca1f99-aa21-4438-875b-31ff0fafca5b"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/walker/Desktop/recordedhistory.github.io/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
