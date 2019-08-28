<template>
  <div class="catg-grid">
    <nuxt-link id="unas" class="selector" to="/productos/2">
      <div class="tibel">UÑAS </div>
    </nuxt-link>
    <nuxt-link id="cabello" class="selector" to="/productos/3">
      <div class="tibel">CABELLO</div>
    </nuxt-link>
    <nuxt-link id="originales" class="selector" to="/productos/4">
      <div class="tibel">PRODUCTOS FLAWLESS</div>
    </nuxt-link>
    <nuxt-link id="rostro" class="selector" to="/productos/5">
      <div class="tibel">ROSTROS</div>
    </nuxt-link>
    <nuxt-link id="otros" class="selector" to="/productos/6">
      <div class="tibel">OTROS</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.catg-grid {
  margin-top: 25px;
  margin-bottom: 25px;
  display: grid;
  width: 95%;
  grid-template-columns: 48% 48%;
  grid-template-rows: 200px 250px 200px ;
  grid-gap: 8px;
  height: auto;
  // border-radius: 50px;
  // overflow: hidden;
  @media (min-width: 800px) {
    grid-gap: 15px;
    width: 90%;
    grid-template-columns: 30% auto 25%;
    grid-template-rows: 25% auto 50%;
    height: 700px;
  }
}

.selector {
  transition: 2s;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFA09B;
  cursor: pointer;
  -webkit-filter: invert(10%) grayscale(70%) brightness(120%) sepia(5%) hue-rotate(-10deg) saturate(600%);
  filter: invert(10%) grayscale(70%) sepia(10%) brightness(120%)  hue-rotate(-10deg) saturate(500%);
  &:hover{
    filter: none;
    }
}

.tibel {
  color: #FFA09B;
  font-family: 'ProximaNova';
  font-weight: bold;
  font-size: 13px;
  background-color: white;
  padding: 5px;
  margin: 5px;
  @media (min-width: 650px) {
    font-size: 15px;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  }
}

#unas {
  background-image: url('../../assets/products/unas.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 800px) {
    grid-row-start: 0;
    grid-row-end: 2;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
#cabello {
  background-image: url('../../assets/products/cabello.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 800px) {
    grid-row-start: 2;
    grid-row-end: 4;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
#originales {
    background-image: url('../../assets/products/originales.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    grid-column-start: span 2;
    background-position: center;
    @media (min-width: 800px) {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: span 2;
      background-repeat: no-repeat;
      background-size: cover;
    }
}
#rostro {
  background-image: url('../../assets/products/rostro.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 800px) {
    grid-column-start: 2;
    grid-column-end: 3;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
#otros {
  background-image: url('../../assets/products/otros.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 800px) {
    grid-column-start: 3;
    grid-column-end: 4;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
