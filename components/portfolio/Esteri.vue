<template>
    <PortfolioItem 
        name="esteri"
        :gradient-colors="['#ec352334', '#00a34f34']"
        media-width="2056"
        media-height="1158"
        media-size="md"
    >
        <template #actions>
            <a class="portfolio__link" href="https://apps.apple.com/app/iic-kiev/id1556090501" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/appstore.svg" width="20" height="20" alt="Apple appstore icon" />
                {{ t('portfolio.@terms.appstore') }}
            </a>
            <a class="portfolio__link" href="https://play.google.com/store/apps/details?id=com.esteri.iickiev" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/google-play.svg" width="20" height="20" alt="Google play icon" />
                {{ t('portfolio.@terms.google-play') }}
            </a>
        </template>
        <template #tags>
            <UiTag>{{ t('portfolio.@terms.freelance') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.mobile') }}</UiTag>
        </template>
    </PortfolioItem>
</template>

<script setup>
const { t } = useI18n()
</script>
