<template>
    <PortfolioItem 
        name="b2bhomer"
        :gradient-colors="['#F0644934', '#502F4C34']"
        media-width="2000"
        media-height="1068"
        media-size="md"
    >
        <template #tags>
            <UiTag>{{ t('portfolio.@terms.web-dev') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.mvp') }}</UiTag>
        </template>
    </PortfolioItem>
</template>

<script setup>
const { t } = useI18n()
</script>