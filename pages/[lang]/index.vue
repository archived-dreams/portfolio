<template>
    <SectionAbout />
</template>

<script setup>
const { $router } = useNuxtApp()
const { t } = useI18n()


useMeta({
    link: [
        { rel: 'alternate', hreflang: 'x-default', href: '/' },
    ],
    title: t('about.meta:title')
})
</script>