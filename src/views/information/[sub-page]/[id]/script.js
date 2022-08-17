import { useNuxtApp } from "#imports";

export default {
  async setup() {
    const { $consts } = useNuxtApp();
    const { params } = useRoute();

    const title = {
      news: "新闻快讯",
      notice: "通知公告",
    }[params.subpage];

    const { data } = await useFetch(
      `${$consts.API_URL}/public/articles/${params.id}`
    );

    return {
      title,
      data,
    };
  },
};
