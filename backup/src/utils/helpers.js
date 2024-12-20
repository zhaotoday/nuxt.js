import $helpers from "jt-helpers";
import { consts } from "~/utils/consts";

export const helpers = {
  ...$helpers,
  getFileUrl({ id }) {
    return `${consts.PUBLIC_API_URL}/public/files/${id}`;
  },
};
