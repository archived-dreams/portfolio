import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    ssr: true,

    css: ['normalize.css'],

    buildModules: ['@intlify/nuxt3'],

    // config for `@intlify/nuxt3`
    intlify: {
        vueI18n: 'vue-i18n.mjs'
    },
})
