<template>
    <PortfolioItem 
        name="bitcy"
        :gradient-colors="['#dd0a6c34', '#f7931a34']"
        media-width="2056"
        media-height="1158"
        media-size="md"
    >
        <template #actions>
            <a class="portfolio__link" href="https://bitcy.club/" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/globe.svg" width="20" height="20" alt="Globe icon" />
                {{ t('portfolio.@terms.open-web') }}
            </a>
        </template>
        <template #tags>
            <UiTag>{{ t('portfolio.@terms.freelance') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.web-dev') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.mvp') }}</UiTag>
        </template>
    </PortfolioItem>
</template>

<script setup>
const { t } = useI18n()
</script>