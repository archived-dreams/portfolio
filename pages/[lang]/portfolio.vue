<template>
    <article class="portfolio">
        <div class="portfolio__content">
            <h1 class="visually-hidden" v-text="t('portfolio.title')" />

            <!-- Blocks -->
            <div class="portfolio__list" ref="list">
                <PortfolioDonatepay />
                <PortfolioB2bhomer />
                <PortfolioIpserver />
                <PortfolioEsteri />
                <PortfolioBitcy />
                <PortfolioDante />
                <PortfolioWebtransfer />
                <PortfolioStreamtip />
            </div>

            <!-- Navigation -->
            <nav class="portfolio-navigation" :class="{ 'portfolio-navigation--empty': listIsEmpty }" :aria-label="t('portfolio.navigation')">
                <ul class="portfolio-navigation__list">
                    <li 
                        v-for="element of elements" 
                        :key="element.id" 
                        class="portfolio-navigation__item"
                    >
                        <a 
                            class="portfolio-navigation__link" 
                            :class="{ 'portfolio-navigation__link--active': activeElement.id === element.id }"
                            :href="`#${element.id}`" 
                            :title="element.title" 
                        />
                    </li>
                </ul>
            </nav>
        </div>
    </article>
</template>

<script setup>
const { t } = useI18n()

const list = ref(null)
const elements = reactive([])
const listIsEmpty = reactive(process.server)
const activeElement = reactive({ id: null, timer: null })

const scrollTrigger = () => {
    clearTimeout(activeElement.timer)
    activeElement.timer = setTimeout(() => {
        activeElement.id = elements.find(element => element.el.offsetTop >= window.pageYOffset)?.id

        if (!activeElement.id) {
            activeElement.id = elements[elements.length - 1].id
        }

        // if (location.hash) {
        //    location.hash = ''
        // }
    }, 100)
}

onMounted(() => {
    // Portfolio list
    for (const item of list.value.querySelectorAll('.portfolio__item')) {
        elements.push({
            el: item,
            id: item.id,
            title: item.querySelector('.portfolio__title').innerText.trim()
        })

        if (!activeElement.id) {
            activeElement.id = item.id
        }
        
    }

    // Scroll listener
    window.addEventListener('scroll', scrollTrigger, { passive: true});
    window.addEventListener('resize', scrollTrigger, { passive: true});

    scrollTrigger();
})

onBeforeUnmount(() => {
    clearTimeout(activeElement.timer)
    window.removeEventListener('scroll', scrollTrigger)
    window.removeEventListener('resize', scrollTrigger)
})

useMeta({ 
    link: [
        { rel: 'preload', href: '/portfolio/donatepay/screenshot.webp', as: 'image', type: 'image/webp' }
    ],
    title: t('portfolio.title')
})
</script>

<style lang="scss">
    .main--portfolio {
        max-width: 100% !important;
        min-width: 100% !important;
        padding: 0 !important;
    }

    .portfolio {
        display: block;

        &__item {
            display: flex;
            scroll-snap-align: start;
            min-height: 100vh;
            max-width: 100%;
            position: relative;
            overflow: hidden;

            @media screen and (max-width: 616px) {
                min-height: auto;
                margin: 24px 0 0 0;
                border-radius: 24px;
                border-top: 2px solid var(--overlay-color);
                border-bottom: 2px solid var(--overlay-color);

                &:last-child {
                    margin-bottom: 24px;
                }
            }
        }

        &__inner {
            display: flex;
            min-height: 100%;
            flex-direction: column;
            justify-content: center;
            padding: 80px 24px !important;

            @media screen and (max-width: 616px) {
                padding: 24px 24px 48px 24px !important;
                max-width: calc(100% - 48px) !important;
            }
        }

        @media screen and (min-width: 617px) {
            &__header {
                display: flex;
                align-items: center;
            }
        }

        &__title {
            margin-right: auto;
        }

        &__link {
            display: flex;
            opacity: 0.8;
            margin-left: 22px;
            text-decoration: none;
            align-items: center;
            white-space: nowrap;
            transition: opacity 100ms ease 40ms;

            &:hover {
                opacity: 1;
            }

            img {
                margin-right: 6px;
                color: rgba(0, 0, 0, 0);
            }

            @media screen and (max-width: 616px) {
                margin: -4px 24px 18px 0;
                display: inline-flex;
            }
        }

        @media screen and (min-width: 1053px) {
            &--grid {
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }

            &--grid &__content {
                max-width: 45%;
                margin-left: 24px;
                order: 2;
            }
        }

        &__description {
            font-size: 1.3rem;
            max-width: 650px;
        }

        &__media {
            display: flex;
            overflow: hidden;
            border-radius: 6px;
            box-shadow: 0 0 0 4px var(--overlay-color);
            background-color: var(--overlay-color);
            max-width: 100%;

            @media screen and (min-width: 561px) {
                &--md {
                    max-width: 78%;
                    margin: 0 auto;
                }
            }

            img {
                display: flex;
                width: 100%;
                height: auto;
                object-fit: cover;
                color: var(--overlay-color);
            }

            @media screen and (max-width: 560px) {
                display: block;
                overflow: auto;
                min-height: 210px;
                max-height: 210px;

                img {
                    max-height: 210px;
                    min-height: 210px;
                    width: auto;
                }
            }
        }

        &__background {
            &::before, &::after {
                z-index: -1;
                display: block;
                content: "";
                position: absolute;
                top: 0;
                left: calc(-1 * min(100vw, 1024px));
                right: calc(-1 * min(100vw, 1024px));
                bottom: 0;
            }

            &::after {
                background-image: radial-gradient(circle at 50% 95%, var(--background-right) 0%, rgba(0, 0, 0, 0) 50%);
                background-size: 200%;
                background-position-x: 200px;
                background-repeat: no-repeat;
            }

            &::before {
                background-image: radial-gradient(circle at -40% -90%, var(--background-left) 0%, rgba(0, 0, 0, 0) 50%);
                background-size: 200%;
                background-position-x: 200px;
                background-repeat: no-repeat;
            }
        }
    }

    .portfolio-navigation {
        position: fixed;
        z-index: 2;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--background-opacity-color);
        backdrop-filter: blur(6px);
        border-radius: 12px;
        padding: 0 6px;

        &--empty {
            animation-duration: 700ms;
            animation-name: SlideInNavigation;
            animation-delay: 300ms;
            animation-iteration-count: 1;
            animation-direction: alternate;
        }

        &__list {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        &__link {
            display: inline-block;
            position: relative;
            overflow: hidden;

            &::before, &::after {
                display: block;
                content: "";
                border-radius: 50%;
            }

            &::before {
                width: 14px;
                height: 14px;
                background-color: var(--main-color);
                margin: 6px;
            }

            &::after {
                position: absolute;
                bottom: -50%;
                left: 50%;
                transform: translate(-50%, 50%);
                transition: bottom 100ms ease;
                width: 6px;
                height: 6px;
                background-color: var(--background-color);
            }

            &--active {
                &::after {
                    bottom: 50%;
                }
            }
        }
    }

    @keyframes SlideInNavigation {
        from {
            bottom: -40px;
        }

        to {
            bottom: 6px;
        }
    }
</style>
