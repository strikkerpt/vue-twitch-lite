<template>
    <div id="stream" v-if="stream !== null">
        <div class="profile-header">
            <div class="information">
                <div class="container">
                    <div class="row">
                        <div class="col-4 col-sm-3 col-md-2 channel-logo"><img :src="stream.channel.logo" /></div>
                        <div class="col-8 col-sm-9 col-md-10">
                            <div class="vertical-center">
                                <div class="channel-name">
                                    {{stream.channel.name}}
                                </div>
                                <div class="channel-followers">
                                    {{stream.channel.followers}} Followers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container back">
                    <div class="row">
                        <div class="col-12">
                            <router-link v-bind:to="'/'"><i class="material-icons">arrow_back</i><span>Back</span></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
            <div class="background" :style="'background-image: url(' + stream.channel.profile_banner + ');'"></div>
        </div>
        <div class="container margin-bottom">
            <div class="row">
                <div class="col-12">
                    <div class="stream">
                        <iframe
                                :src="'http://player.twitch.tv/?channel=' + id"
                                frameborder="0"
                                scrolling="no"
                                allowfullscreen="true">
                        </iframe>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="stream-status">
                        {{stream.channel.status}}
                    </div>
                </div>
                <div class="col-12">
                    <div class="stream-viewers">
                        {{stream.viewers}} Viewers
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Config from '@/config/config'
import Meta from '@/util/Meta'
import Store from '@/store'
export default {
  name: 'Stream',
  metaInfo: new Meta('Stream'),
  data () {
    return {
      id: this.$route.params.id,
      stream: null
    }
  },
  methods: {
    requestData () {
      return new Promise(resolve => {
        let params = {
          client_id: Config.twitch.apiKey
        }
        Vue.prototype.$requests.get('streams/' + this.$route.params.id, params).then((response) => {
          this.stream = response.data.stream
          resolve()
        }).catch(() => {
          // TODO: Do nothing here, this will only update the status, if the API is not responding then let the old status displayed.
        })
      })
    },
    async pullingData () {
      let response = await this.requestData()

      setTimeout(() => {this.pullingData()}, Config.twitch.pullingTime)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.$store.dispatch('updateSearch', false)
    setTimeout(() => {this.pullingData()}, Config.twitch.pullingTime)
  },
  beforeRouteEnter (to, from, next) {
    Store.dispatch('updateSearch', true)
    let params = {
      client_id: Config.twitch.apiKey
    }
    Vue.prototype.$requests.get('streams/' + to.params.id, params).then((response) => {
      if (response.data.stream !== null) {
        next(vm => vm.stream = response.data.stream)
      } else {
        next('*')
      }
    }).catch(() => {
      next('*')
    })
  }
}
</script>

<style lang="scss" scoped>
    #stream {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

    .stream {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        margin-bottom: 15px;

        iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0; top: 0;
        }
    }

    .stream-status {
        font-size: 1.8em;
        font-weight: bold;

        @media only screen and (max-width : 480px) {
            font-size: 1.2em;
        }
    }

    .stream-viewers {
        font-size: 1.4em;

        @media only screen and (max-width : 480px) {
            font-size: 0.9em;
        }
    }

    .profile-header {
        position: relative;
        box-shadow: 0 10px 50px rgba(0,0,0,0.3);
        top: 0;
        left: 0;
        width: 100%;
        min-height: 350px;
        margin-bottom: 30px;

        .background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: rgba(0,0,0,0.3);
            background-size: cover;
            background-position: top center;
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+99&0.4+0,0.85+82 */
            background: -moz-linear-gradient(top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.85) 99%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.85) 82%,rgba(0,0,0,0.85) 99%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.85) 82%,rgba(0,0,0,0.85) 99%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66000000', endColorstr='#d9000000',GradientType=0 ); /* IE6-9 */
        }

        .information {
            top: 80%;
            position: absolute;
            z-index: 4;
            width: 100%;
            transform: translateY(-80%);

            .back {
                margin-top: 30px;

                a {
                    padding: 5px;
                }

                span {
                    top: 0;
                    position: absolute;
                    margin: 1px 5px;
                }
            }

            .channel-logo {

                img {
                    width: 100%;
                    min-width: 60px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.2);
                }
            }

            .vertical-center {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                .channel-name {
                    font-size: 1.8em;
                    text-shadow: 0 0 10px rgba(255,255,255,0.4);
                    text-transform: uppercase;

                    @media only screen and (max-width : 480px) {
                        font-size: 1.2em;
                    }
                }

                .channel-followers {
                    font-size: 1.3em;
                    opacity: 0.8;
                    text-shadow: 0 0 10px rgba(255,255,255,0.3);

                    @media only screen and (max-width : 480px) {
                        font-size: 0.9em;
                    }
                }
            }
        }
    }
</style>