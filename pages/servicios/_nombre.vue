<template>
  <div class="showServices">
  <section class="from-top container">
    <div class="services">
      <ServiceList/>
    </div>
  </section>
  </div>
</template>

<script>
import MainCatalog from '~/layouts/brochure/MainBrochure.vue'
import ServiceList from '~/layouts/brochure/Services.vue'

export default {
  components: {
    ServiceList
  },
  data: function(){
    return {
      isActive: false,
      path: []
    }
  },
  methods: {
    exitAnim: function () {
      setTimeout( ()=>{this.isActive = true} ,10);
      setTimeout( ()=>{this.$router.push('/servicios')} ,500);
    },
  },
  mounted: function () {
    this.isActive = false;
  }
}
</script>

<style lang="less" scoped>

.showServices {
  //background-color: #f9e1df;
}

.from-top {
  align-items: flex-start;
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
  border: none;
  cursor: pointer;

  & .active {
    animation: coverAll .5s ease;
    animation-direction: reverse;
  }

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

.services {
  width: 100%;
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

//Leave animation

.expand-enter-active {
  animation: coverAll .5s reverse;
}
.expand-leave-active {
  animation: coverAll .5s reverse;
}

</style>
