<template>
  <div class="">
  <section class="container sub-section">
    <div class="reservations">
      <Appointments/>
    </div>
  </section>
  <section class="container">
    <FooterFlawless/>
  </section>
  </div>
</template>

<script>
import Appointments from '~/layouts/system/Appointments.vue'
import FooterFlawless from '~/layouts/partials/footer-flawless.vue'

export default {
  middleware: 'auth',
  components: {
    Appointments,
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

.reservations {
  width: 100%;
}

</style>
