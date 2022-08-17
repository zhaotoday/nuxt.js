import { useNuxtApp } from "#imports";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  async setup() {
    const { $consts } = useNuxtApp();
    const { data } = await useFetch($consts.API_URL + "/public/teamMembers", {
      params: {
        order: JSON.stringify([["order", "ASC"]]),
      },
    });

    return {
      data,
      modules: [Autoplay, Pagination],
    };
  },
};
