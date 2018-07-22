<template>
  <div id="app">
    <div v-if="$store.state.Loading.entryLoading">
      <transition name="fade">
      <Loading></Loading>
      </transition>
    </div>
    <div v-else>
      <Header></Header>
      <transition name="fade">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
      <LoadingBottomBar></LoadingBottomBar>
    </div>
  </div>
</template>

<script>
import Header from '@/components/partials/Header'
import LoadingBottomBar from '@/components/LoadingBottomBar'
import Loading from '@/components/Loading'
/**
 * This is the main view loaded by Vue
 */
export default {
  name: 'App',
  components: {
    Header,
    LoadingBottomBar,
    Loading
  },
  methods: {
    entryLoading () {
      return setTimeout(() => {
        this.$store.dispatch('updateEntry', false)
      }, 3000)
    }
  },
  created() {
    this.entryLoading()
  }
}
</script>

<style>
#app {
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
