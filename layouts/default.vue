<template>
  <div>
    <Nav>
      <nuxt/>
    </Nav>
  </div>
</template>

<script>
  import Nav from "./partials/nav.vue"
  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="scss">

@import "@/assets/css/normalize.css";

@font-face {
    font-family: 'ProximaNova';
    src: url("../assets/fonts/ProximaNova-Regular.ttf");
    font-weight: normal;
}

@font-face {
    font-family: 'ProximaNova';
    src: url("../assets/fonts/ProximaNova-Light.ttf");
    font-weight: lighter;
}

@font-face {
    font-family: 'ProximaNova';
    src: url("../assets/fonts/ProximaNova-Bold.ttf");
    font-weight: bold;
}

@font-face {
    font-family: 'Salwa';
    src: url("../assets/fonts/Salwa-reguler.ttf");
}



html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &-grid6545 {
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 1000px) {
      min-height: 100vh;
      grid-template-columns: 55% 45%;
    }
  }
}

.section-banner {
  height: 150px;
  background-color: pink;
  display: flex;
  align-items: center;
}
.main-logo {
  width: 100px;
  position: relative;
  left: 5%;
}

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(pink, A100), // The primary color of your application
  accent: md-get-palette-color(white, A200) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme

.md-theme-default a:not(.md-button){
    color: white;
    color: white;
    color: white;
    &:hover {
      color: white;
      text-decoration: none;
    }
}
</style>
