<template>
    <div class="catalog">
      <div class="pt" v-for="cate in category.data">
        {{cate.name}}
      </div>
      <div class="sub-pt" v-for="cate in category.data" v-html="cate.description"></div>
      <div class="prod-grid">
        <div class="product" v-for="product in products.data">
          <div class="stock">
            {{product.id}}
          </div>
          <img class="prod-img" :src="product.base_image.medium_image_url" alt="">
          <div class="price">
            {{product.formated_price}}
          </div>
          <div class="prod-name">
            {{product.name}}
          </div>
          <div class="details">
            VER MÁS
          </div>

        </div>
      </div>
      <img src="@/assets/backgrounds/goldlinesAsset.svg" alt="Sign">
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      products: [],
      category: []
    }
  },
  methods: {

  },
  mounted: async function () {
    try {
      const id = this.$route.params.id;
      var Category = await this.$axios.get('http://localhost/proyectos/new/bagisto-master/public/api/categories', {
        params: {
          id: id
        }
      });
      this.category = Category.data;
      var Products = await this.$axios.get('http://localhost/proyectos/new/bagisto-master/public/api/products', {
        params: {
          category_id: id
        }
      });
      this.products = Products.data;
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="less" scoped>

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
  height: 350px;
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
font-size: 65px;
height: 50px;
font-family: 'Salwa';
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
