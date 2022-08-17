import { useNuxtApp } from "#imports";

export default {
  async setup() {
    const { $consts } = useNuxtApp();
    const { params } = useRoute();
    const { data } = await useFetch(
      `${$consts.API_URL}/public/researchAreas/${params.id}`
    );

    return {
      data,
    };
  },
};
