<template>
  <div class="">
  <section class="from-top container">
    <div class="products">
      <MainCatalog/>
    </div>
  </section>
  <section class="container">
    <FooterFlawless/>
  </section>
  </div>
</template>

<script>
import MainCatalog from '~/layouts/catalog/MainCatalog.vue'
import FooterFlawless from '~/layouts/partials/footer-flawless.vue'

export default {
  scrollToTop: true,
  components: {
    MainCatalog,
    FooterFlawless
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
