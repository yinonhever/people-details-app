<template>
  <v-row justify="center" class="go-back">
    <v-btn color="primary" rounded variant="outlined" @click="router.back">
      Go back
    </v-btn>
  </v-row>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style lang="scss" scoped>
.go-back {
  margin-top: -20px;
  margin-bottom: 80px;

  @include respond(mobile) {
    margin-top: -10px;
    margin-bottom: 60px;
  }
}
</style>
