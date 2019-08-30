<template>
    <!-- <div class="catalog" :style="{ backgroundImage: `url(${filterGroup[0].image})` }"> -->
    <div class="catalog">
      <!-- <div class="gradient"></div> -->
      <div class="title-box">
        <h1 class="st">{{$route.params.nombre.split('-').join(' ')}}</h1>
        <!-- <img class="subrayado" src="@/assets/subrayado.svg"> -->
        <div v-for="group in filterGroup" class="sub-st">{{group.description}}</div>
      </div>
      <div class="service-grid">
        <div class="service" v-for="servicio in filterService">
          <h2>{{servicio.name}}</h2>
          <p class="description">{{servicio.description}}</p>
          <p v-if="servicio.available > 0" class="advice">Cita previa requerida.</p>
          <div class="price">{{servicio.price}}$</div>
        </div>
      </div>
      <!-- <img class="side-img" src="@/assets/backgrounds/nails.png" alt="makeup" title="makeup flawless"> -->
      <img class="vect" src="@/assets/backgrounds/goldlinesAsset.svg" alt="Sign">
    </div>
</template>

<script>
import ServicesData from '~/assets/info/services.json'

export default {
  data: function () {
    return {
      isLoading: true,
      products: [],
      category: [],
      groupData: [],
      serviceData: [],
      groupId: ''
    }
  },
  computed: {
    filterService: function () {
          return this.serviceData.filter(item => {
            return item.group_id == this.groupId
          })
        },
    filterGroup: function () {
      return this.groupData.filter(item => {
        return item.id == this.groupId
      })
    }
  },
  methods: {

  },
  created: function () {
    this.groupId = this.$route.query.id;
    this.serviceData = ServicesData.servicios;
    this.groupData = ServicesData.grupos;
  },
  mounted: async function () {
    try {
      const id = this.$route.params.id;
      var Category = await this.$axios.get('https://store.flawlessrd.com/public/api/categories', {
        params: {
          id: id
        }
      });
      this.category = Category.data;
      var Products = await this.$axios.get('https://store.flawlessrd.com/public/api/products', {
        params: {
          category_id: id
        }
      });
      this.products = Products.data;
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log(e);
    }
  }
}
</script>

<style lang="less" scoped>

.catalog {
  position: static;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //background: linear-gradient(104.98deg, rgba(254, 81, 97, 0.65) 20.58%, rgba(229, 229, 229, 0.11) 100%);
  //background: white;
  //background-size: cover;
  //background-attachment: fixed;
}

.service-grid {
  width: 90%;
  transition: .5s;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 25px;
  grid-auto-flow: row;
  div {
    // &:nth-child(1) {
    //   border-top: dotted 5px #FFA09B;
    // }
  }
  @media (min-width: 680px) {
    grid-template-columns: 50% 50%;
    div {
      // &:nth-child(2) {
      //   border-top: dotted 5px #FFA09B;
      // }
    }
  }
}

.service {
  padding: 20px;
  border-bottom: dotted 5px #FFA09B;
  position: relative;
  //color: #FFA09B;
  color: gray;
  h2{
    text-align: left;
    //font-family: 'Salwa';
    font-family: 'ProximaNova';
    font-size: 30px;
    margin-bottom: 25px;
    line-height: 35px;
    color: #FFA09B;
  }
  p{
    text-align: left;
    font-style: italic;
    font-size: 14px;
    @media (min-width: 650px) {
      font-size: 20px;
    }
  }
  .description {
    margin-bottom: 25px;
  }
  .advice {
    text-decoration: underline;
    //color: #FFA09B;
    font-weight: bold;
    color: gray;
  }
  .price {
    position: absolute;
    right: 0;
    bottom: 20px;
    font-weight: bold;
    font-size: 25px;
    //color: #FFA09B;
    color: gray;
  }
}

.st{
font-weight: bold;
color: #FFA09B;
margin: 10px;
font-size: 45px;
//height: 120px;
//line-height: 75px;
line-height: 50px;
font-family: 'Salwa';
text-align: center;
//border-bottom: solid white 4px;
@media (min-width: 650px) {
  line-height: 70px;
  font-size: 65px;
  text-align: left;
}
}

.title-box {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  align-self: flex-start;
  margin-top: 50px;
  //border: dotted #FFF 7px;
  // @media (min-width: 650px) {
  //   margin-top: 15px;
  //   margin: 25px;
  //   padding: 30px;
  //   margin-left: 100px
  // }
}

.subrayado {
  width: 65%;
  //margin-left: 20px;
  @media (min-width: 650px) {
    width: 90%;
    display: block;
  }
}

.sub-st {
  transition: .5s;
  color: #FFA09B;
  font-family: 'ProximaNova';
  font-weight: bold;
  font-size: 14px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  // margin-left: auto;
  // margin-right: auto;
  // text-align: center;
  //margin-top: 20px;
  text-align: center;
  @media (min-width: 650px) {
    // margin-left: 60px;
    // width: 480px;
    margin-top: 30px;
    font-size: 18px;
    // text-align: left;
  }
}

.side-img {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.2;
  max-height: calc(80% - 125px );
  @media (min-width: 900px) {
    max-height: calc(90% - 125px );
    opacity: 1;
  }
}

.vect {
  position: relative;
  z-index: -2;
}

.gradient {
height: 100%;
width: 100%;
position: absolute;
left: 0px;
top: 0px;
z-index: 0;
//background: linear-gradient(104.98deg, rgba(233, 105, 117, 0.6) 20.58%, rgba(196, 196, 196, 0.35) 100%);
background: linear-gradient(104.98deg, rgba(254, 81, 97, 0.65) 20.58%, rgba(229, 229, 229, 0.11) 100%);
}
</style>
