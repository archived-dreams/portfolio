<template>
  <section class="about">
    <div class="about__photo">
        <picture>
            <source srcset="/photo.webp" type="image/webp" />
            <!-- aspectRation - horizontal .1 => A trick to bypass a bug in chrome when rendering -->
            <img src="/photo.png" alt="Photo" width="405" height="512" :style="{ aspectRatio: '405.1 / 512' }">
        </picture>
    </div>
    <div class="about__main">
        <h1 class="about__title" v-text="t('about.title')" />
        <div class="about__content" role="paragraph">
            {{ t('about.content') }}

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
const { t } = useI18n()
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
    }
</style>
