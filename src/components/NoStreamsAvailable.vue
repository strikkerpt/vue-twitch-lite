<template>
    <transition name="fade">
        <div class="col-12 text-center">
            <i class="material-icons">warning</i>
            <p class="title">There is no streams for your search!</p>
            <p class="subtitle">Please try again.</p>
        </div>
    </transition>
</template>

<script>
  /**
   * This is a message error displayed when there is no streams available
   */
  export default {
  name: 'NoStreamsAvailable'
}
</script>

<style scoped>
.material-icons {
    color: #ff371a;
    text-shadow: 0 0 10px rgba(255, 48, 24, 0.4);
    font-size: 3.5em;
    margin-bottom: 30px;
}

.title {
    font-size: 1.2em;
    font-weight: bold;
}

.subtitle {
    opacity: 0.8;
}
</style>
