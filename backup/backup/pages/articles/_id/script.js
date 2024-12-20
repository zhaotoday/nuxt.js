import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: mapState({
    detail: state => state.articles.detail
  })
})
export default class extends Vue {
  head() {
    return {
      title: this.detail.title
    };
  }

  async fetch({ store, params }) {
    await store.dispatch("articles/getDetail", { id: params.id });
  }
}
