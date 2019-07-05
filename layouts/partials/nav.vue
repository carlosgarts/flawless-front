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
        <!-- <li v-if="isAuthenticated"><span @click="toggled = !toggled"><a>{{ loggedInUser.first_name.toUpperCase() }}</a></span></li> -->
        <li><span @click="toggled = !toggled"><nuxt-link to="/">PRINCIPAL</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/about-me">NOSOTROS</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/productos">PRODUCTOS</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/reservas">RESERVAS</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/contact-me">SERVICIOS</nuxt-link></span></li>
        <li><span @click="toggled = !toggled"><nuxt-link to="/contact-me">CONTACTO</nuxt-link></span></li>
        <li>
          <span @click="toggled = !toggled">
            <!-- <a @click="logout" v-if="isAuthenticated" >LOGOUT</a>
            <a @click="modalShow = !modalShow" v-else>LOGIN</a> -->
            <a @click="modalShow = !modalShow" >LOGIN</a>
          </span>
        </li>
      </ul>
    </nav>
    <!--desktop-nav-->
    <nav class="desktop-nav" v-bind:class="{toggled}" role="navigation">
      <div class="nav-strip">
        <!-- <div v-if="isAuthenticated"><a>{{ loggedInUser.first_name.toUpperCase() }}</a></div> -->
        <div><nuxt-link to="/">PRINCIPAL</nuxt-link></div>
        <div><nuxt-link to="/about-me">NOSOTROS</nuxt-link></div>
        <div><nuxt-link to="/productos">PRODUCTOS</nuxt-link></div>
        <div><nuxt-link to="/reservas">RESERVAS</nuxt-link></div>
        <div><nuxt-link to="/contact-me">SERVICIOS</nuxt-link></div>
        <div><nuxt-link to="/contact-me">CONTACTO</nuxt-link></div>
        <div>
          <!-- <a @click="logout" v-if="isAuthenticated" >LOGOUT</a>
          <a @click="modalShow = !modalShow" v-else>LOGIN</a> -->
          <a @click="modalShow = !modalShow">LOGIN</a>
        </div>
      </div>
    </nav>
    <transition name="fade">
    <div class="modal" v-if="modalShow">
      <div @click="modalShow = false" class="background"></div>
      <div class="palms">
        <img id="palm1" class="foreground" src="@/assets/backgrounds/login_fore_1.png" alt="palms">
        <img id="palm2" class="foreground" src="@/assets/backgrounds/login_fore_2.png" alt="palms">
        <div class="user">
          <div class="tabs">
            <button v-bind:class="{ active: modalMode === 'login' }" type="button" name="button" @click="modalMode= 'login'">Iniciar</button>
            <button v-bind:class="{ active: modalMode === 'signin' }" type="button" name="button" @click="modalMode = 'signin'">Registrar</button>
            <button v-bind:class="{ active: modalMode === 'forgot' }" type="button" name="button" @click="modalMode = 'forgot'">Recuperar</button>
          </div>
            <form class="login form" method="get" @submit.prevent="loginUser" v-if="modalMode === 'login'">
              <div class="error">
                {{login.error}}
              </div>
              <md-field>
                <label>E-mail</label>
                <md-input v-model="login.email"></md-input>
              </md-field>
              <md-field>
                <label>Contraseña</label>
                <md-input v-model="login.password" type="password"></md-input>
              </md-field>
              <button type="submit" name="submit">OK</button>
              <!-- <p>¿Olvidaste tu contraseña? <a @click="modalMode = 'forgot'">presiona aqui</a></p> -->
            </form>
            <form class="signin form" method="post"  @submit.prevent="registerUser" v-if="modalMode === 'signin'">
              <div class="error">
                {{register.error}}
              </div>
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
                <label>Teléfonos</label>
                <md-input v-model="register.phone"></md-input>
              </md-field>
              <md-field>
                <label>Contraseña</label>
                <md-input v-model="recover.password" type="password"></md-input>
              </md-field>
              <button type="submit" name="submit">REGISTRARSE</button>
              <!-- <p>¿Olvidaste tu contraseña? <a @click="modalMode = 'forgot'">presiona aqui</a></p> -->
            </form>
            <form class="forgot form" method="post" @submit.prevent="recoverPassword" v-if="modalMode === 'forgot'">
              <div class="error">
                {{recover.error}}
              </div>
              <md-field>
                <label>E-mail</label>
                <md-input v-model="recover.email"></md-input>
                <span class="md-helper-text">Se te enviara un correo para que puedas recuperar tu clave.</span>
              </md-field>
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
    try {
      // await this.$axios.post('customer/register', {
      //     email: this.register.email,
      //     first_name: this.register.first_name,
      //     last_name: this.register.last_name,
      //     phone: this.register.phone,
      //     password: this.register.password,
      //     password_confirmation: this.register.password
      // })
      //
      // await this.$auth.loginWith('local', {
      //     email: this.register.email,
      //     password: this.register.password,
      //     token: 'true'
      // })
      // console.log(this.$auth.loggedIn);
      // this.modalShow = false
      // this.$router.push('/')
    } catch (e) {
      this.register.error = e.response.data.message
      }
    },

    async loginUser() {

      try {
        var response = await this.$axios.post('http://localhost/proyectos/new/bagisto-master/public/api/customer/login', {
              email: this.login.email,
              password: this.login.password,
              token: true
          });
        var apiToken = response.data.token;
        var userData = response.data.data;
        console.log(userData);

        //Cookie.set('name', 'value', { expires: 7 });
        //var varsu =  Cookie.get('name');
        //console.log(varsu);
        //Cookie.remove('name');


        // var Token = Cookie.get('flawless_small_token');
        //
        //   if(Token !== undefined) {
        //     console.log('Mentira');
        //   } else {
        //     console.log('No es mentira');
        //     console.log(Token);
        //   }


      //   await this.$auth.loginWith('local', {
      //     data: {
      //       email: this.login.email,
      //       password: this.login.password,
      //       token: 'true'
      //     }
      //   })
      //   this.modalShow = false
      //   this.$router.push('/')
      } catch (e) {
         this.login.error = e.response.data.message
       }
    },

    async recoverPassword() {
    // try {
    //   response = await this.$axios.post('customer/forgot-password', {
    //       email: this.recover.email
    //   })
    //   this.$notify({
    //     group: 'foo',
    //     title: 'Important message',
    //     text: 'Su link de reinicio fue enviado a tu correo'
    //   });
    // }
    //  catch (e) {
    //   this.register.error = e.response.data.message
    // }
  },

    async logout() {
      // await this.$auth.logout();
    }
  },

}
</script>

<style lang="less" scoped>

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
