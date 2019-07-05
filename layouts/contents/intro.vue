<template>
    <div>
      <img class="main-logo" src="@/assets/logo.png" alt="be flawless">
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button gold"
        >RESERVAS</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button"
        >NOSOTROS</a>
      </div>
    </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="less" scoped>

.main-logo {
  width: 80%;
  height: auto;
  @media (min-width: 460px) {
  height: 70vh;
  width: auto;
  }
}

.links {
  padding-top: 15px;
}

.button {
  transition: .5s;
  display: inline-block;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  @media (min-width: 425px) {
  margin-left: 50px;
  }
}

.gold {
  color: #fdffb2;
  border: 2px solid #fdffb2;
}

.button:hover {
  background-color: rgba(255,255,255, 0.4);
}
</style>
