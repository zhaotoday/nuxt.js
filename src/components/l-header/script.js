import { useAuth } from "@/composables/use-auth";
import { eventBus } from "@/utils/event-bus";

export default {
  props: {
    path: String,
  },
  setup() {
    const { loggedIn } = useAuth();

    const gotoScratch = () => {
      eventBus.emit("show-account", { type: "scratch" });
    };

    return {
      loggedIn,
      gotoScratch,
    };
  },
};
