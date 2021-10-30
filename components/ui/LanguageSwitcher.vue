<template>
    <div class="language-switcher">
        <div class="language-switcher__item language-switcher__item--title" role="img" :aria-label="t('ui.language-switcher.title')" id="language-switcher__title">
            <img class="monocolor-icon" src="/icons/language.svg" height="20" width="25" alt="Language picker icon" />
        </div>

        <ul class="language-switcher__list"  role="radiogroup" aria-labelledby="language-switcher__title">
            <li 
                v-for="item of languages"
                :key="item.code"
                class="language-switcher__item" 
                :class="{ 'language-switcher__item--picked': item.picked }" 
                tabindex="0" 
                role="radio" 
                :aria-checked="item.picked" 
                :aria-label="item.title"
                v-text="item.emoji"
                @click="switchLanguage(item.code)"
            />
        </ul>
    </div>
</template>

<script setup>
const { $router } = useNuxtApp()
const { t, locale } = useI18n()
const currentRoute = computed(() => $router.currentRoute.value)

const languages = computed(() => ([
    {
        code: 'en',
        title: 'English',
        emoji: '🇬🇧',
        picked: locale === 'en'
    },
    {
        code: 'ru',
        title: 'Русский',
        emoji: '🇷🇺',
        picked: locale === 'ru'
    }
]))

const switchLanguage = (code) => {
    if (locale.value !== code) {
        $router.replace({
            name: currentRoute.value.name,
            params: { ...currentRoute.value.params, lang: code }
        })
    }
}
</script>

<style lang="scss">
    .language-switcher {
        position: fixed;
        bottom: -80px;
        left: 6px;
        background: var(--overlay-color);
        backdrop-filter: blur(6px);
        border-radius: 6px;
        z-index: 2;
        transition: all 100ms ease 40ms;
        opacity: 0.6;

        &:hover {
            bottom: 6px;
            opacity: 1;
        }

        &__list {
            list-style: none;
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }

        &__item {
            --background: rgba(0, 0, 0, 0);

            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            font-size: 20px;
            cursor: pointer;
            background-color: var(--background);

            &--title {
                cursor: default;
                opacity: 0.85;
            }
        }
    }
</style>