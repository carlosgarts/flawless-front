<template >
  <div id="insta">
    <div class="title">
      <p>INSTAGRAM</p>
      <img src="@/assets/insta.svg">
    </div>
    <div class="widget">
      <div class="pictures">
        <!-- <img v-for="item in items" src="@/assets/insta-test/insta-test-1.gif" alt=""> -->
        <img src="@/assets/insta-test/insta-test-1.gif" alt="">
        <img src="@/assets/insta-test/insta-test-2.gif" alt="">
        <img src="@/assets/insta-test/insta-test-3.gif" alt="">
        <img src="@/assets/insta-test/insta-test-4.gif" alt="">
        <img src="@/assets/insta-test/insta-test-5.gif" alt="">
        <img src="@/assets/insta-test/insta-test-6.gif" alt="">
        <img src="@/assets/insta-test/insta-test-7.gif" alt="">
        <img src="@/assets/insta-test/insta-test-8.gif" alt="">
        <img src="@/assets/insta-test/insta-test-9.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      items: [1,2,3,4,5,6,7,8,9]
    }
  }
}
</script>

<style lang="less" scoped>
  #insta {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 15vh;
    @media (min-width: 780px) {
      height: 10vh;
    }
    p {display: inline-block;
      color: pink;
      font-size: 1.5em;
      margin-right: 30px;
    }
    img {
      display: inline-block;
      width: 50px;
      margin-right: 50px;
    }
  }

  .widget {
    height: 75vh;
    width: 100%;
    .pictures {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin-left: 40px;
      margin-right: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
