<template >
  <footer>
    <img src="@/assets/color-logo.png" alt="">
    <div>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
      suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
      eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
      vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
      iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi.
    </div>
    <p>
      Flawless, C.A. 2010 All rights Reserved Registro No. 8896551121
    </p>
  </footer>
</template>

<style lang="less" scoped>
  footer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 2.1vh;
    img {
      width: 300px;
    }
    div {
      margin: 20px;
      margin-top: 5vh;
      max-width: 500px;
      color: darkgray;
      line-height: 22px;
    }
    p {
      font-size: 0.9em;
      margin-top: 15px;
      width: 250px;
      color: gray;
      margin-bottom: 15px;
      @media (min-width: 600px) {
        margin-top: 10vh;
      }
    }
  }
</style>
