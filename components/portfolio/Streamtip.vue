<template>
    <PortfolioItem 
        name="streamtip"
        :gradient-colors="['#EA731734', '#50C9CE34']"
        media-width="1742"
        media-height="1000"
        media-size="md"
    >
        <template #actions>
            <a class="portfolio__link" href="https://github.com/JsonDeveloper/StreamDonations" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/github.svg" width="20" height="20" alt="GitHub icon" />
                {{ t('portfolio.@terms.open-github') }}
            </a>
        </template>
        <template #tags>
            <UiTag>{{ t('portfolio.@terms.opensource') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.pet') }}</UiTag>
        </template>
    </PortfolioItem>
</template>

<script setup>
const { t } = useI18n()
</script>
