<template>
  <div id="reserve">
    <div class="speed-dial">
      <label class="adder" for="timepicker">+</label>
      <md-tooltip md-direction="right">Nueva Reservación</md-tooltip>
    </div>

    <datetime input-id="timepicker" class="theme-pink" type="datetime" v-model="datetime" :phrases="{ok: 'Continuar', cancel: 'Salir'}" format="yyyy-MM-dd HH:mm:ss" auto></datetime>
    <transition name="fade">
    <div class="modal-comment" v-if="modalShow">
      <div class="background" @click="resetDate()">
      </div>
      <div class="vdatetime-popup vdatetime theme-pink">
        <div class="vdatetime-popup__header">
          Something to Add?
        </div>
        <div class="comment">
          <md-field>
            <label>Comments and petitions</label>
            <md-textarea v-model="comment" md-autogrow md-counter="200"></md-textarea>
          </md-field>
        </div>
        <div class="vdatetime-popup__actions">
          <button class="vdatetime-popup__actions__button vdatetime-popup__actions__button--cancel" type="button" name="button" @click="resetDate()">Salir</button>
          <button class="vdatetime-popup__actions__button vdatetime-popup__actions__button--cancel" type="button" name="button" @click="createAppointment()">Continuar</button>
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
    }
  },
  computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
      },
  watch: {
    datetime: function() {
      if (this.datetime != '') {
        this.modalShow = true;
      }
    }
  },
  methods: {
    resetDate: function() {
      this.datetime = '';
      this.modalShow = false;
    },
    createAppointment: async function() {
      var idUser = this.loggedInUser.id;
      var startTime = this.datetime;
      var comment = this.comment;
      startTime = startTime.slice(0, 19).replace('T', ' ');
      try {
        var Response = await this.$axios.post('CreateAppointment', {
            id_user: idUser,
            start: startTime,
            comments: comment
        });
        if (Response.data.status === 'succes') {
          console.log('exito');
          this.datetime = '';
          this.modalShow = false;
          this.comment = '';
          this.$bus.$emit('new-appointment');
        }
        else {
          console.log('fallo');
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>

<style lang="less">

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
}

:root {
    --md-theme-default-primary: #ff80ab;
    --md-theme-default-accent: #fff;
    --md-theme-default-theme: light;
}

.vdatetime-popup__header {
  background-color: pink;
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
