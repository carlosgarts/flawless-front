<template>
  <div>
    <div class="ticket">
      <figure>

      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 229.4 113.8" style="enable-background:new 0 0 229.4 113.8;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:black;}
        .st1{fill:none;stroke:white;stroke-width:0.5;stroke-miterlimit:10;}
        .st2{fill:white;}
      </style>
      <g>
        <clipPath id="ticket-back" clipPathUnits="userSpaceOnUse">
          <path class="st0" d="M204,57c0-22,11.4-39.8,25.6-39.8v-17H0v17C14.1,17.3,25.5,35,25.5,57S14.1,96.8,0,96.8v17h229.5v-17
            C215.4,96.9,204,79,204,57z"/>
        </clipPath>
        <image width="100%" height="100%" preserveAspectRatio="none" xlink:href="../../assets/backgrounds/textile.jpg" clip-path="url(#ticket-back)"/>
        <rect x="39.4" y="14.8" class="st1" width="150.8" height="84.7"/>
        <rect x="45.5" y="9.1" class="st1" width="138.4" height="95.8"/>
        <rect x="151.1" y="18" class="st2" width="5.5" height="5.5"/>
        <rect x="158.5" y="18" class="st2" width="5.5" height="5.5"/>
        <rect x="166" y="18" class="st2" width="5.5" height="5.5"/>
        <rect x="173.3" y="18" class="st2" width="5.5" height="5.5"/>
      </g>
      </svg>

      </figure>

      <div class="ticket-content">
            <div class="logo-holder">
              <img class="ticket-logo" src="@/assets/logo.png" alt="be flawless">
            </div>
            <div class="slogan">
              TIENES UNA CITA PARA <br> VERTE Y SENTIRTE FLAWLESS
            </div>
            <div class="name">
              {{loggedInUser.name}}
            </div>
            <div class="date">
              <!-- <i class="material-icons">today</i>  {{date}}   <i class="material-icons">timer</i> {{time}} -->
              <img class="time-icon" src="@/assets/ticket/calendar.png"> {{date}}   <img class="time-icon" src="@/assets/ticket/clock.png"> {{time}}
            </div>
            <!-- <div class="comment">
              {{appointment.comments}}
            </div> -->
      </div>
    </div>
    <footer>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </div>
    </footer>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
      date: String,
      time: String,
  },
  computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {

  }
}
</script>

<style lang="less">

.ticket {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
}

#Layer_1 {
  width: 310px;
  filter: drop-shadow( 0 2px 1px black );
  z-index: -1;
  @media (min-width: 762px) {
    width: 600px;
  }
}

.ticket-content {
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  color: white;
  width: 230px;
  height: 120px;
  border-left: 4px white dotted;
  border-right: 4px white dotted;
  z-index: 900;
  @media (min-width: 762px) {
    height: 220px;
    padding-left: 40px;
    padding-right: 40px;
    width: 58%;
  }
}

.logo-holder {
  position: absolute;
  left: 90px;
  top: -10px;
  @media (min-width: 762px) {
    left: 175px;
    top: -25px;
  }
}

.ticket-logo {
  width: 35px;
  @media (min-width: 762px) {
    width: 70px;
  }
}

.slogan {
  font-size: 5px;
  line-height: 12px;
  text-align: left;
  position: absolute;
  left: 22px;
  top: 5px;
  line-height: 10px;
  @media (min-width: 762px) {
    left: 40px;
    width: 150px;
    font-size: 10px;
    line-height: 16px;
  }
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Salwa';
  font-size: 27px;
  height: 65px;
  line-height: 50px;
  @media (min-width: 762px) {
    font-size: 47px;
    height: 150px;
    line-height: 50px;
  }
}

.date {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  margin-bottom: 5px;
  @media (min-width: 762px) {
    margin-bottom: 10px;
    font-size: 12px;
  }
  span {
    display: none;
    @media (min-width: 762px) {
      display: inline;
    }
  }
}

.time-icon {
  width: 15px;
  margin-left: 5px;
  margin-right: 5px;
  @media (min-width: 762px) {
    width: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }
}

footer{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 9px;
  @media (min-width: 762px) {
    font-size: 12px;
  }
  div {
    margin: 10px;
    max-width: 1000px;
    color: darkgray;
    line-height: 13px;
    @media (min-width: 762px) {
      line-height: 18px;
    }
  }
}
</style>
