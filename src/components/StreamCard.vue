<template>
    <router-link tag="div" class="col-12 col-sm-6 col-md-4" v-bind:to="'/stream/' + stream.channel.name">
        <div class="stream-card" @mouseenter="changeBackground(stream.preview.large)" @mouseleave="removeBackground()">
            <div class="thumb">
                <div class="channel-logo">
                    <img :src="stream.channel.logo" />
                </div>
                <div class="overlay"></div>
                <div class="background" :style="'background-image: url(' + stream.preview.medium + ');'"></div>
            </div>
            <div class="info">
                <div class="row">
                    <div class="col-12 channel-status">{{ stream.channel.status }}</div>
                    <div class="col-12 channel-views">{{ stream.viewers }} Viewers</div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
  /**
   * This is the Stream Card Component where we can display some stream status and redirect the user to the stream
   */
  export default {
  name: 'StreamCard',
  props: ['stream'],
  methods: {
    changeBackground: function (img) {
      return this.$store.dispatch('updateBackground', img)
    },
    removeBackground: function () {
      return this.$store.dispatch('updateBackground', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.stream-card {
    transition: all .5s;
    position: relative;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
        transform: scale(1.02);
        opacity: 1;

        .overlay {
            transition: background-position .5s;
            background-position: 50px;
        }
     }

    .thumb {
        position: relative;
        padding-top: 56.25%;
        margin-bottom: 15px;
        background: rgba(0,0,0,0.2)
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-size: cover;
    }

    .overlay {
        transition: background-position .5s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: -moz-linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%);
        background: -webkit-linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.65) 100%);
        background: linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,0.65) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=1 );
        background-size: calc(100% + 50px);
        background-position: 0;
        background-repeat: no-repeat;
    }

    .channel-logo {
        position: absolute;
        width: 15%;
        top: 0;
        right: 0;
        z-index: 3;

        img {
            width: 100%;
        }
    }

    .channel-status {
        font-size: 0.9em;
        font-weight: bold;
    }

    .channel-views {
        font-size: 0.9em;
        font-weight: 300;
    }
}
</style>
