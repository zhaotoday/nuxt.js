import { useHead } from "nuxt/app";
import BBanner from "./components/banner/index.vue";
import BSchemes from "./components/schemes/index.vue";
import BSuperiorities from "./components/superiorities/index.vue";

export default {
  components: {
    BBanner,
    BSchemes,
    BSuperiorities,
  },
  async setup() {
    useHead({
      title: "福州力软信息科技有限公司",
    });
  },
};
