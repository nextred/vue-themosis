<template>
  <v-ons-page>
    <div class="hello">
      {{msg}}
      <div v-for = "post in articles" v-bind:key="post.id" v-if = "articles !== null">
        <artcile-cmp v-bind:article = "post" v-if = "post._embedded['wp:term'][0].slug == 2"></artcile-cmp>
      </div>
      <div v-if = "articles === null">
        <i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import ArticleCmp from './ArticleCmp'
export default {
  name: 'Culture',
  components: {
    ArticleCmp,
    'artcile-cmp': ArticleCmp
  },
  data () {
    return {
      msg: 'Welcome to Culture section',
      articles: null
    }
  },
  mounted () {
    this.$http.get('http://localhost/wordpress/wp-json/wp/v2/posts?_embed')
      .then(response => { this.articles = response.data })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
