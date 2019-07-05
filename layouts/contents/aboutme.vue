<template >
  <div id="aboutMe">
    <div class="profile-picture">
        <img src="@/assets/about-me/profile.jpg" alt="Picture of Lily the CEO">
    </div>
    <div class="profile-content">
      <div>
        <h1 class="title">¡Hola! soy Lily! <span></span> CEO</h1>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl
          ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et
          accumsan et iusto odio dignissim qui blandit praesent luptatum
          zzril delenit augue duis dolore te feugait nulla facilisi.
          <br>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation ullamcor
        </p>
        <p class="more">VER MAS</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
#aboutMe {
  font-family: 'ProximaNova';
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  @media (min-width: 780px) {
  grid-template-columns: 55% 45%;
  }
}

.profile {
  &-picture {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border: solid pink 4px;
      box-shadow: 5px 5px 5px gray;
      margin: 20px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
      @media (min-width: 780px) {
        border: solid pink 15px;
        -webkit-border-image: url(../../assets/backgrounds/gold.jpg) 30 round; /* Safari 3.1-5 */
        -o-border-image: url(../../assets/backgrounds/gold.jpg) 30 round; /* Opera 11-12.1 */
        border-image: url(../../assets/backgrounds/gold.jpg) 30 round;
        border-radius: 0;
        width: 70%;
        height: 70%;
        margin: 40px;
      }
    }
  }
  &-content {
    display: flex;
    height: 100%;
    //width: 100%;
    align-items: center;
    align-content: center;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 2.1vh;
    @media (min-width: 480px) {

    }
    @media (min-width: 768px) {
      margin: 30px;
    }
    @media (min-width: 1000px) {
      margin: 10px;
    }
    @media (min-width: 1280px) {
      margin-left: 10px;
      margin-right: 60px;
    }
    .title {
      font-family: 'ProximaNova';
      font-weight: lighter;
      text-align: center;
      //text-shadow: 1px 1px 1px gray;
      margin-bottom: 30px;
      span {
        height: 20px;
        border-left: solid black 2px;
        font-size: larger;
        margin-right: 5px;
        //box-shadow: 1px 1px 2px gray;
      }
    }
    .text{
      font-size: 0.9em;
      text-align: justify;
      color: gray;
      line-height: 21px;
    }
    .more{
      margin: 20px;
      text-align: center;
      color: pink;
      font-size: 1.5em;
      cursor: pointer;
    }
  }
}
</style>
