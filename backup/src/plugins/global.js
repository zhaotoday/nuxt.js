import { defineNuxtPlugin } from "#app";
import { consts } from "~/utils/consts";
import { enums } from "~/utils/enums";
import { helpers } from "~/utils/helpers";
import time from "jt-time";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      consts,
      enums,
      helpers,
      time,
    },
  };
});
