<template>
  <v-app>
    <TheHeader />
    <div class="page-wrapper">
      <slot />
    </div>
    <TheFooter />
  </v-app>
</template>

<style lang="scss" scoped>
.page-wrapper {
  flex: 1;
}
</style>
