<template>
    <SectionAbout />
</template>

<script setup>
const { t } = useI18n()

useMeta({
    link: [
        { rel: 'alternate', hreflang: 'x-default', href: '/' },
        { rel: 'preload', href: '/photo.webp', as: 'image', type: 'image/webp' }
    ],
    title: t('about.meta:title')
})
</script>