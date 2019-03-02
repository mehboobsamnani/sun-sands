<template>
  <div>
    <header class="header">
      <div class="panel text-center text-uppercase">Some banner text for promotion</div>
      <div class="container">
        <div class="logo-bar d-flex justify-content-between align-items-center header-logo">
          <div>
            <b-dropdown id="" text="Dropdown Button" variant=" " class="currency m-md-2  ">
              <template slot="button-content">
                <span class="currency-selected"><img class="pr-1" src="../assets/usa.png"> USD </span>
              </template>
              <b-dropdown-item><span><img class="pr-1" src="../assets/usa.png"> USD </span></b-dropdown-item>
              <b-dropdown-item><span><img class="pr-1" src="../assets/usa.png"> USD </span></b-dropdown-item>
            </b-dropdown>
          </div>
          <div>
            <img src="../assets/logo.png" />
          </div>
          <div class="cart">
            <button class="btn-cart">CART({{this.cart.length}})</button>
          </div>
        </div>
      </div>
      <div class="nav-container">
        <div class="container ">
          <nav class="navbar navbar-expand-lg navbar-light ">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">

                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Men
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Women
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">Lookbook</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">Blog</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <a class="btn-action-heart" href="#"><i class="far fa-heart"></i></a>

                <a class="btn-action" href="#"><i class="fas fa-search"></i></a>
              </form>
            </div>
          </nav>

        </div>
      </div>
    </header>

    
 
    <section class='mb-5 product'>
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide :key="index" v-for="(slide,index) in gallery.images">
                <img :src="slide.large" :class="'slide'+index" />
              </swiper-slide>

              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
              <swiper-slide :key="index" v-for="(slide,index) in gallery.images" :style="{marginRight: '25px'}">
                <img :src="slide.thumbnail" :class="'slide'+index" />
              </swiper-slide>
            </swiper>
          </div>

          <div class="col-md-5">
            <div class="product-info">
              <p class="">‹ Back to <a class="back-to" href="#"> Woman</a>
              </p>
              <div class="h3 product-info-heading">The Atelier Tailored Coat</div>
              <div>
                <i class="fas fa-star color-gold "></i>
                <i class="fas fa-star color-gold"></i>
                <i class="fas fa-star color-gold"></i>
                <i class="fas fa-star color-gold"></i>
                <i class="fas fa-star color-grey"></i>

                <span class="font-weight-light pl-2">3 Review(s)</span>
                <span class="pl-2 pr-2">|</span>
                <span class="add-review">Add a Review</span>
              </div>
              <div class="mt-4 product-info-price">$499.00</div>
              <div class="mt-4">
                <div>Availability : <span class="color-blue">In stock</span></div>
                <div>Product Code : <span class="color-blue">#4657</span></div>
                <div>Tags : <span class="color-blue">Fashion, Hood, Classic</span></div>
              </div>
              <div class=" mt-4 desc font-weight-light">
                Sleek, polished, and boasting an impeccably modern fit, this blue, 2-but-
                ton Lazio suit features a notch lapel, flap pockets, and accompanying flat
                front trousers—all in pure wool by Vitale Barberis Canonico.
                <ul class=" mt-4 pl-3">
                  <li>Dark blue suit for a tone-on-tone look</li>
                  <li>Regular fit</li>
                  <li>100% Cotton</li>
                  <li>Free shipping with 4 days delivery</li>
                </ul>
              </div>

              <form class=" d-flex product-info-props">
                <div class="form-group">
                  <label for="color" class="mb-2 w-100 justify-content-start">color</label>
                  <select v-model="color" id="color" class="form-control">
                    <option value="" disabled selected>Select Color</option>
                    <option :key="index" :value="color.color" :disabled="!color.enable" v-for="(color,index) in colors">{{color.color}}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="size" class="mb-2 w-100 justify-content-start">size</label>
                  <select required v-model="size" id="size" class="form-control">
                    <option value="" disabled selected>Select Size...</option>
                    <option :key="index" :value="size.size" :disabled="!size.enable" v-for="(size,index) in sizes">{{size.size}}</option>
                  </select>
                </div>
                <div class="form-group qty">
                  <label for="qty" class="mb-2 w-100 justify-content-start">qty</label>
                  <input v-model="quantity" min="1" type="number" value="1" class="form-control">
                </div>

              </form>

              <div class="d-flex mt-5 justify-content-between">
                <button type="button" @click="addtoCart" :disabled="disabled" class=" btn btn-add-cart  rounded-0">Add To Cart</button>
                <button type="button"  class="btn  btn-add-wish rounded-0  "> <i class="pr-1 far fa-heart"></i>Add to
                  wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="d-flex align-items-center justify-content-center ">Copyright Text</div>

    </footer>

  </div>

</template>

<script>
  import axios from 'axios';
  import _ from 'lodash'
  import gallery from '../api/gallery.json'
  import swatches from '../api/swatches.json'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    computed :{
    

      
      disabled(){
     
        return this.color == '' || this.size == '' || this.quantity == ''
      },
      availableStock(){
      
       var self = this;
    
      var lookup = _.keyBy(this.cart, function(o) { return o.color + o.size });

      var result = _.filter(this.swatches, function(u) {
          return lookup[u.color + u.size] === undefined;
      });  

        return result;
      }
    },  
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        color:'',
        size:'',
        quantity:'',
        sizes:[],
        colors:[],
        swatches,
        cart :JSON.parse(localStorage.getItem('cart')) || [],
        gallery: gallery.gallery,
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
          marginLeft: 25
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
       
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    },
    created(){
          this.sizes =  _.map(_.uniqBy(this.availableStock ,'size'),(v)=>{ return {...v, ...{'enable':true}}});
   
          this.colors =  _.map(_.uniqBy(this.availableStock ,'color'),(v)=>{ return {...v, ...{'enable':true}}});
  
    },  
    methods: {
          getCount(attr,value){
            const arr = _.filter(this.availableStock,(i)=>{
              return i[attr] == value
            })
            return arr.length;
          },
          addtoCart(){
            var item = {
              quantity : this.quantity,
              color : this.color,
              size :this.size
            };

            this.cart.push(item)
            localStorage.setItem('cart',JSON.stringify(this.cart));
          },
          reset(){
            this.quantity = this.color  = this.size = ''
          }

    },
    watch: { 
      color(v){
        self.selectedColor = v;
        
        const filteredSizes =  _.filter(this.availableStock,['color',self.selectedColor])
        var filterColors = _.map(filteredSizes,'size');
        var allColors = _.map(this.sizes,'size');

        debugger;
        this.sizes = sizes;
     
      },
      size(v){
         self.selectedSize = v;
        const color =  _.filter(this.availableStock,['size',self.selectedSize])
        this.colors = color;
     
      }
    }
  }
</script>
<style lang="scss">
select:required:invalid {
  color: gray;
}
option[value=""][disabled] {
  display: none;
}
.swiper-slide {
      
      img {
        width:inherit;
     
      }
    }
  .swiper-container.gallery-thumbs {
    margin-top:25px;
    .swiper-slide-active {
      opacity: 0.5;
    }
    
  }
</style>