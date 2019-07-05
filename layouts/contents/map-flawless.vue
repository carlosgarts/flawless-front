<template>
  <div id="map">
      <h2 class="title">COMO ENCONTRARNOS</h2>
      <p class="sub title">Av. Roberto Pastoriza no. 202 Naco Flawless Makeup Studio</p>
      <div class="map">

      </div>
      <a href="#">Ir a Google Maps</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  #map {
    height: 100vh;
    width: 100%;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    h2 {
      margin-bottom: 4vh;
    }
    p {
      margin-bottom: 4vh;
    }
    a {
      font-size: 1.2em;
      transition: 0.5s;
      color: gray;
      text-decoration: none;
      background-color: white;
      padding: 8px;
      padding-left: 60px;
      padding-right: 60px;
      margin-top: 4vh;
      &:hover {
        color: white;
        background-color: darkgray;
      }
    }
    a:visited {
      color: gray;
    }
  }

  .map-widget {
    width: 70%;
  }

  .map {
    overflow: hidden;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-image: url('../../assets/mobile-map.jpg');
    background-size: cover;
    @media (min-width: 600px) {
      width: 350px;
      height: 350px;
    }
    @media (min-width: 768px) {
      width: 60%;
      height: 50vh;
      border-radius: 25px;
      background-image: url('../../assets/map.jpg');
    }
  }
</style>
