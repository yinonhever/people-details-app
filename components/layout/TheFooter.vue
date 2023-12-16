<template>
  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} PeopleApp. All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: $color2;
  color: #fff;
  font-weight: 500;
  margin-top: auto;
  padding: 40px $padding-sides-desktop;

  @include respond(mobile) {
    padding: 25px $padding-sides-mobile;
  }

  p {
    font-size: 15px;
    margin: 0;

    @include respond(mobile) {
      font-size: 13px;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
