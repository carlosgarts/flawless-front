<template>
  <div class="">
  <section class="container">
    <h1 class="amt">Acerca de Nosotros</h1>
    <img class="side-img" src="~/assets/about-me/makeup-girl.png" alt="makeup" title="makeup flawless">
    <div id="nosotros">
      <div class="about">
        <p>Desde nuestra apertura en el año 2016, hemos resaltado la importancia de nuestros <strong class="black">#flawlesslovers</strong> ofreciendo un excelente servicio que nos ha posicionado ampliamente en el mercado.</p>
        <br>
        <p>En flawless nos dedicamos a brindarte una experiencia de belleza completa en donde puedes relajarte, divertirte y salir bella de pies a cabeza.</p>
        <br>
        <p>Abarcamos servicios de maquillaje, brow bar, lash bar, nails, spa, hair bar y Beauty store con gran variedad de marcas de mediana y alta gama. También somos escuela de maquillaje con cursos desde auto maquillaje, cuidado de la piel y maquillaje profesional.</p>
      </div>
      <div class="values">
        <h3>Valores:</h3>
        <p> <strong class="nss">Belleza</strong> / <strong class="nss">Calidad</strong class="nss"> / <strong class="nss">Integridad</strong> / <strong class="nss">Pasión</strong> / <strong class="nss">Amor</strong> / <strong class="nss">Trabajo en equipo.</strong> </p>
        <h3>Visión:</h3>
        <p>Ser un lugar distinguido en donde encuentres todo lo que necesitas para ponerte bella, con productos de alta calidad y servicios excelentes.</p>
        <h3>Misión:</h3>
        <p>Darnos a conocer por nuestro servicio excelente proporcionando a nuestros clientes una experiencia inolvidable y promoviendo el crecimiento profesional de nuestro team.</p>
      </div>
    </div>
    <!-- <img class="side-img" src="~/assets/about-me/makeup-girl.png" alt="makeup" title="makeup flawless"> -->
  </section>
  <section class="container">
    <FooterFlawless/>
  </section>
  </div>
</template>

<script>
import FooterFlawless from '~/layouts/partials/footer-flawless.vue'

export default {
  components: {
    FooterFlawless
  },
  data: function(){
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    position: relative;
    flex-direction: column;
  }

  .about {
    transition: .5s;
    color: #FFA09B;
    font-family: 'ProximaNova';
    font-weight: bold;
    font-size: 14px;
    width: 100%;;
    @media (min-width: 500px) {
      font-size: 18px;
    }
  }

  #nosotros {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 45px;
    grid-row-gap: 40px;
    text-align: justify;
    margin-top: 25px;
    //margin-left: %;
    line-height: 25px;
    @media (min-width: 650px) {
      width: 70%;
      grid-template-columns: 1fr;
      align-self: flex-end;
      margin-right: 5%;
    }
    @media (min-width: 900px) {
      margin-top: 70px;
      //width: 70%;
      grid-template-columns: auto auto;
      align-self: flex-end;
      margin-right: 5%;
    }
  }

  .values {
    h3 {
      color: #777777;
    }
    p {
      margin-bottom: 5%;
      color: #777777;
    }
  }

  .side-img {
    display: block;
    position: static;
    z-index: -1;
    opacity: 1;
    max-width: 80%;
    align-self: flex-start;
    @media (min-width: 650px) {
      position: absolute;
      left: 0;
      bottom: 0;
      max-width: 25%;
    }
    @media (min-width: 900px) {
      position: absolute;
      left: 0;
      bottom: 0;
      max-width: 25%;
      opacity: 1;
    }
  }

  .girl-background{
     background: url("../assets/about-me/makeup-girl2.png") no-repeat;
     background-attachment: fixed;
     background-size: cover;
     @media (min-width: 900px) {
       background-image: none;
     }
  }

  .amt{
  font-family: 'ProximaNova';
  color: #FFA09B;
  margin: 25px;
  font-size: 50px;
  font-family: 'Salwa';
  line-height: 45px;
  font-weight: normal;
  @media (min-width: 450px) {
    line-height: 60px;
    font-size: 65px;
  }
  }

  .black {
    color: #777777;
  }

  .nss {
    font-weight: normal;
  }
</style>
