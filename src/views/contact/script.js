import { useNuxtApp } from "#imports";

export default {
  async setup() {
    const { $consts } = useNuxtApp();

    const { data } = await useFetch(
      $consts.API_URL + "/public/contents/actions/findByPath",
      {
        method: "POST",
        body: { path: "contact" },
      }
    );

    return {
      data,
    };
  },
};
