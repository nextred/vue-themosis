<template>
  <div class="article-container">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 ">
          <div class="img-div">
            <img v-bind:src="article['_embedded']['wp:featuredmedia'][0]['source_url'] ? article['_embedded']['wp:featuredmedia'][0]['source_url'] : default_img">
            <clazy-load src="https://baconmockup.com/400/400/">
              <transition name="fade">
                <!-- img v-bind:src="article.multimedia[0].url" -->
                <img v-bind:src="article['_embedded']['wp:featuredmedia'][0]['source_url']">
              </transition>
              <transition name="fade" slot="placeholder">
                <div slot="placeholder">
                  Loading....
                </div>
              </transition>
            </clazy-load>
          </div>
        </div>
        <div class="col-sm-6 content">
          <v-ons-card style="padding: 60px">
            <div class="title"> {{article.title.rendered}} </div>
            <div class="abstract" v-html = "article.excerpt.rendered"></div>
            <a class="pull-right">read more ...</a>
          </v-ons-card>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Politique',
  props: ['article'],
  data () {
    return {
      msg: 'Welcome to ArtcileCmp section',
      default_img: 'https://baconmockup.com/400/400/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 250px;
    width: 100%;
    margin-top: 20px;
  }
  .article-container{
    margin: 20px;
    border: 2px solid green;
    padding: 10px;
    text-align: justify;
  }
  .title{
    font-weight: bold;
  }
  .abstract{
    padding: 0px;
    text-align: justify;
  }
  .content{
    padding: 10px;
  }
  .img-div{
    text-align: center;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
