import { useNuxtApp } from "#imports";

export default {
  async setup() {
    const { $consts } = useNuxtApp();
    const { data } = await useFetch($consts.API_URL + "/public/articles", {
      params: {
        where: JSON.stringify({ path: "information/notice" }),
      },
    });

    return {
      data,
    };
  },
};
