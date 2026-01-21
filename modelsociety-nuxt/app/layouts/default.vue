<template>
  <v-layout class="default-layout">
    <AppHeader />
    <v-main>
      <slot />
    </v-main>
    <AppFooter />
  </v-layout>
</template>

<style scoped lang="scss">
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
