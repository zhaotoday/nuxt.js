import { useNuxtApp } from "#imports";

export default {
  async setup() {
    const { $consts } = useNuxtApp();
    const { params } = useRoute();

    const title = {
      ergonomic: "工学队伍",
      medicine: "医学队伍",
    }[params.subpage];

    const { data } = await useFetch($consts.API_URL + "/public/teamMembers", {
      params: {
        where: JSON.stringify({ path: `team/${params.subpage}` }),
        order: JSON.stringify([["order", "ASC"]]),
      },
    });

    return {
      title,
      data,
    };
  },
};