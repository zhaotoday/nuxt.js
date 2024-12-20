import mutations from "./mutations";
import actions from "./actions";

export default {
  state: () => ({
    list: {},
    detail: {}
  }),
  mutations,
  actions
};
