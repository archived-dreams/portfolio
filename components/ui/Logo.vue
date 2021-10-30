<template>
    <NuxtLink class="logo" :to="`/${locale}`">
        <picture>
            <source srcset="/logo.webp" type="image/webp">
            <img class="logo__image" src="/logo.png" alt="😜" :aria-label="t('ui.logo')" width="48" height="48" />
        </picture>
        <p class="logo__title">Jonas<br />Danilov</p>
    </NuxtLink>
</template>

<script setup>
const { t, locale } = useI18n()
</script>

<style lang="scss">
    .logo {
        display: flex;
        height: 48px;
        align-items: center;
        text-decoration: none;

        &__image {
            width: 48px;
            height: 48px;
            font-size: 40px;
            line-height: 56px;
            text-align: center;
            object-fit: contain;
        }

        &__title {
            font-weight: 700;
            font-size: 1.2em;
            margin: 0 6px;
        }
    }
</style>