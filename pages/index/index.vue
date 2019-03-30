<template>
  <div class="p-index">
    <div class="pb-banner">
      <div class="c-header o-box">
        <CLogo />
        <CNavBar />
        <h1 class="pb-banner__title c3 fs42">福州力软 • 匠心品质</h1>
        <p class="pb-banner__desc c1 fs20">从概念到产品，最短几周的时间内，我们让您的伟大想法落地</p>
        <CQRCode />
      </div>
    </div>
    <div class="pb-panel u-tac">
      <h2 class="pb-panel__title fs44">服务项目</h2>
      <p class="pb-panel__body c6">以项目为中心，为企业谋发展</p>
    </div>
    <CServices />
    <div class="pb-panel u-tac">
      <h2 class="pb-panel__title fs44">合作案例</h2>
      <p class="pb-panel__body c6">我们用最专业 诚恳的态度开服务我们的用户</p>
    </div>
  </div>
</template>

<script>
import CLogo from '~/components/logo'
import CNavBar from '~/components/nav-bar'
import CQRCode from '~/components/qrcode'
import CServices from '~/components/services'

export default {
  components: {
    CLogo,
    CNavBar,
    CQRCode,
    CServices
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
