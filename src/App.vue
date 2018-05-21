<template>
  <div id="app">
    <v-ons-page>
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
