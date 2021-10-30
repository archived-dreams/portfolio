<template>
    <PortfolioItem 
        name="ipserver"
        :gradient-colors="['#8cc15234', '#4d8fac34']"
        media-width="3294"
        media-height="968"
    >
        <template #actions>
            <a class="portfolio__link" :href="t('portfolio.ipserver.link')" target="_blank" rel="noopener nofollow">
                <img src="/portfolio/ipserver/icon.png" width="20" height="20" alt="Ipcserver icon" />
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
