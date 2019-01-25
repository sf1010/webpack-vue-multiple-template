<template>
  <div>
    <div class='home-text'>{{ text }}</div>
    <a href='/test.html'>go to test</a>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        text: 'home',
      };
    }
  }
</script>

<style scoped lang='less'>
  @import '../asset/style/normalize.min.css';

  .home-text {
    color: red;
  }
  .aa {
    background-size: cover;
  }
</style>