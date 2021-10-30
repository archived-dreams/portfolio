<template>
    <section class="portfolio__item portfolio--donatepay" id="donatepay">
        <div class="portfolio__grid">
            <div class="portfolio__main">
                <header class="portfolio__header">
                    <h2 class="portfolio__title">{{ t('portfolio.donatepay.title') }}</h2>
                    <a class="portfolio__link" :href="t('portfolio.donatepay.link')" target="_blank" rel="noopener nofollow">
                        <img src="/portfolio/donatepay/icon.png" width="20" height="20" alt="Donatepay icon" />
                        {{ t('portfolio.@terms.open-web') }}
                    </a>
                </header>
                <div class="portfolio__tags">
                    <UiTag>{{ t('portfolio.@terms.web-dev') }}</UiTag>
                </div>
                <p class="portfolio__description">{{ t('portfolio.donatepay.description') }}</p>
            </div>

            <div class="portfolio__media portfolio__media--md">
                <picture>
                    <source srcset="/portfolio/donatepay/screenshot.webp" type="image/webp">
                    <img 
                        src="/portfolio/donatepay/screenshot.jpg" 
                        loading="lazy" 
                        alt="Screenshot"
                        style="aspect-ratio: 1280 / 868;"
                    />
                </picture>
            </div>
        </div>
        <div class="portfolio__background" />
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style lang="scss">
    .portfolio--donatepay {
        --background-left: #ffc10734;
        --background-right: #4caf5034;
    }
</style>