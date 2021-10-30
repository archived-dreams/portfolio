<template>
    <header class="header">
        <div class="header__inner container">
            <UiLogo class="header__logo" />
            <UiMenu class="header__menu" />
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        position: sticky;
        z-index: 1;
        top: 0;
        backdrop-filter: blur(6px);
        background-color: var(--background-opacity-color);
        padding: 12px 0;

        &__inner {
            display: flex;
        }

        &__logo {
            margin-right: auto;
        }

        @media screen and (max-width: 824px) {
            &__inner {
                flex-direction: column;
            }

            &__menu, &__logo {
                margin: 0 auto;
            }

            &__logo {
                margin-bottom: 8px;
            }

            &__menu {
                max-width: calc(100% + 48px);
                overflow-x: auto;
                margin: 0 -24px;
                .menu__list {
                    margin: 0 28px;
                }
            }
        }
    }
</style>