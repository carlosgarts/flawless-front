<template>
  <div class="catalog">
    <div class="pt">
      Bienvenida
    </div>
    <p class="sub-pt">AL CATALOGO DE PRODUCTOS <br> DISPONIBLES EN NUESTRA TIENDA</p>
    <Categories/>
    <Offers/>
    <img src="@/assets/backgrounds/goldlinesAsset.svg" alt="Sign">
    <!-- <p class="sub-pt">MARCAS ALIADAS</p> -->
    <!-- <div class="marcas">
      <img id="maybelline" src="@/assets/brands/maybelline.png" alt="Maybelline">
      <img id="milkshake" src="@/assets/brands/milk_shake.png" alt="Milk_Shake">
      <img id="huda" src="@/assets/brands/huda-beauty.png" alt="Huda Beaity">
      <img id="opi" src="@/assets/brands/OPI.png" alt="O.P.I">
      <img id="loreal" src="@/assets/brands/loreal.png" alt="Loreal Paris">
      <img id="mario" src="@/assets/brands/mario-badescu.png" alt="Mario Badescu">
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Categories from '~/layouts/catalog/Categories.vue'
import Offers from '~/layouts/catalog/Offers.vue'

export default {
  components: {
      Categories,
      Offers
    },
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
color: #FFA09B;
margin: 10px;
margin-top: 70px;
font-size: 40px;
height: 50px;
font-family: 'Salwa';
font-weight: normal;
@media (min-width: 450px) {
  font-size: 65px;
}
}

.sub-pt {
  color: #FFA09B;
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
