<template>
  <div class="slider">
    <div class="gradient"></div>
    <!-- <img ref="slide1" class="slide" src="@/assets/slides/slide1.png" alt="makeup"/>
    <img ref="slide2" class="slide" src="@/assets/slides/slide2.png" alt="makeup"/> -->
    <!-- Swipper -->


    <div class="video">
      <video autoplay muted loop class="slide">
        <source src="../../assets/backgrounds/video_optimizado.mp4" type="video/mp4">
      </video>
    </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
          }
</script>

<style lang="less" scoped>
.slider {
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -3;
  left: 0px;
  top: 0px;
  overflow: hidden;
}

.slide {
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -2;
    object-fit: cover;
}

.slide-image {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  z-index: -2;
}

.swiper-wrapper {
  height: 100%;
  width: 100%;
  z-index: -2;
}

.gradient {
height: 100vh;
width: 100%;
position: absolute;
left: 0px;
top: 0px;
z-index: 3;
//background: linear-gradient(104.98deg, rgba(233, 105, 117, 0.6) 20.58%, rgba(196, 196, 196, 0.35) 100%);
background: linear-gradient(104.98deg, rgba(254, 81, 97, 0.65) 20.58%, rgba(229, 229, 229, 0.11) 100%);
}
</style>
