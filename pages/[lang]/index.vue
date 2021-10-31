<template>
  <section class="about">
    <div class="about__photo">
        <picture>
            <source srcset="/photo.webp" type="image/webp" />
            <!-- aspectRation - horizontal .1 => A trick to bypass a bug in chrome when rendering -->
            <img src="/photo.png" alt="Photo" width="405" height="512" :style="{ aspectRatio: '405.1 / 512' }" />
        </picture>
        <div class="about__locations">
            <span class="about__location" :aria-label="t('about.location.current.lable')">{{ t('about.location.current.title') }}</span>
            <span class="about__location about__location--previous" :aria-label="t('about.location.previous.lable')">{{ t('about.location.previous.title') }}</span>
        </div>
    </div>
    <div class="about__main">
        <h1 class="about__title" v-text="t('about.title')" />
        <div class="about__content">
            {{ t('about.content') }}

            <NuxtLink class="about__link" :to="`/${locale}/portfolio`">
                {{ t('about.action') }}&nbsp;&rightarrow;
            </NuxtLink>

            <div class="about__tags">
                <UiTag>♥️ UI/UX Design</UiTag>
                <UiTag>♥️ Penetration testing</UiTag>
                <UiTag>♥️ JavaScript<small>/ES/TS</small></UiTag>
                <UiTag>PHP</UiTag>
                <UiTag>JAVA</UiTag>
                <UiTag>C++</UiTag>
                <UiTag>♥️ Vue</UiTag>
                <UiTag>React</UiTag>
                <UiTag>Angular</UiTag>
                <UiTag>NativeScript</UiTag>
                <UiTag>React Native</UiTag>
                <UiTag>Laravel</UiTag>
                <UiTag>♥️ A11y</UiTag>
                <UiTag>🇷🇺 {{ t('about.tags.russian') }} <small>({{ t('about.tags.native') }})</small></UiTag>
                <UiTag>🇱🇹 {{ t('about.tags.lithuanian') }} <small>(B2)</small></UiTag>
                <UiTag>🇬🇧 {{ t('about.tags.english') }} <small>(A2)</small></UiTag>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
const { t, locale } = useI18n()

useMeta({
    link: [
        { rel: 'alternate', hreflang: 'x-default', href: '/' },
        { rel: 'preload', href: '/photo.webp', as: 'image', type: 'image/webp' }
    ],
    title: t('about.meta:title')
})
</script>

<style lang="scss">
    .about {
        display: flex;
        min-height: calc(100vh - 72px);
        align-items: center;
        position: relative;

        @media screen and (max-width: 614px) {
            min-height: auto;
            flex-direction: column;
            margin-top: 16px;
        }

        &__photo {
            position: relative;
            display: flex;
            padding: 3px;
            width: 100%;
            max-width: 25%;
            min-width: 220px;
            margin-right: 45px;

            img {
                width: 100%;
                height: auto;
                object-fit: cover;
                border-radius: 12px;
                padding-top: 20px;
                background-image: radial-gradient(circle at 0% 100%, rgba(238,174,202,1) 30%, rgba(148,187,233,1) 100%);
            }


            @media screen and (max-width: 768px) and (min-width: 615px) {
                margin-left: -120px;
                transform: rotate(10deg);
            }

            @media screen and (max-width: 614px) {
                display: block;
                text-align: center;
                margin: 0;

                img {
                    width: 124px;
                    height: 152px;
                }
            }
        }

        &__location {
            position: absolute;
            z-index: 2;
            bottom: 10px;
            right: -10px;
            background: rgba(255, 255, 255, 0.9);
            color: #191c20;
            backdrop-filter: blur(6px);
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 400;
            font-weight: 300;
            font-size: 1.2rem;
            box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.1);
            transform: rotate(-5deg);

            @media (prefers-color-scheme: dark) {
                background: rgba(255, 255, 255, 0.7);
            }

            &--previous {
                z-index: 1;
                bottom: 35px;
                right: -17px;
                background: rgba(255, 255, 255, 0.47);
                transform: rotate(3deg);
                transition: all 300ms cubic-bezier(0.1, -0.6, 0.2, 0) 200ms;

                @media (prefers-color-scheme: dark) {
                    background: rgba(255, 255, 255, 0.4);
                }
            }
        }

        &__locations {
            @media screen and (max-width: 768px) and (min-width: 615px) {
                zoom: 0.7;
                // margin-right: -30px;

                .about__location {
                    transition: all 300ms cubic-bezier(0.1, -0.6, 0.2, 0) 200ms;
                }

                &:hover .about__location {
                    margin-right: -40px;
                }
            }

            @media screen and (max-width: 614px) {
                zoom: 0.7;
                .about__location {
                    margin-right: 41px;
                }
            }

            &:hover .about__location--previous {
                bottom: 40px;
                right: -14px;
                transform: rotate(1deg);
            }
        }

        &__content {
            font-size: 1.3rem;
            margin-bottom: 48px;

            @media screen and (max-width: 768px) {
                text-align: justify;
            }
        }

        &__tags {
            margin-top: 20px;
        }

        &__title {
            @media screen and (max-width: 614px) {
                text-align: center;
            }
        }

        &__link {
            color: var(--link-color);
            text-decoration: none;
            margin-left: 6px;
        }
    }
</style>
