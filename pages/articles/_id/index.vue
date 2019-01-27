<template>
  <div class="p-articles-detail">
    <h1>articles detail page</h1>
    <p>{{ JSON.stringify(detail) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: this.detail.title
    }
  },
  computed: mapState({
    detail: state => state.articles.detail
  }),
  async fetch ({ store, params }) {
    await store.dispatch('articles/getDetail', { id: params.id })
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
