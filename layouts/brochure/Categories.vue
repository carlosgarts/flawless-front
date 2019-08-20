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
  grid-template-columns: 33% 33% 33%;
  height: auto;
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

.selector {
  transition: 2s;
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFA09B;
  background-repeat: no-repeat;
  background-size: cover;
  //background-attachment: fixed;
  cursor: pointer;
  @media (min-width: 700px) {
    min-height: 250px;
    }
  @media (min-width: 900px) {
    min-height: 320px;
    }
  // &:hover{
  //   filter: brightness(1.2);
  //   }
}

.tibel {
  color: #FFA09B;
  font-family: 'ProximaNova';
  font-weight: bold;
  font-size: 20px;
  background-color: white;
  padding: 5px;
}

</style>
