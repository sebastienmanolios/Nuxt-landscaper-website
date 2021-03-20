<template>
  <div>
          <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/>
                <font-awesome-layers class="fa-4x">
                  <font-awesome-icon icon="circle"/>
        <font-awesome-icon icon="check" transform="shrink-6" :style="{ color: 'white' }"/>
      </font-awesome-layers>
      <font-awesome-layers full-width class="fa-4x">
        <font-awesome-icon icon="calendar"/>
        <font-awesome-layers-text transform="shrink-8 down-3" value="27" class="fa-inverse" />
      </font-awesome-layers>


<h1> Tiny slider example</h1>
<div class="slider-container">
    <ul class="controls" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
        <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
<font-awesome-icon :icon="['fab', 'linkedin']" />        </li>
        <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">
            <i class="fas fa-angle-right fa-5x"></i>          
        </li>
    </ul>
    <div class="my-slider">
        <div class="slider-item">
            <div class="card">                
                <img src="https://placeimg.com/200/150/any" alt="">
                <h2>Title 1</h2>
                <p class="card_description">Loresm ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
            </div>
        </div>
        
        <div class="slider-item">
            <div class="card">                
                <img src="https://placeimg.com/200/150/nature" alt="">                       
                <h2>Title 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
            </div>
        </div>
        
        <div class="slider-item">
            <div class="card">                
                <img src="https://placeimg.com/200/150/nature/2" alt="">
                <h2>Title 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
            </div>
        </div>
        <div class="slider-item">
            <div class="card">                
                <img src="https://placeimg.com/200/150/nature/3" alt="">
                <h2>Title 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
            </div>
        </div>
    </div>    
</div>



  </div>
</template>

<script>
  export default {
    head() {
      return {
        link: [
          {
            rel: "stylesheet",
            href:
              "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
          }
        ]
        };
    },
    data() {
      return {
        container: '.my-slider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,    
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#customize-controls",
    responsive: {
        640: {            items: 2,        },
        768: {            items: 3,        }
    }

    }
  }
  }
</script>

<style lang="scss" scoped>

body {
   background: #333;
    color: white;
}
.slider-container {    
    padding: 2rem 3rem;
    background: #e6e6e6;
    margin: 2rem auto 0 auto;
    overflow: hidden;
    border-radius: 5px;    
    position:relative;
    &:before {
        content: '.slider-container';
        position: absolute;
        left: 0;
        top: 0;
        color: blue;
    }
}

img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
}

.my-slider {
    display: flex;
    position: relative;    
}

.slider-item {
    background: grey;
    border-right: 2px solid #333;
    padding: 1.5rem .75rem;
    position: relative;
    &:before {
        content: '.slider-item';
        position: absolute;
        left: 0;
        top: 0;
        color: blue;
    }
    
    &:hover {
        cursor: pointer;
    }
}

.controls {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    left: 0;    
    background: #333;
    width: 100%;    
    top: 50%;
    transform: translatey(-50%);
    display: flex;
    align-items: center;    
    justify-content: space-between;
    &:focus {
        outline: none;
    }

    li:hover {
        cursor: pointer;        
    }
}

.card {
    text-align: center;    
    margin: 0 auto;
    max-width: 200px;       
    color: #333;
    background: white;
    border-radius: 5px;
    padding-bottom: .75rem;
    font-family: sans-serif;
    overflow: hidden;
    box-shadow: 2px 2px rgba(black, .3);
    position: relative;
    &:before {
        content: '.card';
        position: absolute;
        bottom: 0;
        color: blue;
    }
    img {
        margin-bottom: .25rem;
    }
    
    h2 {
        margin: 0 0 .25rem;
    }
    p {
        margin: 0;
        padding: 0 .5rem;
    }
}

</style>