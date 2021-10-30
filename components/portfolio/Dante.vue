<template>
    <section class="portfolio__item portfolio--dante" id="dante">
        <header class="portfolio__header">
            <h2 class="portfolio__title">{{ t('portfolio.dante.title') }}</h2>
            <a class="portfolio__link" href="https://github.com/JsonDeveloper/dante-gui" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/github.svg" width="20" height="20" alt="GitHub icon" />
                {{ t('portfolio.@terms.open-github') }}
            </a>
        </header>
        <div class="portfolio__tags">
            <UiTag>{{ t('portfolio.@terms.opensource') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.pet') }}</UiTag>
        </div>
        <p class="portfolio__description">{{ t('portfolio.dante.description') }}</p>

        <div class="portfolio__media">
            <picture>
                <source srcset="/portfolio/dante/screenshot.webp" type="image/webp">
                <img 
                    src="/portfolio/dante/screenshot.jpg" 
                    loading="lazy" 
                    alt="Screenshot"
                    style="aspect-ratio: 3800 / 984;"
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
    .portfolio--dante {
        --background-left: #DB306934;
        --background-right: #F5D54734;
    }
</style>