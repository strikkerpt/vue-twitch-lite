<template>
    <div id="homepage">
        <transition name="fade-bg">
            <div class="searched-background" v-if="$store.state.Background.hoverStream" :style="'background-image: url(' + $store.state.Background.hoverStream + ');'">
            </div>
        </transition>
        <div class="page">
            <div class="container">
                <SearchBar></SearchBar>
            </div>
            <div class="container margin-bottom">
                <div v-if="$store.state.Search.streams">
                    <transition-group name="fade" tag="div" class="row" mode="out-in">
                        <StreamCard v-for="stream in $store.state.Search.streams" :key="stream._id" v-bind:stream="stream"></StreamCard>
                    </transition-group>
                </div>
                <div class="row" v-else>
                    <NoStreamsAvailable></NoStreamsAvailable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Config from '@/config/config'
import StreamCard from '@/components/StreamCard'
import SearchBar from '@/components/SearchBarMain'
import NoStreamsAvailable from '@/components/NoStreamsAvailable'
import Meta from '@/util/Meta'
export default {
  name: 'Homepage',
  metaInfo: new Meta('Homepage'),
  components: {
    StreamCard,
    SearchBar,
    NoStreamsAvailable
  }
}
</script>

<style lang="scss" scoped>
    #homepage {
        position: absolute;
        width: 100%;
    }

    .searched-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        pointer-events: none;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: overlay;
        background-position: center top;
        transition: opacity .5s;
        background-color: rgb(23,23,40);
        opacity: 0.4
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-bg-enter-active, .fade-bg-leave-active {
        transition: opacity .2s;
    }
    .fade-bg-enter, .fade-bg-leave-to {
        opacity: 0;
    }
</style>
