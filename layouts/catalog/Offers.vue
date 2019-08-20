<template>
  <div class="offer-corrousel" v-if="filterOffers.length > 0">
    <div class="offers">
      PRODUCTOS EN OFERTA
    </div>
    <carousel :perPageCustom="[[400, 2], [768, 3], [1024, 4]]" :paginationEnabled="true" paginationActiveColor="#FFA09B">
      <slide v-for="oferta in filterOffers">
        <div class="offer-prod">
          <img class="prod-img" :src="oferta.base_image.medium_image_url" alt="">
          <div class="price">
            <strike>{{oferta.formated_price}}</strike> - {{oferta.formated_special_price}}
          </div>
          <div class="prod-name">
            {{oferta.name}}
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ofertas: []
    }
  },
  computed: {
    filterOffers: function () {
          return this.ofertas.filter(item => {
            return item.special_price != null
          })
        },
  },
  mounted: async function () {
    try {
      var ofertas = await this.$axios.get('http://store.flawlessrd.com/public/api/products', {
        params: {
          featured: 'true'
        }
      });
      if (ofertas.data.data != []) {
        this.ofertas = ofertas.data.data;
      }
      else {
        this.ofertas = [];
      }
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="less" scoped>
  .offer-corrousel {
    position: relative;
    position: relative;
    border: 3px solid #FFA09B;
    width: 90%;
    min-height: 170px;
    margin-bottom: 25px;
    .offers {
      position: absolute;
      color: white;
      padding: 5px;
      background-color: #FFA09B;
      left: 0;
      top: 0;
    }
  }

  .offer-prod {
    margin-top: 40px;
  }

  .price {
    font-family: 'ProximaNova';
    font-weight: bold;
    font-size: 16px;
    color: lightgray;
  }

  .prod-name {
    font-family: 'ProximaNova';
    font-size: 16px;
    color: #FFA09B;
  }

  .prod-img {
    width: 170px;
    height: 170px;
    object-fit: contain;
  }

  .VueCarousel-navigation-button .VueCarousel-navigation-next {
    //transform: translateY(-50%) translateX(50%);
    //font-family: "system";
    background-color: pink;
    border-radius: 50%;
    color: white;
  }
</style>
