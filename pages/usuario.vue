<template>
  <div class="">
    <div id="usuarios" class="section-banner">
      <img class="main-logo" src="@/assets/logo.png" alt="be flawless">
    </div>
  <section class="container sub-section">
    <div class="updater">
      <Updater/>
    </div>
  </section>
  </div>
</template>

<script>
import Updater from '~/layouts/system/Updater.vue'

export default {
  middleware: 'auth',
  components: {
    Updater
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

#usuarios {
  background: url(../assets/backgrounds/ss-appointments.jpg);
  background-size: cover;
}

</style>
