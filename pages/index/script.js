import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  head() {
    return {
      title: "标题",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "描述"
        }
      ]
    };
  }
}
