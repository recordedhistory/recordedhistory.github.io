
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "f5549cda-e4be-4143-a7c3-35c6c41c3221"
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
