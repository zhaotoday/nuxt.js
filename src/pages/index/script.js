import { useHead } from "nuxt/app";
import BSchemes from "./components/schemes/index.vue";

export default {
  components: {
    BSchemes,
  },
  async setup() {
    useHead({
      title: "福州力软信息科技有限公司",
    });
  },
};
