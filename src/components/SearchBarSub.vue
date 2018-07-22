<template>
    <div id="searchBar" class="text-left">
        <input :placeholder="holder" v-model="$store.state.Search.searchQuery" @keyup.enter="search"/>
    </div>
</template>

<script>
  /**
   * This is the top bar used when the user isn't in the homepage, but it can be used in other places in the future.
   * Searches will redirect the user to the homepage
   */
  export default {
  name: 'SearchBarSub',
  data () {
    return {
      holder: ''
    }
  },
  methods: {
    search: function () {
      this.$store.dispatch('searchStreams')
      return this.$router.push('/')
    },
    placeholder: function () {
      let placeholders = this.$config.application.search.placeholders
      this.holder = placeholders[Math.floor(Math.random() * placeholders.length)]
    }
  },
  beforeMount () {
    this.placeholder()
  }
}
</script>

<style lang="scss" scoped>
#searchBar {
    @media only screen and (max-width : 768px) {
        width: 50%;
    }
}

input {
    background: transparent;
    color: #f5f5f5;
    font-size: 0.9em;
    padding: 5px 10px;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255,255,255,0.7);
    border-left: 0;
    width: 100%;
}
</style>
