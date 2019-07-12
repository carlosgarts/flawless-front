<template>
  <div class="catalog">
    <div class="pt">
      Bienvenida
    </div>
    <p class="sub-pt">AL CATALOGO DE PRODUCTOS <br> DISPONIBLES EN NUESTRA TIENDA</p>
    <img src="@/assets/backgrounds/goldlinesAsset.svg" alt="Sign">
    <p class="sub-pt">MARCAS ALIADAS</p>
    <div class="marcas">
      <img id="maybelline" src="@/assets/brands/maybelline.png" alt="Maybelline">
      <img id="milkshake" src="@/assets/brands/milk_shake.png" alt="Milk_Shake">
      <img id="huda" src="@/assets/brands/huda-beauty.png" alt="Huda Beaity">
      <img id="opi" src="@/assets/brands/OPI.png" alt="O.P.I">
      <img id="loreal" src="@/assets/brands/loreal.png" alt="Loreal Paris">
      <img id="mario" src="@/assets/brands/mario-badescu.png" alt="Mario Badescu">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function (){
    return {

    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {

  },
  mounted: async function(){

  }
}
</script>

<style lang="less" scoped>

.error {
  color: #FF9494;
}

.catalog {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pt{
font-weight: bold;
color: pink;
margin: 10px;
margin-top: 70px;
font-size: 65px;
height: 50px;
font-family: 'Salwa';
}

.sub-pt {
  color: pink;
  font-family: 'ProximaNova';
  font-weight: bold;
}

.marcas {
  transition: .2s;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 600px) {
    margin-top: 75px;
    height: 100px;
  }
  @media (min-width: 800px) {
    margin-top: 75px;
    height: 150px;
  }
}

#maybelline {
  align-self: flex-end;
  width: 150px;
}
#milkshake {
  align-self: flex-start;
  width: 150px;
}
#huda {
  align-self: flex-end;
  width: 150px;
}
#opi {
  align-self: flex-start;
  width: 150px;
}
#loreal {
  align-self: flex-end;
  width: 150px;
}
#mario {
  align-self: flex-start;
  width: 150px;
}

</style>
