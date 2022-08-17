import Ads from "./components/ads/index.vue";
import News from "./components/news/index.vue";
import Team from "./components/team/index.vue";
import Notice from "./components/notice/index.vue";
import Reports from "./components/reports/index.vue";
import { useNuxtApp } from "#imports";

export default {
  components: {
    "b-ads": Ads,
    "b-news": News,
    "b-team": Team,
    "b-notice": Notice,
    "b-reports": Reports,
  },
  async setup() {
    const { $consts } = useNuxtApp();
    const { data } = await useFetch($consts.API_URL + "/public/ads");

    return {
      data,
    };
  },
};
