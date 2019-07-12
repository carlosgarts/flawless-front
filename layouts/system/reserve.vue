<template>
  <div id="reserve">
    <div class="speed-dial">
      <label class="adder" for="timepicker">+</label>
      <md-tooltip md-direction="right">Nueva Reservación</md-tooltip>
    </div>
    <datetime input-id="timepicker" class="theme-pink" type="datetime" v-model="datetime" :minute-step="10" :phrases="{ok: 'Continuar', cancel: 'Salir'}" :min-datetime="minDatetime" value-zone="America/Caracas" zone="America/Caracas" use12-hour format="yyyy-MM-dd H:i:s" auto></datetime>
    <transition name="fade">
    <div class="modal-comment" v-if="modalShow">
      <div class="background" @click="resetDate()">
      </div>
      <div class="vdatetime-popup vdatetime theme-pink">
        <div class="vdatetime-popup__header">
          Elige un servicio
        </div>
        <div class="comment">
          <md-field>
          <label for="groups">Grupo</label>
          <md-select v-model="groupId" name="groups" id="groups">
            <md-option v-for="grupo in groupData.data.grupos" :value="grupo.id">{{grupo.name}}</md-option>
          </md-select>
        </md-field>
        </div>
        <div v-if="groupId != '' && filterService != '' " class="comment">
        <md-field>
          <label for="services">Servicio</label>
          <md-select v-model="serviceId" name="services" id="services">
            <md-option v-for="servicio in filterService" :value="servicio.id">{{servicio.name}}</md-option>
          </md-select>
        </md-field>
        </div>

        <div class="available" v-html="available"></div>

        <div class="comment">
          <md-field>
            <label>Comentarios y peticiones</label>
            <md-textarea v-model="comment" md-autogrow md-counter="200"></md-textarea>
          </md-field>
        </div>
        <div class="vdatetime-popup__actions">
          <button class="vdatetime-popup__actions__button vdatetime-popup__actions__button--cancel" type="button" name="button" @click="resetDate()">Salir</button>
          <button class="vdatetime-popup__actions__button vdatetime-popup__actions__button--cancel" type="button" name="button" @click="createAppointment()" :disabled="!allow">Continuar</button>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data: function(){
    return {
      datetime: '',
      comment: '',
      modalShow: false,
      groupData: [],
      serviceData: [],
      groupId: '',
      serviceId: '',
      minDatetime: new Date().toISOString().slice(0,10),
      available: '',
      allow: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    filterService: function () {
      return this.serviceData.filter(item => {
        return item.group_id == this.groupId
      })
    }
  },
  watch: {
    datetime: function() {
      if (this.datetime != '') {
        this.modalShow = true;
      }
    },
    serviceId: async function() {
      this.available = '';
      this.allow = false;
      if(this.serviceId != ''){
        var startTime = this.datetime;
        var response = await this.$axios.post('http://localhost/proyectos/new/bagisto-master/public/api/disponible', {
            service_id: this.serviceId,
            start_time: startTime.slice(0, 19).replace('T', ' ')
        });
        if (response.data.response == 'free') {
          this.available = "<p style='color: #4BB543'>Disponible</p>";
          this.allow = true;
        }
        else
        {
          this.available = "<p style='color: #FF9494'>Lo lamentamos, cita ocupada, intente otra hora</p>";
        }
      }
    },
    groupId: function() {
      this.serviceId = '';
    }
  },

  methods: {
    resetDate: function() {
      this.datetime = '';
      this.modalShow = false;
    },
    createAppointment: async function() {
      var idUser = this.loggedInUser.id;
      var startTime = this.datetime.slice(0, 19).replace('T', ' ');
      var comment = this.comment;
      try {
        var Response = await this.$axios.post('http://localhost/proyectos/new/bagisto-master/public/api/CreateAppointment', {
            customer_id: idUser,
            service_id: this.serviceId,
            start_time: startTime,
            comments: comment
        });
        if (Response.data.status == 'succes') {
          console.log('exito');
          this.datetime = '';
          this.modalShow = false;
          this.comment = '';
          this.available = '';
          this.serviceId = '',
          this.allow = false;
          this.$bus.$emit('new-appointment');
        }
        else {
          console.log('fallo');
        }
      } catch (e) {
        console.log(e);
      }
    },
    checkRoom: async function() {
      var idUser = this.loggedInUser.id;
      var startTime = this.datetime;
      var comment = this.comment;
      startTime = startTime.slice(0, 19).replace('T', ' ');
      try {
        var Response = await this.$axios.get('http://localhost/proyectos/new/bagisto-master/public/api/disponible', {
            service_id: idUser,
            star_time: startTime
        });
        if (Response.data.response === 'free') {
          //Allow
        }
        else {
          //Disallow
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted: async function(){
    this.groupData =  await this.$axios.get('http://localhost/proyectos/new/bagisto-master/public/api/servicios');
    this.serviceData = this.groupData.data.servicios;
  }
}
</script>

<style lang="less">

.available{
  margin: 0;
}
.vdatetime-input {
  display: none;
}

.theme-pink .vdatetime-popup__header,
.theme-pink .vdatetime-calendar__month__day--selected > span > span,
.theme-pink .vdatetime-calendar__month__day--selected:hover > span > span {
  background: pink;
}

.theme-pink .vdatetime-year-picker__item--selected,
.theme-pink .vdatetime-time-picker__item--selected,
.theme-pink .vdatetime-popup__actions__button {
  color: pink;

  &:hover, &:disabled {color:lightgray;}
}


:root {
    --md-theme-default-primary: #ff80ab;
    --md-theme-default-accent: #fff;
    --md-theme-default-theme: light;
}

.vdatetime-popup__header {
  background-color: pink;
}

.md-menu-content.md-select-menu {
  z-index: 1100;
}

.comment {
  margin: 18px;
}

.modal-comment {
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  transition: opacity .5s;
}

.background {
  position: relative;
  height: 100vh;
  width: 100%;
}

#reserve {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid pink 1px;
  margin: 20px;
}

.speed-dial {
  height: 53px;
  width: 53px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 1px 1px 5px gray;
  margin: 20px;
}

.adder {
  color: white;
  font-size: 45px;
  cursor: pointer;
  font-weight: lighter;
}

.fade-enter-active, .fade-leave-active {
transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
