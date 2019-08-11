<template >
  <footer id="footer">
    <img src="@/assets/color-logo.png" alt="">
    <div class="find-us">
      <h3>CONTACTANOS</h3>
      <div class="socials">
        <div class="ent">
          <img src="@/assets/brands/instagram.png" alt="instagram">
          <h5>INSTAGRAM</h5>
          <h4 class="contact-info">FLAWLESS</h4>
        </div>
        <div class="ent">
          <img src="@/assets/brands/whatsapp.png" alt="instagram">
          <h4 class="contact-info">+1 (829) 641 3355</h4>
        </div>
        <div class="ent">
          <img src="@/assets/brands/email.png" alt="instagram">
          <h4 class="contact-info">infoflawless@gmail.com</h4>
        </div>
        <div class="ent">
          <img src="@/assets/brands/instagram.png" alt="instagram">
          <h5>INSTAGRAM</h5>
          <h4 class="contact-info">LILY</h4>
        </div>
      </div>
    </div>
    <p class="about">
      Maquillaje en República Dominicana, salon de belleza, Productos de belleza
      y cuidado del rostro, cosmeticos, makeup, belleza, cuidado personal
      Servicios de peluqueria para damas y caballeros. Manicura, pedicura y depilacion para damas.
    </p>
    <!-- <div>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
      suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
      eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
      vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
      iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi.
    </div> -->
    <p>
      Flawless, C.A. 2010 All rights Reserved Registro No. 8896551121
    </p>
    <a href="http://www.script-angels.com/">
      Web Development by Carlos Gamez
    </a>
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
      width: 150px;
    }
    p {
      font-size: 0.9em;
      margin-top: 15px;
      max-width: 250px;
      color: gray;
      margin-bottom: 15px;
      @media (min-width: 600px) {
        margin-top: 5vh;
      }
    }
    .about {
      margin: 20px;
      //margin-top: 5vh;
      max-width: 500px;
      color: darkgray;
      line-height: 22px;
    }

    a {
      color: #b7b7b7;
    }

    .socials {
      display: flex;
      justify-content: space-between;
    }

    .ent {
      img {
        width: 75px;
      }
    }
  }

  h3 {
    font-weight: lighter;
    //margin-bottom: 50px;
  }

  h4 {
    color: darkgray;
    font-weight: lighter;
    font-size: 14px;
  }

  h5 {
    color: black;
    font-size: 12px;
  }

  .find-us {
    margin-top: 50px;
  }
</style>
