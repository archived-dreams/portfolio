<template>
    <section class="portfolio__item portfolio--webtransfer" id="webtransfer">
        <header class="portfolio__header">
            <h2 class="portfolio__title">{{ t('portfolio.webtransfer.title') }}</h2>
            <a class="portfolio__link" href="https://github.com/webfinpartner/webtransfer" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/github.svg" width="20" height="20" alt="GitHub icon" />
                {{ t('portfolio.@terms.open-github') }}
            </a>
        </header>
        <div class="portfolio__tags">
            <UiTag>{{ t('portfolio.@terms.pentester') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.web-dev') }} <small>({{ t('portfolio.@terms.junior') }})</small></UiTag>
        </div>
        <p class="portfolio__description">{{ t('portfolio.webtransfer.description') }}</p>

        <div class="portfolio__media">
            <picture>
                <source srcset="/portfolio/webtransfer/screenshot.webp" type="image/webp">
                <img 
                    src="/portfolio/webtransfer/screenshot.jpg" 
                    loading="lazy" 
                    alt="Screenshot"
                    style="aspect-ratio: 3182 / 512;"
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
    .portfolio--webtransfer {
        --background-left: #0026ff34;
        --background-right: #ff510034;
    }
</style>