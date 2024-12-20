import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/Projects/Github/nuxt.js/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}