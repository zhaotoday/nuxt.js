<template>
  <div class="p-articles-list">
    <h1>articles list page</h1>
    <p>{{ JSON.stringify(list) }}</p>
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
  async fetch ({ store, app }) {
    await store.dispatch('articles/getList', {
      offset: 0,
      limit: app.$consts.PAGE_SIZE
    })
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
