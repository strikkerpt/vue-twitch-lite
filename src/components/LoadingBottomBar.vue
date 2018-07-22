<template>
    <div id="loading-bottom" v-if="$store.state.Loading.searchLoading">
        <div class="bar"></div>
    </div>
</template>

<script>
export default {
  name: 'LoadingBottomBar'
}
</script>

<style lang="scss" scoped>
    #loading-bottom {
        position: fixed;
        width: 100%;
        height: 5px;
        bottom: 0;
        left: 0;
        pointer-events: none;
        z-index: 4;

        .bar {
            position: absolute;
            width: 0;
            height: 5px;
            background: #a3c832;
            -webkit-animation: load 2s infinite ease-in-out; /* Safari 4.0 - 8.0 */
            animation: load 2s infinite ease-in-out;
        }
    }

    @keyframes load {
        0% {
            width: 0;
            left: 0;
            right: unset;
        }
        49% {
            left: 0;
            right: unset;
        }
        50% {
            width: 100%;
            right: 0;
            left: unset;
        }
        100% {
            width: 0;
            right: 0;
            left: unset;
        }
    }
</style>
