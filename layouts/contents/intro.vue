<template>
    <div>
      <img class="main-logo" src="@/assets/main-logo.png" alt="be flawless">
      <div class="links">
        <!-- <span v-on:click="verify()"><nuxt-link to="/reservas" class="button gold">CITAS</nuxt-link></span> -->
        <nuxt-link to="/servicios" class="button gold">SERVICIOS</nuxt-link>
        <nuxt-link to="/nosotros" class="button silver">NOSOTROS</nuxt-link>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    verify: function() {
      if (!this.isAuthenticated) {
        this.$toast.success('Debe iniciar sesión primero');
      }
    }
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
  padding: 10px 10px;
  width: 120px;
  //margin-left: 15px;
  @media (min-width: 425px) {
  padding: 10px 30px;
  width: 140px;
  }
}

.silver {
  margin-top: 25px;
  @media (min-width: 425px) {
  margin-top: 0px;
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
