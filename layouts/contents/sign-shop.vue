<template>
  <div class="sign-grid">
    <div class="sign" v-on:click="openProducts">
      <img src="@/assets/promotions/01.jpg" alt="Shop">
      <div class="text">NUESTROS PRODUCTOS</div>
    </div>
    <div class="sign" v-on:click="openAppointments" v-if="isAuthenticated">
      <img src="@/assets/promotions/02.jpg" alt="Sign">
      <div class="text">RESERVA TU CITA</div>
    </div>
    <div class="sign" v-on:click="openRegister" v-else>
      <img src="@/assets/promotions/02.jpg" alt="Sign">
      <div class="text">REGISTRATE Y LLEVA UN REGALO</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
  ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    openRegister: function () {
      if (this.isAuthenticated == false) {
        this.$bus.$emit('register-please');
      }
    },
    openAppointments: function () {
      this.$router.push('/reservas')
    },
    openProducts: function () {
      this.$router.push('/productos')
    },
  }
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
  transition: .5s;
  width: 100%;
  height: 200px;
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
  &:hover{
    -webkit-animation: filter-animation 15s infinite;
    animation: filter-animation 15s infinite;
    }
  @media (min-width: 650px) {
      height: 350px;
    }
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
  position: absolute;
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
  line-height: 1.15;
  @media (min-width: 780px) {
    font-size: 2em;
    max-height: 45px;
  }
}

@-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: hue-rotate(0deg);
  }

  50% {
    -webkit-filter: hue-rotate(360deg);
  }

  100% {
    -webkit-filter: hue-rotate(0deg);
  }
}

@keyframes filter-animation {
  0% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(360deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
}
</style>
