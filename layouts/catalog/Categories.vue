<template>
  <div class="catg-grid">
    <div id="unas" class="selector" v-on:click="$router.push('/productos/2')">
      <div class="tibel">UÑAS </div>
    </div>
    <div id="cabello" class="selector" v-on:click="$router.push('/productos/3')">
      <div class="tibel">CABELLO</div>
    </div>
    <div id="originales" class="selector" v-on:click="$router.push('/productos/4')">
      <div class="tibel">PRODUCTOS FLAWLESS</div>
    </div>
    <div id="rostro" class="selector" v-on:click="$router.push('/productos/5')">
      <div class="tibel">ROSTROS</div>
    </div>
    <div id="otros" class="selector" v-on:click="$router.push('/productos/6')">
      <div class="tibel">OTROS</div>
    </div>
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
  width: 90%;
  grid-template-columns: 30% auto 25%;
  grid-template-rows: 25% auto 50%;
  grid-gap: 15px;
  height: 700px;
  // border-radius: 50px;
  // overflow: hidden;
}

.selector {
  transition: 2s;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  cursor: pointer;
  &:hover{
    filter: brightness(1.12);
    }
}

.tibel {
  color: pink;
  font-family: 'ProximaNova';
  font-weight: bold;
  font-size: 20px;
  background-color: white;
  padding: 5px;
}

#unas {
  grid-row-start: 0;
  grid-row-end: 2;
}
#cabello {
  grid-row-start: 2;
  grid-row-end: 4;
  //grid-row-start: span 1;
}
#originales {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: span 2;
  //grid-column: 2 / span 2;
}
#rostro {
  grid-column-start: 2;
  grid-column-end: 3;
}
#otros {
  grid-column-start: 3;
  grid-column-end: 4;
}

</style>
