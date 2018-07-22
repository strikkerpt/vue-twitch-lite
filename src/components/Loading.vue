<template>
    <div id="loading">
        <div class="center" style="transform: translateX(-50%) translateY(-50%)">
            <!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 165 165" style="enable-background:new 0 0 165 165;" xml:space="preserve">
<path class="st0" d="M27.5,15.5l-9,23v94h32v17h18l17-17h26l35-35v-82H27.5z M134.5,91.5l-20,20h-32l-17,17v-17h-27v-84h96V91.5z"/>
<g>
	<rect x="102.5" y="50.5" class="st1" width="12" :height="eyes.height"/>
	<rect x="70.5" y="50.5" class="st1" width="12" :height="eyes.height"/>
</g>
</svg>
        </div>
    </div>
</template>

<script>
import anime from 'animejs'
/**
 * This is the entry loading with a animation using SVG and animejs
 * TODO: Preload everything and then deactivate loading
 */
export default {
  name: 'Loading',
  data () {
    return {
      eyes: {
        height: 35
      }
    }
  },
  methods: {
    blink: function() {
      return new anime({
            targets: this.eyes,
            height: [35, 0, 35, 0, 35],
            easing: 'easeInOutBack',
            duration: 700,
            delay: 1500,
            loop: true
      })
    },
    float: function() {
      return new anime({
            targets: '.center',
            translateX: ['-50%', '-50%'],
            translateY: ['-50%', '-35%', '-55%', '-50%'],
            duration: 2000,
            easing: 'easeInOutQuad',
            loop: true,
            delay: 0
      })
    }
  },
  created () {
    this.blink() // We can start updating this value before rendering
  },
  mounted () {
    this.float() // Since we are querying the DOM we need to wait for everything to be rendered
  },
  beforeDestroy() {
    anime.remove([this.eyes,'.center']) // We need to remove the animations or else they will continue to play even after component destroyed
  }
}
</script>

<style lang="scss">
    #loading {
        position: absolute;
        width: 100%;
        height: 100vh;
        top:0;
        left:0;
        z-index: 10;
        overflow: hidden;
        background: rgb(23,23,40);
        background: -moz-linear-gradient(left, rgba(23,23,40,1) 0%, rgba(25,25,38,1) 30%, rgba(25,25,38,1) 70%, rgba(23,23,40,1) 100%);
        background: -webkit-linear-gradient(left, rgba(23,23,40,1) 0%,rgba(25,25,38,1) 30%,rgba(25,25,38,1) 70%,rgba(23,23,40,1) 100%);
        background: linear-gradient(to right, rgba(23,23,40,1) 0%,rgba(25,25,38,1) 30%,rgba(25,25,38,1) 70%,rgba(23,23,40,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#171728', endColorstr='#171728',GradientType=1 );

    .center {
            position: absolute;
            top: 50%;
            left: 50%;

            svg {
                position: relative;
                width: 180px;
            }
        }
    }

    .st0 {
        fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;
    }

    .st1 {
        animation: eyes 1s infinite ease-in-out;
        fill: #FFFFFF;
    }
</style>
