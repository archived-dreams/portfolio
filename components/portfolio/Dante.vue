<template>
    <PortfolioItem 
        name="dante"
        :gradient-colors="['#DB306934', '#F5D54734']"
        media-width="3800"
        media-height="984"
    >
        <template #actions>
            <a class="portfolio__link" href="https://github.com/JsonDeveloper/dante-gui" target="_blank" rel="noopener nofollow">
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
