<template>
  <div class="">
  <section class="container">
    <Slider/>
    <Intro/>
  </section>
  <HashStrip/>
  <SignShop/>
  <section class="container-grid6545">
    <AboutMe/>
    <Insta/>
  </section>
  <section class="container">
    <MapFlawless/>
  </section>
  <section class="container">
    <FooterFlawless/>
  </section>
  </div>
</template>

<script>
import Intro from '~/layouts/contents/intro.vue'
import Slider from '~/layouts/partials/slider.vue'
import HashStrip from '~/layouts/partials/hash-strip.vue'
import SignShop from '~/layouts/contents/sign-shop.vue'
import AboutMe from '~/layouts/contents/aboutme.vue'
import Insta from '~/layouts/contents/insta.vue'
import MapFlawless from '~/layouts/contents/map-flawless.vue'
import FooterFlawless from '~/layouts/partials/footer-flawless.vue'

export default {
  components: {
    Intro,
    Slider,
    HashStrip,
    SignShop,
    AboutMe,
    Insta,
    MapFlawless,
    FooterFlawless
  }
}
</script>

<style lang="less">

</style>
