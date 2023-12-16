<template>
  <header class="header">
    <NuxtLink href="/" class="header__logo"> PeopleApp </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: $color4;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;

  &__logo {
    display: block;
    font-family: "Comfortaa", cursive;
    font-size: 35px;
    font-weight: 300;
    line-height: 1;
    color: #fff;

    @include respond(mobile) {
      font-size: 28px;
    }
  }
}
</style>
