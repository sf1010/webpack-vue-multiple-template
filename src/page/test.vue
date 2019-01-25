<template>
  <div>
    <div class='test-text'>{{ text }}</div>
    <a href='/'>back to home</a>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        text: 'hello test',
      };
    }
  }
</script>

<style scoped lang='less'>
  @import '../asset/style/normalize.min.css';

  .test-text {
    color: blue;
  }
</style>