<template>
  <div class="p-index">
    <h1>articles list</h1>
    <h2>{{ JSON.stringify(list) }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'articles list'
    }
  },
  computed: mapState({
    list: state => state.articles.list
  }),
  async fetch ({ store }) {
    await store.dispatch('articles/getList', {
      offset: 0,
      limit: 2
    })
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
