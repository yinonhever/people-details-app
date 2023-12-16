<template>
  <div :class="wrapperClasses">
    <v-progress-circular indeterminate color="primary" />
  </div>
</template>

<script setup lang="ts">
const { absolute, fixed, center, top } = defineProps<{
  absolute?: boolean;
  fixed?: boolean;
  center?: boolean;
  top?: boolean;
}>();

const wrapperClasses = computed(() => [
  "spinner",
  {
    "spinner--absolute": !!absolute,
    "spinner--fixed": !!fixed,
    "spinner--center": !!center,
    "spinner--top": !!top
  }
]);
</script>

<style lang="scss" scoped>
.spinner {
  display: flex;
  justify-content: center;
  z-index: 100;

  &--absolute {
    position: absolute;
  }

  &--fixed {
    position: fixed;
  }

  &--absolute,
  &--fixed {
    left: 0;
    right: 0;
  }

  &--center {
    top: 50%;
    transform: translateY(-50%);
  }

  &--top {
    top: -50px;

    @include respond(mobile) {
      top: -45px;
    }
  }
}
</style>
