<template>
  <div>
    <div class="home-text">
      {{ text }}
    </div>
    <a href="/test.html">go to test</a>
  </div>
</template>

<script>
  // import { selectUserInfo } from '@/services/user';

  export default {
    name: 'Home',
    data() {
      return {
        text: 'home',
      };
    },
    created() {
      // selectUserInfo({ id: 1 }).then((response) => {
      //   console.log(response);
      // });
    }
  };
</script>

<style scoped lang='less'>
  @import '../../assets/styles/normalize.min.css';

  .home-text {
    color: red;
  }
  .aa {
    background-size: cover;
  }
</style>
