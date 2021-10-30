<template>
    <div class="tag">
            <slot />
    </div>
</template>

<style lang="scss">
    .tag {
        display: inline-block;
        padding: 8px 16px;
        background-color: var(--overlay-color);
        line-height: 1;
        border-radius: 6px;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0 6px 6px 0;

        small {
            font-size: unset;
            font-weight: normal;
        }
    }
</style>