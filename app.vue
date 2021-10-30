<template>
  <transition name="fade" mode="out-in">
    <div :key="locale" v-if="!isIncorrectLocale">
      <NuxtPage/>
    </div>
  </transition>
</template>

<script setup>
const { $router } = useNuxtApp()
const currentRoute = computed(() => $router.currentRoute.value)
const { locale } = useI18n()

const isIncorrectLocale = computed(() => !['ru', 'en'].includes(locale.value))

/** Set language */
watch(
  () => currentRoute.value.params.lang,
  () => (locale.value = currentRoute.value.params.lang),
  { immediate: true }
)

/** Need to detect language */
watch(
  () => currentRoute.value.matched, 
  () => {
    const userLanguage = process.client ? String(navigator?.language || navigator?.userLanguage || 'en').toLowerCase() : 'en'
    if (currentRoute.value.matched.length === 0 || !['ru', 'en'].includes(currentRoute.value.params.lang)) {
      const redurectLanguage = userLanguage.includes('ru') || userLanguage.includes('ua') ? 'ru' : 'en'
      const routeName = currentRoute.value.name
      if (currentRoute.value.matched.length === 0 || currentRoute.value.path === '/' || routeName === 'index') {
        $router.replace(`/${redurectLanguage}`)
      } else if (routeName) {
        $router.replace({
          name: routeName,
          params: {
            ...currentRoute.value.params,
            lang: redurectLanguage
          }
        })
      }
    }
  },
  { immediate: true }
)

</script>

<script>
export default {
  middleware() {
    console.log('-------------')
  }
}
</script>