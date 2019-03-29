<template>
  <div class="p-index">
    <div class="pb-banner">
      <a class="c-logo" href="/">
        <i class="c-logo__icon iconfont icon-cloud c3 _fs40"></i>
        <span class="c1 fs20">福州力软</span>
      </a>
    </div>
    <CComponent />
  </div>
</template>

<script>
import CComponent from '~/components/component'

export default {
  components: {
    CComponent
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
