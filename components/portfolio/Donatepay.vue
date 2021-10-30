<template>
    <PortfolioItem 
        name="donatepay"
        :gradient-colors="['#ffc10734', '#4caf5034']"
        media-width="1280"
        media-height="868"
        media-size="md"
        grid
    >
        <template #actions>
            <a class="portfolio__link" :href="t('portfolio.donatepay.link')" target="_blank" rel="noopener nofollow">
                <img src="/portfolio/donatepay/icon.png" width="20" height="20" alt="Donatepay icon" />
                {{ t('portfolio.@terms.open-web') }}
            </a>
        </template>
        <template #tags>
            <UiTag>{{ t('portfolio.@terms.web-dev') }}</UiTag>
        </template>
    </PortfolioItem>
</template>

<script setup>
const { t } = useI18n()
</script>
