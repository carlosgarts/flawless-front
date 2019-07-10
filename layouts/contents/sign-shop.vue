<template>
  <div class="sign-grid">
    <div class="sign">
      <img src="@/assets/promotions/01.jpg" alt="Shop">
      <div class="text">NUESTROS PRODUCTOS</div>
    </div>
    <div class="sign">
      <img src="@/assets/promotions/02.jpg" alt="Sign">
      <div class="text">REGISTRATE Y LLEVA UN REGALO</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.sign-grid {
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
}

.sign {
  width: 100%;
  height: 350px;
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  img {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
}
.text {
  position: relative;
  top: 35px;
  left: 35px;
  display: flex;
  color: pink;
  background-color: white;
  width: auto;
  max-width: 500px;
  font-weight: 400;
  font-size: 1.3em;
  padding: 4px;
  padding-left: 20px;
  padding-right: 20px;
  max-height: 32px;
  line-height: 1.15;
  @media (min-width: 780px) {
    font-size: 2em;
    max-height: 45px;
  }
}
</style>
