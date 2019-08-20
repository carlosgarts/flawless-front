<template>
  <div class="app-screen">
    <header>
      <a class="target-burger" v-bind:class="{toggled}" v-on:click="toggled = !toggled">
        <ul class="buns">
          <li class="bun"></li>
          <li class="bun"></li>
        </ul>
      </a>
    </header>
    <!--movile-nav-->
    <nav class="movile-nav" v-bind:class="{toggled}" role="navigation">
      <ul>
        <li v-if="isAuthenticated"><span @click="toggled = !toggled"><nuxt-link to="/usuario">{{ loggedInUser.first_name.toUpperCase() }}</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/">PRINCIPAL</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/nosotros">NOSOTROS</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/productos">PRODUCTOS</nuxt-link></span></li>
        <li v-if="isAuthenticated"><span @click="toggled = !toggled"><nuxt-link to="/reservas">RESERVAS</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/servicios">SERVICIOS</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><a href="#" v-scroll-to="'#footer'">CONTACTO</a></span></li>
        <li>
          <span @click="toggled = !toggled">
            <a @click="logout" v-if="isAuthenticated" >LOGOUT</a>
            <a @click="modalShow = !modalShow" v-else>LOGIN</a>
          </span>
        </li>
      </ul>
    </nav>
    <!--desktop-nav-->
    <nav class="desktop-nav" v-bind:class="{toggled}" role="navigation">
      <div class="nav-strip">
        <div v-if="isAuthenticated"><nuxt-link to="/usuario">{{ loggedInUser.first_name.toUpperCase() }}</nuxt-link></div>
        <div><nuxt-link to="/">PRINCIPAL</nuxt-link></div>
        <div><nuxt-link to="/nosotros">NOSOTROS</nuxt-link></div>
        <div><nuxt-link to="/productos">PRODUCTOS</nuxt-link></div>
        <div v-if="isAuthenticated"><nuxt-link to="/reservas">RESERVAS</nuxt-link></div>
        <div><nuxt-link to="/servicios">SERVICIOS</nuxt-link></div>
        <div><a href="#" v-scroll-to="'#footer'">CONTACTO</a></div>
        <div>
          <a @click="logout" v-if="isAuthenticated" >LOGOUT</a>
          <a @click="modalShow = !modalShow" v-else>LOGIN</a>
        </div>
      </div>
    </nav>
    <transition name="fade">
    <div class="modal" v-if="modalShow">
      <div @click="modalShow = false" class="background"></div>
      <div class="palms">
        <img id="palm1" class="foreground" src="@/assets/backgrounds/login_fore_1.png" alt="palms">
        <img id="palm2" class="foreground" src="@/assets/backgrounds/login_fore_2.png" alt="palms">
        <button class="close" type="button" name="button" @click="modalShow = false"><i class="material-icons">clear</i></button>
        <div class="user">
          <div class="tabs">
            <button v-bind:class="{ active: modalMode === 'login' }" type="button" name="button" @click="modalMode= 'login'">Iniciar</button>
            <button v-bind:class="{ active: modalMode === 'signin' }" type="button" name="button" @click="modalMode = 'signin'">Registrar</button>
            <button v-bind:class="{ active: modalMode === 'forgot' }" type="button" name="button" @click="modalMode = 'forgot'">Recuperar</button>
          </div>
            <form class="login form" method="get" @submit.prevent="loginUser" v-if="modalMode === 'login'">
              <md-field>
                <label>E-mail</label>
                <md-input v-model="login.email"></md-input>
              </md-field>
              <md-field>
                <label>Contraseña</label>
                <md-input v-model="login.password" type="password"></md-input>
              </md-field>
              <div class="error">
                {{login.error}}
              </div>
              <button type="submit" name="submit">OK</button>
              <!-- <p>¿Olvidaste tu contraseña? <a @click="modalMode = 'forgot'">presiona aqui</a></p> -->
            </form>
            <form class="signin form" method="post"  @submit.prevent="registerUser" v-if="modalMode === 'signin'">
              <md-field>
                <label>E-mail</label>
                <md-input v-model="register.email"></md-input>
              </md-field>
              <md-field>
                <label>Nombre</label>
                <md-input v-model="register.first_name"></md-input>
              </md-field>
              <md-field>
                <label>Apellido</label>
                <md-input v-model="register.last_name"></md-input>
              </md-field>
              <md-field>
                <label>Teléfono</label>
                <md-input v-model="register.phone"></md-input>
              </md-field>
              <md-field>
                <label>Contraseña</label>
                <md-input v-model="register.password" type="password"></md-input>
              </md-field>
              <div class="error">
                {{register.error}}
              </div>
              <button type="submit" name="submit">REGISTRARSE</button>
              <!-- <p>¿Olvidaste tu contraseña? <a @click="modalMode = 'forgot'">presiona aqui</a></p> -->
            </form>
            <form class="forgot form" method="post" @submit.prevent="recoverPassword" v-if="modalMode === 'forgot'">
              <md-field>
                <label>E-mail</label>
                <md-input v-model="recover.email"></md-input>
                <span class="md-helper-text">Se te enviara un correo para que puedas recuperar tu clave.</span>
              </md-field>
              <div class="error">
                {{recover.error}}
              </div>
              <button type="submit" class="forget" name="submit">ENVIAR</button>
            </form>
        </div>
      </div>
    </div>
    </transition>
<div class="filter"  v-bind:class="{toggled}">
  <slot>
      <!--app-content-->
  </slot>
</div>
</div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data: function (){
    return {
      toggled: false,
      modalShow: false,
      modalMode: 'login',
      login: {
        email: '',
        password: '',
        error: null
      },
      register: {
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        error: null
      },
      recover: {
        email: '',
        error: null
      },
      error: null
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async registerUser() {
      if (this.checkForm()) {
          try {
            var response = await this.$axios.post('http://store.flawlessrd.com/public/api/customer/register', {
                email: this.register.email,
                first_name: this.register.first_name,
                last_name: this.register.last_name,
                phone: this.register.phone,
                password: this.register.password,
                password_confirmation: this.register.password
            })

            if (response.data.message == "Your account has been created successfully.") {
              this.$toast.show('Registro Exitoso...');
              await this.$auth.loginWith('local', {
                data: {
                  email: this.register.email,
                  password: this.register.password,
                  token: 'true'
                }
              });
              this.modalShow = false
              this.$toast.success('Benvenid@ a Flawless online');
              this.$router.push('/')
            } else {
              this.register.error = "Este correo pertenece a otro usuario";
            }
          } catch (e) {
            this.register.error = e.response.data.message
            }
      }
    },

    async loginUser() {
      try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.login.email,
              password: this.login.password,
              token: 'true'
            }
          });
      } catch (e) {
         this.login.error = e.response.data.message
       }
       if (this.isAuthenticated == false) {
         this.login.error = 'Usuario o contraseña equivocados';
       }
       else if (this.isAuthenticated == true) {
         this.login.error = '';
         this.login.email = '';
         this.login.password = '';
         this.modalShow = false;
         this.$toast.success('Benvenid@ de vuelta');
         this.$router.push('/');
       }
    },

    async recoverPassword() {
    try {
      response = await this.$axios.post('http://store.flawlessrd.com/public/api/customer/forgot-password', {
          email: this.recover.email
      })
    }
     catch (e) {
      this.register.error = e.response.data.message
    }
    if (response.data.message == "We have e-mailed your password reset link!") {
      this.$toast.success('Correo enviado');
      this.modalShow = false;
    }
  },

    async logout() {
      this.$toast.info('Sesión cerrada');
      await this.$auth.logout();
    },

    checkForm: function () {
      this.register.error = '';

      if (!this.register.email) {
        this.register.error = 'Correo requerido.';
        return false;
      } else if (!this.validEmail(this.register.email)) {
        this.register.error = 'Correo invalido.';
        return false;
      }

      if (!this.register.first_name) {
        this.register.error = 'Nombre Requerido';
        return false;
      }

      if (!this.register.last_name) {
        this.register.error = 'Apellido Requerido';
        return false;
      }

      if (!this.register.phone) {
        this.register.error = 'Es importante que ingrese su telefono';
        return false;
      }
      else if (!this.validPhone(this.register.phone)) {
        this.register.error = 'Telefono invalido.';
        return false;
      }

      if (!this.register.password) {
        this.register.error = 'Contraseña Requerida';
        return false;
      }

      if (this.register.error === '') {
        return true;
      }
    },

    validPhone: function (phone) {
      var re = /1?-?\.?\(?\d{3}[\-\)\.\s]?\d{3}[\-\.\s]?\d{4}$/;
      return re.test(phone);
    },

    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },

  created: function () {
    this.$bus.$on('register-please', data => {
            this.modalMode = 'signin';
            this.modalShow = true;
        });
      }
}
</script>

<style lang="less" scoped>

.error {
  color: #FF9494;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* #Typography Variables
================================================== */
/* #Colour Variables
================================================== */

a{
	text-decoration: none;
}
h1{
	font-size: 2.350em;
	line-height: 1.25;
	font-weight: 300;
}
.movile-nav {
  font-family: 'Roboto', sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.70);
}

.desktop-nav {
  position: fixed;
  display: none;
  font-family: 'ProximaNova', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  z-index: 15;
  @media (min-width: 900px) {
  display: flex;
  justify-content: center;
  }
  .nav-strip {
    display: flex;
    height: 75px;
    width: 100%;
    max-width: 1000px;
    margin-left: 30px;
    margin-right: 30px;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: white;
    transition: 0.5s;
    &:hover{
        .opacity(0.45);
    }
  }

}
/* =============================================================================
   Layout
   ========================================================================== */

.filter{
    .transition(0.5s);
    &.toggled{
        -webkit-filter: blur(8px);
        -moz-filter: blur(8px);
        -o-filter: blur(8px);
        -ms-filter: blur(8px);
        filter: blur(8px);
        .transition(0.5s);
    }
}

.filter.toggled {
      filter: blur(5px);
        -webkit-filter: blur(5px);
}

div.app-screen{
  width: 100%;
    nav.movile-nav{
        transition: (0.5s);
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        height: 100%;
        width: 100%;
        padding: 2em;
        .opacity(0);
        -webkit-transform: scale(0.85);
        -ms-transform: scale(0.85);
        transform: scale(0.85);
        .transition(0.5s);
        &.toggled{
            position: fixed;
            display: block;
            z-index: 10;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
            .opacity(1);
            .transition(0.5s);
            @media (min-width: 900px) {
              display: none;
            }
        }
        ul{
            list-style-type: none;
            padding: 2em 0 0 0;
            max-width: 1194px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 5%;
            margin-top: auto;
            margin-bottom: auto;
            li{
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                text-align: center;
                a{
                    font-size: 1.250em;
                    color: #fff;
                    padding: 1em 0;
                    font-weight: 300;
                    display: block;
                    .transition(0.5s);
                    &:last-child{
                        border: none;
                    }
                    &:hover{
                        .opacity(0.45);
                        .transition(0.5s);
                        padding: 1em;
                    }
                }
            }
        }
    }
    header{
        position: fixed;
        top: 0;
        z-index: 15;
        right: 88px;
        a.target-burger{
          @media (min-width: 900px) {
            display: none;
          }
            margin: 1.125em;
            width: 3.250em;
            height: 3.250em;
            position: absolute;
            display: block;
            .transition(0.5s);
            &:hover{
                cursor: pointer;
                .opacity(0.45);
            }
            &.toggled{
                ul.buns{
                    li.bun{
                        -webkit-transform: rotate(45deg) translateZ(0);
                        transform: rotate(45deg) translateZ(0);
                        &:last-child{
                            -webkit-transform: rotate(-45deg) translateZ(0);
                            transform: rotate(-45deg) translateZ(0);
                        }
                    }
                }
            }
            ul.buns{
                width: 1.625em;
                height: 1.625em;
                list-style: none;
                margin: -1.625em/2 0 0 -1.625em/2;
                padding: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transition: -webkit-transform 1s cubic-bezier(.23,1,.32,1),color 1s cubic-bezier(.23,1,.32,1);
                transition: transform 1s cubic-bezier(.23,1,.32,1),color 1s cubic-bezier(.23,1,.32,1);
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                color: #fff;
                li.bun{
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                    top: 50%;
                    margin-top: -.75px;
                    -webkit-transform: translateY(-3.75px) translateZ(0);
                    transform: translateY(-3.75px) translateZ(0);
                    -webkit-transition: -webkit-transform 1s cubic-bezier(.23,1,.32,1),background-color 1s cubic-bezier(.23,1,.32,1);
                    transition: transform 1s cubic-bezier(.23,1,.32,1),background-color 1s cubic-bezier(.23,1,.32,1);
                    &:last-child{
                        -webkit-transform: translateY(3.75px) translateZ(0);
                        transform: translateY(3.75px) translateZ(0);
                    }
                }
            }
        }
    }
}

/* =============================================================================
   Modal
   ========================================================================== */
   .modal {
     position: fixed;
     height: 100vh;
     width: 100%;
     z-index: 98;
     display: flex;
     align-items: center;
     justify-content: center;
   }
   .background {
     position: fixed;
     height: 100vh;
     width: 100%;
     z-index: 99;
     background-color: black;
     opacity: 0.3;
   }
   .palms {
     position: relative;
      z-index: 100;
      border-radius: 30px;
      background-color: pink;
      padding: 40px;
      background-image: url("../../assets/backgrounds/login_back.png");
      background-size: cover;
      overflow: hidden;
      #palm2 {
        top: 0;
        right: 0;
      }
      #palm1{
        bottom: 0;
        left: 0;
      }
      .foreground {
        width: 150px;
        position: absolute;
      }
      .close {
        display: block;
        transition: 0.5s;
        position: absolute;
        z-index: 105;
        right: 13px;
        top: 15px;
        background: none;
        border: none;
        color: white;
        text-shadow: 2px 2px 2px black;
        cursor: pointer;
        .material-icons {
          font-size: 40px;
        }
        &:hover {
          color: gray;
        }
        @media (min-width: 762px) {
          display: none;
        }
      }
   }
   .user {
     z-index: 101;
     background-color: white;
     border-radius: 15px;
     padding: 25px;
     .form {
       label {
         color: gray;
       }
       display: flex;
       justify-content: center;
       flex-direction: column;
     }
   }

   element {
}
.md-field {
    margin: 4px 0 0px;
}

.tabs {
  position: relative;
  z-index: 103;
  button {
    text-align: center;
    font-size: 20px;
    color: gray;
    font-family: 'ProximaNova';
    font-weight: bold;
    margin-bottom: 0;
    background-color: transparent;
    border: none;
    z-index: 110;
    &.active {
      color: pink;
      border-bottom: 1px pink solid;
    }
  }
}

form {
  position: relative;
  z-index: 103;
  button {
    background-color: pink;
    padding: 5px;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    font-family: 'ProximaNova';
    font-weight: lighter;
  }
  .forget {
    margin-top: 50px;
  }
}

.md-theme-default a:not(.md-button){
    color: white;
    color: white;
    color: white;
}

/* =============================================================================
   Mixins & Functions
   ========================================================================== */
	.opacity (@opacity) {
		-webkit-opacity: 	@opacity;
		-moz-opacity: 		@opacity;
		opacity: 		@opacity;
	}

	.transition(@duration) {
	 	-webkit-transition: all @duration ease;
	 	-moz-transition: all @duration ease;
	 	-o-transition: all @duration ease;
	 	transition: all @duration ease;
	}

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
