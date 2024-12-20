import { useNuxtApp } from "#imports";

export default {
  async setup() {
    const { $consts } = useNuxtApp();
    const { path } = useRoute();

    const { data } = await useFetch(
      $consts.API_URL + "/public/contents/actions/findByPath",
      {
        method: "POST",
        body: { path: path.substr(1) },
      }
    );

    const [title1, title2] = data.value.data.title.split("/");

    return {
      data,
      title1,
      title2,
    };
  },
};
