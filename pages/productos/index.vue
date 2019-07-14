<template>
  <div class="">
    <div id="usuarios" class="section-banner">
      <img class="main-logo" src="@/assets/logo.png" alt="be flawless">
    </div>
  <section class="from-top container">
    <div class="products">
      <MainCatalog/>
    </div>
  </section>
  </div>
</template>

<script>
import MainCatalog from '~/layouts/catalog/MainCatalog.vue'

export default {
  components: {
    MainCatalog
  },
  data: function(){
    return {
    }
  }
}
</script>

<style lang="less" scoped>

.from-top {
  align-items: flex-start;
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

.products {
  width: 100%;
}

#usuarios {
  background: url(../../assets/backgrounds/ss-appointments.jpg);
  background-size: cover;
}

</style>
