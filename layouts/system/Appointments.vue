<template>
  <div class="displayer">
    <div class="re-base">
      <div class="amt">
        Citas
      </div>
      <ul class="list" v-if="chosenOne != null">
        <li v-for="appointment in Appointments" class="appointment" v-bind:class="{chosenOne: chosenOne.id === appointment.id}" @click="chosenOne = appointment">
          <button v-if="appointment.confirmed == 0" type="button" name="button" @click="deleteAppointment(appointment.id)"><i class="material-icons">clear</i></button>
          <div class="date">
            <p>Reservación Para {{theMoment(appointment.start_time)}}</p>
          </div>
        </li>
      </ul>
      <div class="no-list" v-else>
        Presione el boton + para crear una nueva cita
      </div>
      <reserve/>
    </div>
    <tickets v-if="chosenOne != null" :key="chosenOne" :date="fecha" :time="tiempo"/>
  </div>
</template>

<script>
import Reserve from '~/layouts/system/reserve.vue'
import Tickets from '~/layouts/system/tickets.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  components: {
    Reserve,
    Tickets
  },
  data: function(){
    return {
      Appointments: null,
      chosenOne: null,
      fecha: null,
      tiempo: null,
      updated: 0
    }
  },
  computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
  watch: {
    chosenOne: function(){
      if (this.chosenOne != null) {
        var temporal = this.chosenOne.start_time.split(" ");
        this.fecha = temporal[0];
        this.tiempo = temporal[1];
      }
      else {
        this.fecha = '';
        this.tiempo = '';
      }
    },
    updated: async function() {
      this.updateAppointments();
    }
  },
  methods: {
    deleteAppointment: async function(delId) {
      try {
        var Response = await this.$axios.post('http://store.flawlessrd.com/public/api/DeleteAppointment', {
            id: delId
        });
        if (Response.data.status === 'succes') {
          app.$toast.success('La cita fue eliminada');
          try {
            const id = this.loggedInUser.id;
            var Appointments = await this.$axios.post('http://store.flawlessrd.com/public/api/ShowAppointment', {
                customer_id: id
            });
            this.Appointments = Appointments.data;
            this.chosenOne = Appointments.data[0];
            if (this.chosenOne === undefined) {
              this.chosenOne = null;
            }
          } catch (e) {
            console.log(e);
          }
        }
        else{
          console.log('Fallo');
        }
      } catch (e) {
        console.log(e);
      }
    },
    updateAppointments: async function() {
      try {
        const id = this.loggedInUser.id;
        var Appointments = await this.$axios.post('http://store.flawlessrd.com/public/api/ShowAppointment', {
            customer_id: id
        });
        this.Appointments = Appointments.data;
        this.chosenOne = Appointments.data[0];
        if (this.chosenOne === undefined) {
          this.chosenOne = null;
        }
      } catch (e) {
        console.log(e);
      }
    },
    theMoment: function (date) {
      var twelveTime = moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY LT');
      return twelveTime;
    }
  },
  mounted: async function () {
    try {
      const id = this.loggedInUser.id;
      var Appointments = await this.$axios.post('http://store.flawlessrd.com/public/api/ShowAppointment', {
          customer_id: id
      });
      this.Appointments = Appointments.data;
      this.chosenOne = Appointments.data[0];
      if (this.chosenOne === undefined) {
        this.chosenOne = null;
      }
    } catch (e) {
      console.log(e);
    }
  },
  created: async function () {
    this.$bus.$on('new-appointment', data => {
            this.updated = this.updated +1;
        });
  }
}
</script>

<style lang="less" scoped>


.amt{
font-family: 'ProximaNova';
font-weight: bold;
color: #FFA09B;
margin: 20px;
//font-size: 20px;
font-size: 40px;
height: 50px;
border-bottom: solid #FFA09B 1px;
padding: 10px;
font-family: 'Salwa';
}
.displayer {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 762px) {
    grid-template-columns: 750px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 750px;
  }
}
ul {
  margin: 0;
  padding: 0;
  //filter: drop-shadow( 0 1px 2px gray );
}
li {
  padding: 0;
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  list-style: none;
  position: relative;
}

.no-list {
  color: lightgray;
}

.appointment {
  min-height: 50px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  background-color: white;
  background: linear-gradient(90deg, #e8e8e8 0%, #e8e8e81 0%);
  //background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%);
  //box-shadow: 1px 1px 5px gray;
  //margin: 5px;
  margin-left: 20px;
  margin-right: 15px;
  cursor: pointer;
  button {
    transition: 0.5s;
    cursor: pointer;
    color: white;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: white solid 1px;
    border-radius: 50%;
    margin: 5px;
  }
  button:hover {
    color: white;
    background-color: lightgray;
  }
  .date {
    margin: 0;
    p {
      color: gray;
      font-size: 10px;
      @media (min-width: 1050px) {
        font-size: 13px;
      }
    }
  }
}

.chosenOne {
  background: white;
  background: linear-gradient(90deg, rgba(255,201,201,1) 0%, rgba(255,201,201,1) 100%);
  //background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,201,201,1) 100%);
  @media (min-width: 900px) {
    transform: translateX(20px);
  }
  .date {
    p {
      color: lightcoral;
    }
  }
  button:hover {
    background-color: lightcoral;
  }
}

.chosenOne::after {
  @media (min-width: 900px) {
    left: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-left-color: #FFA09B;
    border-width: 25px;
    animation: growUp 0.5s ease;
  }
}

.appointment:hover {
  @media (min-width: 900px) {
    transform: translateX(20px);
  }
}

@keyframes growUp {
    0% {
        border-left-width: 0px;
    }
    100% {
        border-left-width: 25px;
    }
}

</style>
