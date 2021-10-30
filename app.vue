<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script setup>
const { $router } = useNuxtApp()
const currentRoute = computed(() => $router.currentRoute.value)
const { locale } = useI18n()

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
    console.log()
    const userLanguage = process.client ? String(navigator?.language || navigator?.userLanguage || 'en').toLowerCase() : 'en'
    if (currentRoute.value.matched.length === 0 || !['ru', 'en'].includes(currentRoute.value.params.lang)) {
      const redurectLanguage = userLanguage.includes('ru') || userLanguage.includes('ua') ? 'ru' : 'en'

      if (currentRoute.value.matched.length === 0 || currentRoute.value.path === '/') {
        $router.replace(`/${redurectLanguage}`)
      } else if (currentRoute.value.name) {
        $router.replace({
          name: currentRoute.value.name,
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