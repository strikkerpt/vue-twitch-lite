<template>
    <transition name="fade">
        <div id="searchBar">
            <label>What kind of stream are you looking for?</label>
            <input :placeholder="holder" v-model="$store.state.Search.searchQuery" @keyup.enter="search"/>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'
/**
 * This is the base SearchBar used in the homepage
 */
export default {
  name: 'SearchBarMain',
  data () {
    return {
      holder: ''
    }
  },
  methods: {
    search: function (event) {
      event.target.blur()
      return this.$store.dispatch('searchStreams')
    },
    placeholder: function () {
      let placeholders = this.$config.application.search.placeholders
      this.holder = placeholders[Math.floor(Math.random() * placeholders.length)]
    }
  },
  computed: {
    ...mapGetters({
      searchQuery: 'getSearchQuery'
    })
  },
  watch: {
    searchQuery: function () {
      if(this.$cookies.getCookie('incremental') === 'true') {
        this.$store.dispatch('searchStreams')
      }
    }
  },
  beforeMount () {
    this.placeholder()
  }
}
</script>

<style lang="scss" scoped>
#searchBar {
    margin-bottom: 60px;
    text-align: center;

    label {
        opacity: 0.8;
        font-size: 1.2em;
        text-shadow: 0 0 10px rgba(255,255,255,0.3);
    }

    input {
        width: 100%;
        color: #ccc;
        background: transparent;
        border: 0;
        font-size: 2em;
        text-align: center;
        font-weight: bold;

        @media only screen and (max-width : 768px) {
            font-size: 1.4em;
        }
    }
}
</style>
