import menus from "./utils/menus.json";
import { useRoute } from "#imports";

export default {
  setup() {
    const { path } = useRoute();

    const isActive = (parentPath) => {
      return parentPath.split("/")[1] === path.split("/")[1];
    };

    return {
      menus,
      isActive,
    };
  },
};
