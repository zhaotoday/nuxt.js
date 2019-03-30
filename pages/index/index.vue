<template>
  <div class="p-index">
    <div class="pb-banner">
      <div class="c-header o-box">
        <CLogo />
        <CNavBar />
      </div>
    </div>
  </div>
</template>

<script>
import CLogo from '~/components/logo'
import CNavBar from '~/components/nav-bar'

export default {
  components: {
    CLogo,
    CNavBar
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
