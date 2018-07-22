<template>
    <div id="settings">
        <div class="page">
            <div class="container margin-top">
                <div class="row">
                    <div class="col-12">
                        <h1>Settings</h1>
                        <h2>Welcome to your settings page</h2>
                        <p>This is your settings page, since this is twitch lite the only settings you can edit is the search limit and the incremental search. Have fun!</p>
                    </div>
                </div>
            </div>
            <div class="container settings">
                <div class="row">
                    <div class="col-12">
                        <label>Search Limit</label>
                        <select v-model="searchLength">
                            <option v-for = "length in possibleSearchLengths" :selected="length == searchLength" :value="length" >
                                {{length}}
                            </option>
                        </select>
                    </div>
                    <div class="col-12 small-margin-top">
                        <label>Incremental Search</label>
                        <select v-model="activateIncremental">
                            <option :selected="activateIncremental == false" :value="false" >
                                Deactivated
                            </option>
                            <option :selected="activateIncremental == true" :value="true" >
                                Activated
                            </option>
                        </select>
                        <span class="warning">Warning: This will only work on the homepage</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from '@/util/cookies'
import Meta from '@/util/Meta'
export default {
  name: 'Settings',
  metaInfo: new Meta('Settings'),
  data () {
    return {
      searchLength: Cookies.getCookie('searchLength') ? Cookies.getCookie('searchLength') : 10,
      possibleSearchLengths: [10, 25, 50],
      activateIncremental: Cookies.getCookie('incremental') ? Cookies.getCookie('incremental') : false
    }
  },
  watch: {
    searchLength: function () {
      Cookies.setCookie('searchLength', this.searchLength, 30)
    },
    activateIncremental: function () {
      Cookies.setCookie('incremental', this.activateIncremental, 30)
    }
  }
}
</script>

<style lang="scss" scoped>
#settings {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}

.page {
    .margin-top {
        position: relative;
        top: 80px;
    }

    .settings {
        position: relative;
        margin-top: 120px;
        margin-bottom: 80px;
    }
}

label {
    font-size: 1.4em;
    opacity: 0.8;
    text-shadow: 0 0 10px rgba(255,255,255,0.3);
}

select {
    width: 100%;
    font-size: 1.8em;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255,255,255,0.8);
    border-left: 0;
    background: transparent;
    color: #f5f5f5;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: 5px;

    &::-ms-expand {
         display: none;
     }

    option {
        color: #111;
    }
}

h1 {
    text-shadow: 0 0 10px rgba(255,255,255,0.3);

}

h2 {
    font-size: 1.6em;
    opacity: 0.8;
    text-shadow: 0 0 10px rgba(255,255,255,0.3);
}

p {
    opacity: 0.6;
}

.small-margin-top {
    margin-top: 30px;
}

.warning {
    margin-top: 10px;
    color: #ff371a;
    font-size: 0.9em;
}
</style>
