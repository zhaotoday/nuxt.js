import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: mapState({
    list: state => state.articles.list
  })
})
export default class extends Vue {
  head() {
    return {
      title: "Articles List"
    };
  }

  async fetch({ store, app }) {
    await store.dispatch("articles/getList", {
      offset: 0,
      limit: app.$consts.PageSize
    });
  }
}
