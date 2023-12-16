<template>
  <div class="page">
    <Head>
      <Title>
        {{ title }}
      </Title>
    </Head>
    <h1 v-if="title" class="page__heading">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  padding: 70px 8vw 100px;

  @include respond(mobile) {
    padding: 40px 5vw 65px;
  }

  &__container {
    max-width: 1200px;
    margin: auto;
  }

  &__heading {
    font-family: "Livvic", sans-serif;
    font-weight: 800;
    font-size: 60px;
    color: $color1;
    text-align: center;
    margin-bottom: 70px;

    @include respond(mobile) {
      font-size: 40px;
      margin-bottom: 50px;
    }
  }
}
</style>
