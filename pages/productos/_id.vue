<template>
  <div class="showProducts">
    <div id="usuarios" class="section-banner">
      <img class="main-logo" src="@/assets/logo.png" alt="be flawless">
    </div>
  <section class="from-top container">
    <div class="go-back">
      <div class="icon" v-on:click="$router.push('/productos')">
        <i class="material-icons">chevron_left</i>
      </div>
    </div>
    <div class="products">
      <Products/>
    </div>
  </section>
  </div>
</template>

<script>
import Products from '~/layouts/catalog/Products.vue'

export default {
  components: {
    Products
  },
  data: function(){
    return {
    }
  }
}
</script>

<style lang="less" scoped>

.showProducts {
  background-color: #f9e1df;
}

.from-top {
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}

.vdatetime-input {
  display: none;
}

.sub-section {
    @media (min-width: 1000px) {
      min-height: calc(100vh - 150px);
      grid-template-columns: 55% 45%;
    }
}

.go-back {
  transition: .5s;
  display: flex;
  position: absolute;
  background-color: white;
  color: #FFA09B;
  height: 62px;
  width: 62px;
  left: 0;
  border-bottom-right-radius: 100%;
  animation: coverAll 1s ease;
  z-index: 3000;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  @media (min-width: 650px) {
  height: 150px;
  width: 150px;
  padding-right: 15px;
  padding-bottom: 15px
  }
  @media (min-width: 1920px) {
    height: 200px;
    width: 200px;
    padding-right: 30px;
    padding-bottom: 30px;
  }

  i {
    font-size: 30px;
    @media (min-width: 650px) {
    font-size: 60px;
    }
    @media (min-width: 1920px) {
      font-size: 100px;
    }
  }
}

.icon{
  animation: appear 6s ease;
}

.products {
  width: 100%;
}

#usuarios {
  background: url(../../assets/backgrounds/ss-appointments.jpg);
  background-size: cover;
}


@keyframes coverAll {
  0% {
      width: 5000px;
      height: 5000px;
  }
  100% {
      width: 200px;
      height: 200px;
  }
}

@keyframes appear {
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
}


</style>
