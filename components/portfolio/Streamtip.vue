<template>
    <section class="portfolio__item portfolio--streamtip" id="streamtip">
        <header class="portfolio__header">
            <h2 class="portfolio__title">{{ t('portfolio.streamtip.title') }}</h2>
            <a class="portfolio__link" href="https://github.com/JsonDeveloper/StreamDonations" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/github.svg" width="20" height="20" alt="GitHub icon" />
                {{ t('portfolio.@terms.open-github') }}
            </a>
        </header>
        <div class="portfolio__tags">
            <UiTag>{{ t('portfolio.@terms.opensource') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.pet') }}</UiTag>
        </div>
        <p class="portfolio__description">{{ t('portfolio.streamtip.description') }}</p>

        <div class="portfolio__media portfolio__media--md">
            <picture>
                <source srcset="/portfolio/streamtip/screenshot.webp" type="image/webp">
                <img 
                    src="/portfolio/streamtip/screenshot.jpg" 
                    loading="lazy" 
                    alt="Screenshot"
                    style="aspect-ratio: 1742 / 1000;"
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
    .portfolio--streamtip {
        --background-left: #EA731734;
        --background-right: #50C9CE34;
    }
</style>