<template>
    <section class="portfolio__item portfolio--bitcy" id="bitcy">
        <header class="portfolio__header">
            <h2 class="portfolio__title">{{ t('portfolio.bitcy.title') }}</h2>
            <a class="portfolio__link" href="https://bitcy.club/" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/globe.svg" width="20" height="20" alt="Globe icon" />
                {{ t('portfolio.@terms.open-web') }}
            </a>
        </header>
        <div class="portfolio__tags">
            <UiTag>{{ t('portfolio.@terms.freelance') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.web-dev') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.mvp') }}</UiTag>
        </div>
        <p class="portfolio__description">{{ t('portfolio.bitcy.description') }}</p>

        <div class="portfolio__media portfolio__media--md">
            <picture>
                <source srcset="/portfolio/bitcy/screenshot.webp" type="image/webp">
                <img 
                    src="/portfolio/bitcy/screenshot.jpg" 
                    loading="lazy" 
                    alt="Screenshot"
                    style="aspect-ratio: 2056 / 1158;"
                />
            </picture>
        </div>
        <div class="portfolio__background" />
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style lang="scss">
    .portfolio--bitcy {
        --background-left: #dd0a6c34;
        --background-right: #f7931a34;
    }
</style>