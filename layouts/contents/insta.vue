<template >
  <div id="insta">
    <div class="title">
      <p>INSTAGRAM</p>
      <img src="@/assets/insta.svg">
    </div>
    <div class="widget">
      <a href="https://www.instagram.com/flawlessglamplace/" target="_blank">
      <div class="pictures">
        <!-- <img v-for="item in items" src="@/assets/insta-test/insta-test-1.gif" alt=""> -->
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/bf85190103dc6b47b0811398c46423bc/5DF58771/t51.2885-15/e35/s1080x1080/67484082_189687372032462_315674539649307732_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/72b0e0edd04de76b5f1b2bdb50f52b68/5DF628C1/t51.2885-15/e35/p1080x1080/67775065_191176545228726_3858942987290156203_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/b63cf02a894984744f9e95e8bbd2103c/5E0A171B/t51.2885-15/e35/s1080x1080/68896678_354076245477995_3052329972068685700_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/5f75bc92996dcb5a6b89b3f7e8936331/5DFA5299/t51.2885-15/e35/s1080x1080/67165654_150104909405203_1015052220182815868_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/43c58528441610cf5c87aeb6ba877ed0/5DFF73C7/t51.2885-15/e35/s1080x1080/67033442_2912544715484495_6405020356580608449_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/9b24b7621e989fe71efb6bde952df3a9/5DF34DBE/t51.2885-15/e35/s1080x1080/63723387_842246672826113_6691936065077384825_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/6d17a90e4a51f575c993f5c7f2a92b32/5E122736/t51.2885-15/e35/s1080x1080/67246919_188264472186099_1649243521531060793_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/067379363a138814c6da550f03e00737/5E055624/t51.2885-15/e35/s1080x1080/65875488_340425006846757_2534759285083453374_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
        <img src="https://scontent-lga3-1.cdninstagram.com/vp/b47e2e9a0fd02d1105b54a007509b69c/5E0C1F73/t51.2885-15/e35/s1080x1080/68710950_2337486616578882_4664808734802715454_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" alt="">
      </div>
      </a>
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
      margin-right: 10px;
      @media (min-width: 400px) {
        margin-right: 30px;
      }
    }
    img {
      display: inline-block;
      width: 50px;
      margin-right: 20px;
      @media (min-width: 400px) {
        margin-right: 50px;
      }
    }
  }

  .widget {
    height: 75vh;
    width: 100%;
    .pictures {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 5px;
      margin-left: 10px;
      margin-right: 10px;
      @media (min-width: 400px) {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin-left: 40px;
        margin-right: 40px;
      }
      a {
        height: 100%;
        width: 100%
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
