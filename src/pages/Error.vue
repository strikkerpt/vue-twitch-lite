<template>
    <div id="Error">
        <div class="page">
            <div class="container margin-top">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1>404 Error</h1>
                        <h2>Well something went wrong...</h2>
                        <p>The page you are trying to access doesn't exist, please try to search for a stream or go to the homepage.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Config from '@/config/config'
import Meta from '@/util/Meta'
export default {
  name: 'Error',
  metaInfo: new Meta('404 Error')
}
</script>

<style lang="scss" scoped>

    #Error {
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
</style>
