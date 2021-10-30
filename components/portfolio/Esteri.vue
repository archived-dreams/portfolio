<template>
    <section class="portfolio__item portfolio--esteri" id="esteri">
        <header class="portfolio__header">
            <h2 class="portfolio__title">{{ t('portfolio.esteri.title') }}</h2>
            <a class="portfolio__link" href="https://apps.apple.com/app/iic-kiev/id1556090501" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/appstore.svg" width="20" height="20" alt="Apple appstore icon" />
                {{ t('portfolio.@terms.appstore') }}
            </a>
            <a class="portfolio__link" href="https://play.google.com/store/apps/details?id=com.esteri.iickiev" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/google-play.svg" width="20" height="20" alt="Google play icon" />
                {{ t('portfolio.@terms.google-play') }}
            </a>
        </header>
        <div class="portfolio__tags">
            <UiTag>{{ t('portfolio.@terms.freelance') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.mobile') }}</UiTag>
        </div>
        <p class="portfolio__description">{{ t('portfolio.esteri.description') }}</p>

        <div class="portfolio__media portfolio__media--md">
            <picture>
                <source srcset="/portfolio/esteri/screenshot.webp" type="image/webp">
                <img 
                    src="/portfolio/esteri/screenshot.jpg" 
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
    .portfolio--esteri {
        --background-left: #ec352334;
        --background-right: #00a34f34;
    }
</style>