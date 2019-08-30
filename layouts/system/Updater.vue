<template>
  <div class="editor">
    <form class="signin form" method="post"  @submit.prevent="updateUser">
      <div class="amt">Perfil</div>
      <md-field>
        <label>E-mail</label>
        <md-input v-model="update.email"></md-input>
      </md-field>
      <md-field>
        <label>Nombre</label>
        <md-input v-model="update.first_name"></md-input>
      </md-field>
      <md-field>
        <label>Apellido</label>
        <md-input v-model="update.last_name"></md-input>
      </md-field>
      <md-field>
        <label>Teléfono</label>
        <md-input v-model="update.phone"></md-input>
      </md-field>
      <md-field>
        <label for="gender">Genero</label>
        <md-select v-model="update.gender" name="gender" id="gender">
          <md-option value="Female">Femenino</md-option>
          <md-option value="Male">Masculino</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label>Contraseña Nueva (no necesario)</label>
        <md-input v-model="update.password" type="password"></md-input>
      </md-field>
      <div class="error">
        {{update.error}}
      </div>
      <button type="submit" name="submit">GUARDAR</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function (){
    return {
      update: {
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        gender: '',
        error: null
      }
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async updateUser() {
      if (this.checkForm()) {
        console.log(this.$auth.getToken());
          try {
            var response = [];
            if (this.update.password != '') {
              response = await this.$axios.put('http://store.flawlessrd.com/public/api/customer/profile', {
                  id: this.loggedInUser.id,
                  email: this.update.email,
                  first_name: this.update.first_name,
                  last_name: this.update.last_name,
                  phone: this.update.phone,
                  gender: this.update.gender,
                  date_of_birth: '',
                  password: this.update.password,
                  password_confirmation: this.update.password,
              });
            }
            else {
              response = await this.$axios.put('http://store.flawlessrd.com/public/api/customer/profile', {
                  id: this.loggedInUser.id,
                  email: this.update.email,
                  first_name: this.update.first_name,
                  last_name: this.update.last_name,
                  phone: this.update.phone,
                  gender: this.update.gender,
                  date_of_birth: ''
              });
            }

            if (response.data.message == "Your account has been updated successfully.") {
              await this.$auth.logout();
              this.$router.push('/');
              this.$toast.success('Sus datos fueron actualizados por favor ingrese de nuevo');
            } else {
              this.update.error = "Este correo pertenece a otro usuario";
            }
          } catch (e) {
            this.update.error = e.response.data.message
            }
      }
    },
    checkForm: function () {
      this.update.error = '';

      if (!this.update.email) {
        this.update.error = 'Correo requerido.';
        return false;
      } else if (!this.validEmail(this.update.email)) {
        this.update.error = 'Correo invalido.';
        return false;
      }

      if (!this.update.first_name) {
        this.update.error = 'Nombre Requerido';
        return false;
      }

      if (!this.update.last_name) {
        this.update.error = 'Apellido Requerido';
        return false;
      }

      if (!this.update.gender) {
        this.update.error = 'Especifique su genero, por favor';
        return false;
      }

      if (!this.update.phone) {
        this.update.error = 'Es importante que ingrese su telefono';
        return false;
      }
      else if (!this.validPhone(this.update.phone)) {
        this.update.error = 'Telefono invalido.';
        return false;
      }

      // if (!this.update.password) {
      //   this.update.error = 'Contraseña Requerida';
      //   return false;
      // }

      if (this.update.error === '') {
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
  mounted: async function(){
    this.update.email = this.loggedInUser.email;
    this.update.first_name = this.loggedInUser.first_name;
    this.update.last_name = this.loggedInUser.last_name;
    this.update.phone = this.loggedInUser.phone;
    this.update.email = this.loggedInUser.email;
    this.update.gender = this.loggedInUser.gender;
  }
}
</script>

<style lang="less" scoped>

.error {
  color: #FF9494;
}

.editor {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.amt{
font-family: 'ProximaNova';
font-weight: normal;
color: #FFA09B;
margin: 25px;
font-size: 40px;
//height: 50px;
font-family: 'Salwa';
line-height: 1;
@media (min-width: 425px) {
  margin: 25px;
  font-size: 60px;
  }
}

form {
  position: relative;
  width: 80%;
  max-width: 700px;
  z-index: 103;
  button {
    background-color: #FFA09B;
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

</style>
