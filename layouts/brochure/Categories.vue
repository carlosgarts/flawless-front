<template>
  <div class="catg-grid">
    <nuxt-link v-for="servicio in servicios" class="selector" :style="{ backgroundImage: `url(${servicio.image})` }" :to="{name: 'servicios-nombre', params:{ nombre: servicio.name.split(' ').join('-') }, query:{id: servicio.id} }">
      <div class="tibel">{{servicio.name.toUpperCase()}} </div>
    </nuxt-link>
  </div>
</template>

<script>
import Services from '~/assets/info/services.json'
export default {
  data: function (){
    return {
      servicios: []
    }
  },
  created: function(){
    this.servicios = Services.grupos;
  }
}
</script>

<style lang="less" scoped>

.catg-grid {
  margin-top: 25px;
  margin-bottom: 25px;
  display: grid;
  width: 90%;
  height: auto;
  grid-gap: 5px;
  grid-template-columns: 50% 50%;
  @media (max-width: 900px) {
  :nth-child(3) {
    grid-row: 2 / span 2;
  }
  :nth-child(8) {
    grid-column: 1 / span 2;
  }
  :nth-child(11) {
    grid-row: 7 / span 2;
  }
  :nth-child(14) {
    grid-column: 1 / span 2;
  }
  }
  @media (min-width: 900px) {
    grid-template-columns: 33% 33% 33%;
    grid-gap: 15px;
    // border-radius: 50px;
    // overflow: hidden;
    :nth-child(2) {
      grid-row: 1 / span 2;
      grid-column: 2 / span 2;
    }
    :nth-child(6) {
      grid-row: 3 / span 2;
      grid-column: 3;
    }
    :nth-child(10) {
      grid-row: 5 / span 2;
      grid-column: 1 / span 2;
    }
  }
}

.selector {
  transition: 1s;
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFA09B;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  //background-attachment: fixed;
  -webkit-filter: invert(10%) grayscale(70%) brightness(120%) sepia(5%) hue-rotate(-10deg) saturate(600%) contrast(120%);
  filter: invert(10%) grayscale(70%) sepia(5%) brightness(120%)  hue-rotate(-10deg) saturate(600%) contrast(120%);
  // filter: invert(10%) grayscale(65%) sepia(5%) hue-rotate(-10deg) saturate(600%);
  // -webkit-filter: invert(40%) grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(400%) contrast(2);
  // filter: grayscale(100%) brightness(140%) sepia(100%) hue-rotate(-50deg) saturate(500%) contrast(0.8);
  cursor: pointer;
  @media (min-width: 700px) {
    min-height: 250px;
    }
  @media (min-width: 900px) {
    min-height: 320px;
    }
  &:hover{
    filter: none;
    }
}

.tibel {
  color: #FFA09B;
  font-family: 'ProximaNova';
  font-weight: bold;
  font-size: 13px;
  background-color: white;
  padding: 5px;
  margin: 5px;
  @media (min-width: 650px) {
    font-size: 15px;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  }
}

</style>
