<template>
    <div id="header">
        <div class="container">
            <nav class="navbar">
                <router-link v-bind:to="'/'">
                    <div v-on:click="clean">
                        <img src="./../../assets/logo.svg" width="35px" />
                        <span>Lite</span>
                    </div>
                </router-link>
                <transition name="fade">
                    <SearchBar v-if="$route.name !== 'Homepage'"></SearchBar>
                </transition>
                <div class="text-right">
                    <router-link v-bind:to="'/settings/'"><i class="material-icons">settings</i></router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBarSub'
/**
 * This is a partial component, its used in the main view.
 */
export default {
  name: 'Header',
  components: {
    SearchBar
  },
  methods: {
    // When a user click on the logo on the homepage this will clean the Search state
    clean () {
      if (this.$route.name === 'Homepage') {
        this.$store.dispatch('cleanStreams')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
    position: relative;
    z-index: 9;
}

.navbar {
    top: 30px;
    padding-left: 0;
    padding-right: 0;
}
</style>
