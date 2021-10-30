<template>
    <div class="layout">
        <!-- Meta :: Static -->
        <!-- <Head>
            <Link rel="shortcut icon" href="/logo.webp" type="image/webp" />
            <Link rel="shortcut icon" href="/logo.png" type="image/png" />
        </Head> -->
        <!-- Meta :: Dynamic -->
        <Head :lang="locale" :key="canonicalUrl">
            <Link rel="canonical" :href="canonicalUrl" />
            <Link rel="alternate" hreflang='ru' :href="canonicalUrl.replace(/\/(ru|en)(\/|$)/, '/ru$2')" />
            <Link rel="alternate" hreflang='en' :href="canonicalUrl.replace(/\/(ru|en)(\/|$)/, '/en$2')" />
        </Head>

        <!-- Layout -->
        <UiHeader />
        <transition name="fade" mode="out-in">
            <main class="main container" :key="`${locale}:${routeName}`">
                <slot />
            </main>
        </transition>
        <UiFooter />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const { $router } = useNuxtApp()
const currentRoute = computed(() => $router.currentRoute.value)
const routeName = computed(() => currentRoute.value.name)
const canonicalUrl = computed(() => currentRoute.value.path.replace(/\/$/, ''))

</script>

<style lang="scss">
    :root {
        --main-color: #191c20;
        --background-color: #eeeff1;
        --background-opacity-color: #eeeff1b9;
        --overlay-color: #d3d6db;
        --link-color: #820039;

        max-width: 100%;
        scrollbar-width: none;
        ::-webkit-scrollbar { display: block; }
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        overflow-x: hidden;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: var(--main-color);
        background-color: var(--background-color);
    }

    /**
     * Dark mode
     */
    @media (prefers-color-scheme: dark) {
        :root {
            --main-color: #eeeff1;
            --background-color: #191c20;
            --background-opacity-color: #191c20b9;
            --overlay-color: #2c3239;
            --link-color: #e1b5c8;
        }

        .monocolor-icon {
            filter: invert(100%);
        }
    }

    a {
        color: var(--main-color);
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 24px;
    }

    /** Hide element */
    .visually-hidden {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        padding:0 !important;
        border:0 !important;
        height: 1px !important; 
        width: 1px !important; 
        overflow: hidden;
    }

    /** Transition */
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.2s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }
</style>