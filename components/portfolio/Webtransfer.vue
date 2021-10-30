<template>
    <PortfolioItem 
        name="webtransfer"
        :gradient-colors="['#0026ff34', '#ff510034']"
        media-width="3182"
        media-height="512"
    >
        <template #actions>
            <a class="portfolio__link" href="https://github.com/webfinpartner/webtransfer" target="_blank" rel="noopener nofollow">
                <img class="monocolor-icon" src="/icons/github.svg" width="20" height="20" alt="GitHub icon" />
                {{ t('portfolio.@terms.open-github') }}
            </a>
        </template>
        <template #tags>
            <UiTag>{{ t('portfolio.@terms.pentester') }}</UiTag>
            <UiTag>{{ t('portfolio.@terms.web-dev') }} <small>({{ t('portfolio.@terms.junior') }})</small></UiTag>
        </template>
    </PortfolioItem>
</template>

<script setup>
const { t } = useI18n()
</script>
