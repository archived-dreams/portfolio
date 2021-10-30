import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    // ssr: true,

    nitro: {
        preset: 'browser'
    },

    css: ['normalize.css'],

    buildModules: ['@intlify/nuxt3'],

    // config for `@intlify/nuxt3`
    intlify: {
        vueI18n: 'vue-i18n.mjs'
    },
})
