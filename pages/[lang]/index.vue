<template>
    <SectionAbout />
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { $router } = useNuxtApp()
const { t } = useI18n()


useMeta({
    link: [
        { rel: 'alternate', hreflang: 'x-default', href: '/' },
    ],
    title: t('about.meta:title')
})
</script>