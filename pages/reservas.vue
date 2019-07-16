<template>
  <div class="">
  <section class="container sub-section">
    <div class="reservations">
      <Appointments/>
    </div>
  </section>
  </div>
</template>

<script>
import Appointments from '~/layouts/system/Appointments.vue'

export default {
  middleware: 'auth',
  components: {
    Appointments
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
