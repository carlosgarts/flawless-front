<template>
    <div class="catalog">
      <h1 class="pt" v-for="cate in category.data">{{cate.name}}</h1>
      <div class="sub-pt" v-for="cate in category.data" v-html="cate.description"></div>
      <div class="prod-grid" v-if="products.data != '' ">
        <div class="product" v-for="product in products.data">
          <div class="stock">
            {{product.id}}
          </div>
          <img class="prod-img" :src="product.base_image.medium_image_url" alt="">
          <div class="price">
            {{product.formated_price}}
          </div>
          <h2 class="prod-name">{{product.name}}</h2>
          <!-- <div class="details">
            VER MÁS
          </div> -->
        </div>
      </div>
      <div class="no-prod" v-else>
        Disculpe, estamos realizando inventario.
      </div>
      <circle-spin color="#FFA09B" :loading="isLoading" :key="isLoading"></circle-spin>
      <img src="@/assets/backgrounds/goldlinesAsset.svg" alt="Sign">
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      isLoading: true,
      products: [],
      category: []
    }
  },
  methods: {

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

.no-prod {
  color: darkgray;
  font-size: 21px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: auto;
}

.catalog {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.prod-grid {
  //width: 80%;
  transition: .5s;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 200px;
  grid-gap: 25px;
  @media (min-width: 680px) {
    grid-template-columns: 200px 200px;
  }
  @media (min-width: 930px) {
    grid-template-columns: 200px 200px 200px;
  }
  @media (min-width: 930px) {
    grid-template-columns: 200px 200px 200px 200px;
  }
}

.product {
  position: relative;
  background-color: white;
  width: 200px;
  //height: 350px;
  height: 300px;
  border: 1px solid #FFA09B;

  .stock {
    position: absolute;
    right: 0;
    background-color:  #FFA09B;
    color: white;
    padding: 15px;
    border-bottom-left-radius: 100%;
    font-family: 'ProximaNova';
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 25px;
    padding-left: 25px;
  }

  .prod-img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  .price {
    font-family: 'ProximaNova';
    font-weight: bold;
    font-size: 16px;
    color: lightgray;
    margin: 10px;
  }

  .prod-name {
    font-family: 'ProximaNova';
    font-weight: lighter;
    font-size: 16px;
    color: #FFA09B;
  }

  .details {
    transition: .5s;
    font-family: 'ProximaNova';
    font-size: 18px;
    font-weight: bold;
    margin: 25px;
    color: silver;
    cursor: pointer;
    &:hover {
      color: gold;
    }
  }

}

.pt{
font-weight: bold;
color: #FFA09B;
margin: 10px;
margin-top: 70px;
font-size: 45px;
//height: 50px;
font-family: 'Salwa';
line-height: 1;
  @media (min-width: 500px) {
    font-size: 65px;
    line-height: 1;
  }
}

.sub-pt {
  transition: .5s;
  color: #FFA09B;
  font-family: 'ProximaNova';
  font-weight: bold;
  font-size: 14px;
  width: 280px;
  @media (min-width: 500px) {
    width: 480px;
    font-size: 18px;
  }
}
</style>
