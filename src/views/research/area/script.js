import { useNuxtApp } from "#imports";

export default {
  async setup() {
    const { $consts } = useNuxtApp();
    const { data } = await useFetch($consts.API_URL + "/public/researchAreas", {
      params: {
        order: JSON.stringify([["order", "ASC"]]),
      },
    });

    return {
      data,
    };
  },
};
