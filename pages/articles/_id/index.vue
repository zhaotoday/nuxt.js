<template>
  <div class="p-index">
    <p>index page</p>
    <p>{{ JSON.stringify(detail) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  asyncData () {
    return { a: 3 }
  },
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
