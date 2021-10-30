<template>
    <section class="timeline">
        <h1>{{ t('timeline.title') }}</h1>
        <ul class="timeline__list">
            <!-- WebTransfer -->
            <li class="timeline__item" v-for="item in items" :key="item.key">
                <!-- Icon/Logo -->
                <span class="timeline__icon">
                    <img v-if="item.icon.src" :src="item.icon.src" :alt="item.icon.alt" width="50" height="50" loading="lazy" />
                    <span v-else role="img" :aria-label="item.icon.alt" v-text="item.icon.emoji" />
                </span>
                <div class="timeline__content">
                    <!-- Title -->
                    <h3 class="timeline__title" v-text="item.title" />
                    <!-- Subtitle -->
                    <p class="timeline__subtitle" v-text="item.subtitle" />
                    <!-- Period -->
                    <p class="timeline__period" v-if="item.period.start">
                        <time v-text="item.period.start" />
                        <template v-if="item.period.end"> — <time v-text="item.period.end" /></template>
                    </p>
                    <!-- Description -->
                    <p class="timeline__description" v-if="item.description" v-text="item.description" />
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>
import set from 'lodash-es/set'

const { t } = useI18n()

const items = computed(() => (
    ['donatepay', 'ipserver', 'klpvm', 'webtransfer'].map(key => {
        const value = { key };
        ['title', 'subtitle', 'description', 'icon.emoji', 'icon.src', 'icon.alt', 'period.start', 'period.end']
            .map((property) => set(value, property, t(`timeline.items.${key}.${property}`)))
        return value
    })
))
</script>

<style lang="scss">
    .timeline {

        &__list {
            list-style: none;
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }

        &__item {
            display: flex;
            margin-bottom: 16px;
        }

        &__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 55px;
            max-width: 55px;
            height: 55px;
            // background: var(--overlay-color);
            border-radius: 50%;
            font-size: 40px;
            line-height: 1;

            img {
                object-fit: contain;
            }
        }

        &__content {
            margin-left: 20px;
        }

        &__title {
            margin: 0 0 4px 0;
        }

        &__subtitle {
            line-height: 1;
            margin: 0 0 4px 0;
        }

        &__period {
            line-height: 1;
            margin: 0 0 4px 0;
            font-weight: lighter;
        }

        &__description {
            margin: 0;
            background-color: var(--overlay-color);
            padding: 8px 12px;
            border-radius: 6px;
            max-width: 540px;
        }
    }
</style>