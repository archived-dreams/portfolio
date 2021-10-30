<template>
    <div :style="style" ref="container"></div>
</template>

<script setup>
import lottie from 'lottie-web';

const props = defineProps({
    width: Number,
    height: Number,
    content: Object,
    loop: {
        type: Boolean,
        default: true
    }
});

const style = computed(() => ({
    width: props.width ? `${props.width}px` : '100%',
    height: props.height ? `${props.height}px` : '100%',
    overflow: 'hidden',
    margin: '0 auto'
}))

const container = ref('container')

watch(
    () => container.value,
    () => {
        container.value && lottie.loadAnimation({
                container: container.value,
                renderer: 'svg',
                loop: props.loop,
                autoplay: true,
                animationData: props.content,
            }
        );
    }
)
</script>