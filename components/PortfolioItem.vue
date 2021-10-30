<template>
    <section 
        class="portfolio__item" 
        :class="`portfolio--${props.name}`"
        :id="props.name"
        :style="{
            '--background-left': gradientColors[0],
            '--background-right': gradientColors[1]
        }"
    >
        <div class="container portfolio__inner" :class="{ 'portfolio--grid': grid }">
            <div class="portfolio__content">
                <header class="portfolio__header">
                    <h2 class="portfolio__title">
                        <slot name="title">
                            {{ t(`portfolio.${props.name}.title`) }}
                        </slot>
                    </h2>
                        <slot name="actions" />
                </header>
                <div class="portfolio__tags">
                    <slot name="tags" />
                </div>
                <p class="portfolio__description">
                    <slot name="description">
                        {{ t(`portfolio.${props.name}.description`) }}
                    </slot>
                </p>
            </div>
            <div class="portfolio__media" :class="mediaSize ? `portfolio__media--${mediaSize}` : null">
                <slot name="media">
                    <picture>
                        <source :srcset="`/portfolio/${props.name}/screenshot.webp`" type="image/webp">
                        <img 
                            :src="`/portfolio/${props.name}/screenshot.jpg`" 
                            loading="lazy" 
                            alt="Screenshot"
                            :width="String(mediaWidth)"
                            :height="String(mediaHeight)"
                            :style="{ aspectRatio: `${mediaWidth} / ${mediaHeight}` }"
                        />
                    </picture>
                </slot>
            </div>
        </div>
        <div class="portfolio__background" />
    </section>
</template>

<script setup>
const props = defineProps({
    name: String,
    grid: Boolean,
    gradientColors: [Array],
    mediaWidth: [Number, String],
    mediaHeight: [Number, String],
    mediaSize: {
        type: String,
        default: () => null
    }
});

const { t } = useI18n()
</script>

