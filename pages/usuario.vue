<template>
  <div class="">
  <section class="container sub-section">
    <div class="updater">
      <Updater/>
    </div>
  </section>
  <section class="container">
    <FooterFlawless/>
  </section>
  </div>
</template>

<script>
import Updater from '~/layouts/system/Updater.vue'
import FooterFlawless from '~/layouts/partials/footer-flawless.vue'

export default {
  middleware: 'auth',
  components: {
    Updater,
    FooterFlawless
  },
  data: function(){
    return {
    }
  }
}
</script>

<style lang="less">

.vdatetime-input {
  display: none;
}

.sub-section {
    @media (min-width: 1000px) {
      min-height: calc(100vh - 150px);
      grid-template-columns: 55% 45%;
    }
}

.updater {
  width: 100%;
}


</style>
