<template>
    <div>
        <!-- Print -->
        <button class="resume__print" type="button" @click="print">
            🖨 {{ t('resume.print') }}
        </button>

        <!-- Resume -->
        <div class="resume__container">
            <section class="resume">
                <!-- Meta -->
                <div class="resume__meta">
                    <!-- Header -->
                    <header class="resume__header">
                        <h1 class="resume__title resume__title--h1">{{ t('resume.name') }}</h1>
                        <picture>
                            <source srcset="/photo.webp" type="image/webp" />
                            <img class="resume__photo" src="/photo.png" alt="Photo" width="405" height="512" />
                        </picture>
                        <p class="resume__paragraph">{{ t('about.content') }}</p>
                    </header>

                    <!-- Contacts -->
                    <section class="resume__contacts">
                        <h2 class="resume__title resume__title--h2">
                            {{ t('resume.contacts.title') }}
                        </h2>
                        <ul class="resume__list">
                            <!-- Email -->
                            <li class="resume__contacts-item">
                                <a href="mailto:jquery.ts@gmail.com">
                                    <svg class="resume__icon" width="16" height="16" aria-label="Email" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path></svg>
                                    jquery.ts@gmail.com
                                </a>
                            </li>
                            <!-- Telegram -->
                            <li class="resume__contacts-item">
                                <a href="https://t.me/kriakiku">
                                    <svg class="resume__icon" width="16" height="16" aria-label="Telegram" role="img" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 392.1 496 256 384.1 8 248 8zM362.1 176.7c-3.732 39.22-19.88 134.4-28.1 178.3-3.476 18.58-10.32 24.82-16.95 25.42-14.4 1.326-25.34-9.517-39.29-18.66-21.83-14.31-34.16-23.22-55.35-37.18-24.49-16.14-8.612-25 5.342-39.5 3.652-3.793 67.11-61.51 68.33-66.75 .153-.655 .3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283 .746-104.6 69.14-14.85 10.19-26.89 9.934c-8.855-.191-25.89-5.006-38.55-9.123-15.53-5.048-27.88-7.717-26.8-16.29q.84-6.7 18.45-13.7 108.4-47.25 144.6-62.3c68.87-28.65 83.18-33.62 92.51-33.79 2.052-.034 6.639 .474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716A43.76 43.76 0 0 1 362.1 176.7z"></path></svg>
                                    <span class="resume--light">t.me/</span>kriakiku
                                </a>
                            </li>
                            <!-- LinkedIn -->
                            <li class="resume__contacts-item">
                                <a href="https://www.linkedin.com/in/kriakiku/">
                                    <svg class="resume__icon" width="16" height="16" aria-label="LinkedIn" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                                    <span class="resume--light">linkedin.com/in/</span>kriakiku
                                </a>
                            </li>
                            <!-- Hackerone -->
                            <li class="resume__contacts-item">
                                <a href="https://hackerone.com/kriakiku">
                                    <svg class="resume__icon" width="16" height="16" aria-label="HackerOne" role="img" viewBox="0 0 256 478"><path fill="currentColor" d="M9.132 5.98C3.075 9.966 0 15.178 0 21.486v433.84c0 5.503 3.15 10.5 9.457 15.14 6.263 4.647 13.983 6.963 23.196 6.963 8.806 0 16.527-2.316 23.233-6.963 6.67-4.595 10.063-9.637 10.063-15.14V21.523c0-6.346-3.23-11.476-9.737-15.542C49.704 2.034 41.866 0 32.653 0c-9.62 0-17.459 2.034-23.52 5.98zM198.856 178.3l-88.296 55.346c-3.956 3.701-5.657 9.325-4.925 17.01.68 7.61 4.2 14.856 10.426 21.693 6.256 6.88 13.25 11.193 21.251 13.025 7.882 1.787 13.865.812 17.821-2.852l34.916-21.776v194.58c0 5.502 3.032 10.5 9.17 15.139 5.98 4.647 13.663 6.963 22.877 6.963 9.213 0 17.17-2.316 23.84-6.963 6.706-4.64 10.064-9.637 10.064-15.14V193.723c0-6.353-3.277-11.476-9.74-15.423-6.469-4.03-14.507-5.988-24.164-5.988-9.62 0-17.34 1.959-23.24 5.988z"/></svg>
                                    <span class="resume--light">hackerone.com/</span>kriakiku
                                </a>
                            </li>
                            <!-- Github -->
                            <li class="resume__contacts-item">
                                <a href="https://github.com/kriakiku">
                                    <svg class="resume__icon" width="16" height="16" aria-label="Github" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4 .2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9 .2 36.5 .2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9 .4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2 .4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8 .9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1zm-9.1-9.1c-.9 .6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9 .9-2.4 .4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5zm-6.7-7.4c-.4 .9-1.7 1.1-2.8 .4-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6z"></path></svg>
                                    <span class="resume--light">github.com/</span>kriakiku
                                </a>
                            </li>
                            <!-- Facebook -->
                            <li class="resume__contacts-item">
                                <a href="https://www.facebook.com/kriakiku/">
                                    <svg class="resume__icon" width="16" height="16" aria-label="Facebook" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.3V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0 -48-48z"></path></svg>
                                    <span class="resume--light">facebook.com/</span>kriakiku
                                </a>
                            </li>
                        </ul>
                    </section>


                    <!-- Languages -->
                    <section class="resume__languages">
                        <h2 class="resume__title resume__title--h2">
                            {{ t('resume.languages.title') }}
                        </h2>
                        <ul class="resume__list">
                            <li class="resume__languages-item">
                                <span class="resume__icon">🇷🇺</span> {{ t('about.tags.russian') }} <span class="resume--light">— {{ t('about.tags.native') }}</span>
                            </li>
                            <li class="resume__languages-item">
                                <span class="resume__icon">🇱🇹</span> {{ t('about.tags.lithuanian') }} <span class="resume--light">— B2</span>
                            </li>
                            <li class="resume__languages-item">
                                <span class="resume__icon">🇬🇧</span> {{ t('about.tags.english') }} <span class="resume--light">— A2</span>
                            </li>
                        </ul>
                    </section>

                    <!-- Info message -->
                    <section class="resume__info">
                        {{ t('resume.info.message') }}
                        <a :href="`https://kriakiku.netlify.app/${locale}/portfolio`">
                            https://kriakiku.netlify.app/{{ locale }}
                        </a>
                    </section>
                </div>

                <!-- Main -->
                <div class="resume__main">
                    <!-- Work experience -->
                    <section class="resume__experience">
                        <h2 class="resume__title resume__title--h2">
                            👨‍💻 {{ t('resume.experience.title') }}
                        </h2>
                        <ul class="resume__list">
                            <!-- B2BHomer -->
                            <li class="resume__experience-item">
                                <h3 class="resume__title resume__title--h3">
                                    {{ removeEmoji(t('portfolio.b2bhomer.title')) }}
                                </h3>
                                <p class="resume__metainfo">
                                    2020 - 2021
                                </p>
                                <div>
                                    <div class="resume__tag">{{ t('portfolio.@terms.web-dev') }}</div>
                                    <div class="resume__tag">{{ t('portfolio.@terms.ui-ux') }}</div>
                                </div>
                                <p class="resume__description">
                                    {{ t('portfolio.b2bhomer.description') }}
                                </p>
                            </li>

                            <!-- DonatePay -->
                            <li class="resume__experience-item">
                                <h3 class="resume__title resume__title--h3">
                                    {{ removeEmoji(t('portfolio.donatepay.title')) }}
                                </h3>
                                <p class="resume__metainfo">
                                    2019 — 2020
                                </p>
                                <div>
                                    <div class="resume__tag">{{ t('portfolio.@terms.web-dev') }}</div>
                                    <div class="resume__tag">{{ t('portfolio.@terms.ui-ux') }}</div>
                                </div>
                                <p class="resume__description">
                                    {{ t('portfolio.donatepay.description') }}
                                </p>
                            </li>

                            <!-- IPServer -->
                            <li class="resume__experience-item">
                                <h3 class="resume__title resume__title--h3">
                                    {{ removeEmoji(t('portfolio.ipserver.title')) }}
                                </h3>
                                <p class="resume__metainfo">
                                    2015 — 2019
                                </p>
                                <div>
                                    <div class="resume__tag">{{ t('portfolio.@terms.web-dev') }}</div>
                                </div>
                                <p class="resume__description">
                                    {{ t('portfolio.ipserver.description') }}
                                </p>
                            </li>

                            <!-- Webtransfer -->
                            <li class="resume__experience-item">
                                <h3 class="resume__title resume__title--h3">
                                    {{ removeEmoji(t('portfolio.webtransfer.title')) }}
                                </h3>
                                <p class="resume__metainfo">
                                    2014 — 2016
                                </p>
                                <div>
                                    <div class="resume__tag">{{ t('portfolio.@terms.pentester') }}</div>
                                    <div class="resume__tag">{{ t('portfolio.@terms.web-dev') }} ({{ t('portfolio.@terms.junior') }})</div>
                                </div>
                                <p class="resume__description">
                                    {{ t('portfolio.webtransfer.description') }}
                                </p>
                            </li>
                        </ul>
                    </section>

                    <!-- Education -->
                    <section class="resume__experience">
                        <h2 class="resume__title resume__title--h2">
                            🎒 {{ t('resume.education.title') }}
                        </h2>
                        <ul class="resume__list">
                            <li class="resume__experience-item">
                                <h3 class="resume__title resume__title--h3">
                                    {{ t('resume.education.klpvm.title') }}
                                </h3>
                                <p class="resume__subtitle">
                                    {{ t('resume.education.klpvm.subtitle') }}
                                </p>
                                <p class="resume__metainfo">
                                    2015 — 2018
                                    <span class="resume--offset-left">🇱🇹 {{ t('resume.education.klpvm.location') }}</span>
                                </p>
                            </li>
                        </ul>
                    </section>
                </div>

                <!-- Skills -->
                <section class="resume__skills">
                    <div>
                        <h2 class="resume__title resume__title--h2">
                            {{ t('resume.skills.title') }}:
                        </h2>
                        <span class="resume__tag">UI/UX Design</span>
                        <span class="resume__tag">Penetration testing</span>
                        <span class="resume__tag">JavaScript<small>/ES/TS</small></span>
                        <span class="resume__tag">PHP</span>
                        <span class="resume__tag">JAVA</span>
                        <span class="resume__tag">C++</span>
                        <span class="resume__tag">Vue</span>
                        <span class="resume__tag">React</span>
                        <span class="resume__tag">Angular</span>
                        <span class="resume__tag">NativeScript</span>
                        <span class="resume__tag">React Native</span>
                        <span class="resume__tag">Laravel</span>
                        <span class="resume__tag">A11y</span>
                        <span class="resume__tag">{{ t('about.tags.bem') }}</span>
                    </div>
                </section>

                <!-- Logo -->
                <picture>
                    <source srcset="/logo.webp" type="image/webp" />
                    <img class="resume__logo" src="/logo.png" alt="😜" :aria-label="t('ui.logo')" width="48" height="48" />
                </picture>
            </section>
        </div>
    </div>
</template>

<script setup>
const { t, locale } = useI18n()

const removeEmoji = (string) => string.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')
const print = () => process.client && window && window.print()

useMeta({ 
    title: t('resume.title'),
    links: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap' }
    ]
})
</script>

<style lang="scss">
    .resume {
        position: relative;
        display: grid;
        grid-template-columns: 74mm 1fr; 
        grid-template-rows: 1fr 30mm; 
        gap: 0px 6mm;
        grid-template-areas: 
            "meta content"
            "skills skills"; 

        width: calc(210mm - 20mm);
        height: calc(297mm - 12mm);
        padding: 6mm 10mm;
        background: #fff;
        color: #000;
        font-family: 'Roboto Condensed', sans-serif;
        text-align: left;

        a {
            color: #000;
            text-decoration: none;
        }

        &__container {
            width: 100%;
            max-width: 210mm;
            overflow: auto;
            margin: 24px auto;
            border-radius: 6px;
            border: 3px solid var(--overlay-color);
        }

        &__title {
            text-align: left;
            font-weight: 500;
            margin: 0;

            &--h1 {
                font-size: 10mm;
                text-align: center;
            }

            &--h2 {
                font-size: 7.4mm;
                text-align: left;
                margin-bottom: 2mm;
            }

            &--h3 {
                font-size: 5.4mm;
                text-align: left;
                margin-bottom: 0.2mm;
                color: #6d1942;
            }
        }

        // &__header {
        //     // background: red;
        // }

        &__photo {
            display: block;
            object-fit: contain;
            width: 39.55mm;
            height: 50mm;
            box-shadow: inset 0 0 0 20mm #eeeff1;
            border-radius: 2mm;
            padding-top: 4mm;
            margin: 4mm auto;
        }

        &__meta {
            grid-area: meta;
        }

        &__logo {
            width: 15mm;
            height: 15mm;
            object-fit: contain;
            position: absolute;
            bottom: 9mm;
            right: 4mm;
        }

        &__contacts {
            margin: 8mm 0 6mm;
            &-item {
                margin-bottom: 2mm;
                font-weight: 500;
                display: flex;

                a {
                    display: flex;
                }

                svg {
                    margin-right: 2.2mm;
                }
            }
        }

        &__languages {
            &-item {
                font-weight: 500;
                margin-bottom: 2mm;

                .resume__icon {
                    margin-right: 2.2mm;
                }
            }
        }

        &__info {
            box-shadow: inset 0 0 0 20mm #eeeff1;
            border-radius: 1.4mm;
            padding: 2mm 3mm;
            text-align: justify;
            margin-top: 2mm;
            font-weight: 400;
        }

        &__skills {
            grid-area: skills;
            display: flex;
            padding-right: 12mm;
            margin-top: 0mm;
        }

        &__experience {
            margin-bottom: 2mm;

            &:last-child {
                margin-bottom: 0;
            }
            
            &-item {
                margin-bottom: 4mm;
            }
        }

        &__paragraph {
            margin: 0;
            font-size: 4.233mm;
            text-align: justify;
        }

        &__subtitle {
            margin: 1mm 0 0.8mm 2mm;
            font-size: 4.833mm;
        }

        &__description {
            margin: 1mm 0 0.8mm 0;
            font-size: 4.233mm;
        }

        &__metainfo {
            margin: 0 0 1.3mm 2mm;
            font-size: 4.233mm;
            color: #6d1942;
        }

        &__icon {
            width: 5.6mm;
            height: 5.6mm;
            font-size: 5mm;
            object-fit: contain;
            vertical-align: middle;
            color: #6d1942;
        }

        &__tag {
            display: inline-block;
            padding: 2mm 3mm;
            box-shadow: inset 0 0 0 10mm #eeeff1;
            line-height: 1;
            border-radius: 1.4mm;
            font-size: 3.833mm;
            font-weight: 600;
            margin: 0 6px 6px 0;
        }

        &__list {
            list-style: none;
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }

        &__print {
            display: block;
            border: 0;
            cursor: pointer;
            padding: 8px 16px;
            background-color: var(--overlay-color);
            line-height: 1;
            border-radius: 6px;
            font-size: 1.1rem;
            font-weight: 600;
            margin: 24px auto 0 auto;
        }

        &--light {
            font-weight: 300;
        }

        &--offset-left {
            margin-left: 5mm;
        }
    }

    @page {
        size: A4;
        margin: 0;
        padding: 0;
    }

    @media print {
        .header, .footer, .resume__print {
            display: none !important;
        }
    
        .resume {
            margin: 0 !important;
            overflow: visible;

            &__container {
                display: flex;
                border: none;
                margin: 0;
                overflow: hidden;
                max-height: calc(297mm - 1px);
            }
        }

        * {
            background: none !important;
        }

        .container {
            margin: 0 !important;
            padding: 0 !important;
            max-width: auto !important;
            min-width: auto !important;
        }
    }
</style>