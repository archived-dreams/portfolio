<template>
    <nav class="menu">
        <ul class="menu__list">
            <!-- LinedIn -->
            <li class="menu__item menu--desktop-only">
                <a class="menu__link" href="https://www.linkedin.com/in/json-dev/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </li>
            <!-- HackerOne -->
            <li class="menu__item menu--desktop-only">
                <a class="menu__link" href="https://hackerone.com/rainbow_json" target="_blank" rel="noopener noreferrer">
                    HackerOne
                </a>
            </li>
            <!-- Resume -->
            <li class="menu__item">
                <NuxtLink class="menu__link" :to="`/${locale}/resume`">
                    {{ t('ui.menu.resume') }}
                </NuxtLink>
            </li>
            <!-- About -->
            <li class="menu__item">
                <NuxtLink class="menu__link" :to="`/${locale}`">
                    {{ t('ui.menu.about') }}
                </NuxtLink>
            </li>
            <!-- Contact -->
            <li class="menu__item">
                <NuxtLink class="menu__link" :to="`/${locale}/contacts`">
                    {{ t('ui.menu.contacts') }}
                </NuxtLink>
            </li>
            <!-- View Work -->
            <li class="menu__item">
                <NuxtLink class="menu__link menu__link--filled" :to="`/${locale}/portfolio`">
                    {{ t('ui.menu.portfolio') }}
                </NuxtLink>
            </li>
        </ul>
    </nav>    
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<style lang="scss">
    .menu {

        &__list {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        &__item {
            display: inline-block;
        }

        &__link {
            display: inline-flex;
            align-items: center;
            height: 44px;
            padding: 0 16px;
            text-decoration: none;
            font-weight: 600;
            line-height: 1;

            &--filled {
                background-color: var(--main-color);
                color: var(--background-color);
                border-radius: 6px;
            }

            &.router-link-active {
                text-decoration: underline;
                text-underline-offset: 7px;
            }
        }


        @media screen and (max-width: 648px) {
            &--desktop-only {
                display: none;
            }
        }
    }
</style>