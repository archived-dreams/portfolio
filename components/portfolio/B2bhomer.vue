<template>
    <section class="portfolio__item portfolio--b2bhomer" id="b2bhomer">
        <header class="portfolio__header">
            <h2 class="portfolio__title">{{ t('portfolio.b2bhomer.title') }}</h2>
        </header>
        <div class="portfolio__tags">
            <UiTag>{{ t('portfolio.@terms.web-dev') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.mvp') }}</UiTag>
        </div>
        <p class="portfolio__description">{{ t('portfolio.b2bhomer.description') }}</p>

        <div class="portfolio__media portfolio__media--md">
            <picture>
                <source srcset="/portfolio/b2bhomer/screenshot.webp" type="image/webp">
                <img 
                    src="/portfolio/b2bhomer/screenshot.jpg" 
                    loading="lazy" 
                    alt="Screenshot"
                    style="aspect-ratio: 2000 / 1068;"
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
    .portfolio--b2bhomer {
        --background-left: #F0644934;
        --background-right: #502F4C34;
    }
</style>