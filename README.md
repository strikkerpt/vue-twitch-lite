# Vue Twitch Lite

> A lite version of twitch client made in vue.

First of all this project was built using the [vue-webpack-advanced](https://github.com/joZephhh/webpack-vue-advanced)template that already includes vue, vue-router, vue-meta, webpack and eslint.

You can watch a live result on: http://twitch.development.sinesio.eu/

Karma and Mocha are installed but I didn't made any unit tests (Check the Roadmap for things I would love to do in the future)

I invested between 16 hours to 20 hours in this learning exercice.

I used Vue because I wanted to learn a bit more about it by playing with the way lifecycles run and vuex states.

There is a project configuration file available at src/config/config.js so feel free to edit the twitch API key in case of error.

For animations and transitions I used mostly CSS combined with Vue transitions but you will need animeJS to run the entry loading for example.

For meta tagging I created a class that can be used with vue-meta.

At the build moment I'm using the prerender-spa-plugin to render the Homepage, Settings and Error pages since they are initially static and can be served right away.

I'm happy with the "final" result even if that there are some things missing but I needed to combine the time I had with the requirements and the user experience.

## Future Roadmap
* Preload images before showing the list
* Wait for stream data to fetch before removing the entry loading (For now its a setTimeOut of 3 seconds)
* Refactor SCSS elements that might be duplicated
* Display Error Messages/Pages in case of fetching errors.
* Use webpack to configurate env variables. (Instead of editing config.js)
* Unit Tests
* Fix all ESLint warnings/errors (For some reason --fix is not working)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```