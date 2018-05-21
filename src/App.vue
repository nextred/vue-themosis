<template>
  <div id="app">
    <!-- v-touch v-on:swipe="swipeHandler">
      <img src="./assets/logo.png">
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navBarId" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img alt="Brand" src="./assets/logo.png" class="brand">
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navBarId">
            <ul class="nav navbar-nav">
              <li><a href="#" ><router-link to = "/politique">Poltique</router-link></a></li>
              <li><a href="#" ><router-link to = "/culture">Culture</router-link></a></li>
              <li><a href="#" ><router-link to = "/sport">Sport</router-link></a></li>
            </ul>

          </div>
        </div>
      </nav>
      <router-view/>
    </v-touch -->
    <v-ons-page>
      <!-- v-ons-toolbar>
        <div class="center">{{ title }}</div>
      </v-ons-toolbar -->
      <v-ons-toolbar :style="swipeTheme">
        <div class="center">TestApp</div>
      </v-ons-toolbar>
      <v-ons-tabbar swipeable tab-border position="top"
        :tabs="tabs"
        :visible="true"
        :on-swipe="onSwipe"
        :tabbar-style="swipeTheme"
      >
      </v-ons-tabbar>
  </v-ons-page>
  </div>
</template>

<script>
import Politique from './components/Politique'
import Culture from './components/Culture'
import Sport from './components/Sport'

// Just a linear interpolation formula
const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10)
// RGB colors
const red = [244, 67, 54]
const green = [0, 255, 0]
const purple = [103, 58, 183]

export default {
  name: 'App',
  data () {
    return {
      activeIndex: 0,
      colors: red,
      animationOptions: {},
      tabs: [
        {
          page: Politique,
          label: 'politics',
          theme: red
        },
        {
          page: Culture,
          label: 'cultures',
          theme: green
        },
        {
          page: Sport,
          label: 'sports',
          theme: purple
        }
      ]
    }
  },
  methods: {
    swipeHandler (direction) {
      var path = this.$route.name
      var index = this.routes.indexOf(path)
      if (direction.direction === 4) {
        console.log(index)
        if (index !== 0) {
          // this.$router.push(this.routes[index - 1])
        }
      } else {
        console.log(index)
        if (index !== 2) {
          // this.$router.push(this.routes[index + 1])
        }
      }
    },
    onSwipe (index, animationOptions) {
      // Apply the same transition as v-ons-tabbar
      this.animationOptions = animationOptions
      // Interpolate colors
      const a = Math.floor(index)
      const b = Math.ceil(index)
      const ratio = index % 1
      this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio))
    }
  },
  computed: {
    title () {
      return this.tabs[this.activeIndex].label
    },
    swipeTheme () {
      return {
        backgroundColor: `rgb(${this.colors.join(',')})`,
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.brand{
  width: 35px;
  height: 35px;
}
</style>
