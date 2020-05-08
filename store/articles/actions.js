import types from "./types";
import Model from "~/models/articles";

export default {
  async getList({ commit }, { query }) {
    const { data } = await new Model().GET({ query });

    commit(types.GET_LIST, { data });

    return data;
  },

  async getDetail({ commit }, { id }) {
    const { data } = await new Model().GET({ id });

    commit(types.GET_DETAIL, { data });

    return data;
  }
};
