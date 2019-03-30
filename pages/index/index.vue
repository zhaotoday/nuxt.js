<template>
  <div class="p-index">
    <div class="pb-banner">
      <div class="c-header o-box">
        <c-logo />
        <c-nav-bar />
        <h1 class="pb-banner__title c3 fs42">福州力软 • 匠心品质</h1>
        <p class="pb-banner__desc c1 fs20">从概念到产品，最短几周的时间内，我们让您的伟大想法落地</p>
        <CQRCode />
      </div>
    </div>
    <c-services />
    <c-cases />
    <c-footer />
  </div>
</template>

<script>
import CLogo from '~/components/logo'
import CNavBar from '~/components/nav-bar'
import CQRCode from '~/components/qrcode'
import CServices from './blocks/services'
import CCases from './blocks/cases'
import CFooter from '~/components/footer'

export default {
  components: {
    CLogo,
    CNavBar,
    CQRCode,
    CServices,
    CCases,
    CFooter
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
