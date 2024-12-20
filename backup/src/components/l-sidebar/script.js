import menus from "@/components/l-nav/utils/menus.json";

export default {
  setup() {
    const { path } = useRoute();

    const pathSplit = path.split("/");

    const currentPath = `/${pathSplit[1]}/${pathSplit[2]}`;

    const menuIndex = computed(() =>
      menus.findIndex((menu) => menu.path.split("/")[1] === pathSplit[1])
    );

    const isActive = (path) => currentPath === path;

    return {
      menus,
      menuIndex,
      isActive,
    };
  },
};
