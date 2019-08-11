<template>
  <div class="catalog">
    <div class="pt">
      Nuestro Menu
    </div>
    <p class="sub-pt">CONOCE NUESTROS SERVICIOS <br> ESPECIALMENTE PENSADOS PARA TÍ</p>
    <Categories/>
    <img src="@/assets/backgrounds/goldlinesAsset.svg" alt="Sign">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Categories from '~/layouts/brochure/Categories.vue'

export default {
  components: {
    Categories
    },
  data: function (){
    return {
      //name: this.$route.params.nombre;
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {

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
font-size: 65px;
height: 50px;
font-family: 'Salwa';
line-height: 70px;
height: 150px;
@media (min-width: 520px) {
  height: 80px;
  }
}

.sub-pt {
  color: #FFA09B;
  font-family: 'ProximaNova';
  font-weight: bold;
}
</style>
