<template>
    <section class="portfolio__item portfolio--ipserver" id="ipserver">
        <header class="portfolio__header">
            <h2 class="portfolio__title">{{ t('portfolio.ipserver.title') }}</h2>
            <a class="portfolio__link" :href="t('portfolio.ipserver.link')" target="_blank" rel="noopener nofollow">
                <img src="/portfolio/ipserver/icon.png" width="20" height="20" alt="Ipcserver icon" />
                {{ t('portfolio.@terms.open-web') }}
            </a>
        </header>
        <div class="portfolio__tags">
            <UiTag>{{ t('portfolio.@terms.web-dev') }}</UiTag>
        </div>
        <p class="portfolio__description">{{ t('portfolio.ipserver.description') }}</p>

        <div class="portfolio__media">
            <picture>
                <source srcset="/portfolio/ipserver/screenshot.webp" type="image/webp">
                <img 
                    src="/portfolio/ipserver/screenshot.jpg" 
                    loading="lazy" 
                    alt="Screenshot"
                    style="aspect-ratio: 3294 / 968;"
                />
            </picture>
        </div>
        <div class="portfolio__background" />
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss">
    .portfolio--ipserver {
        --background-left: #8cc15234;
        --background-right: #4d8fac34;
    }
</style>