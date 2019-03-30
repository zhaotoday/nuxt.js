<template>
  <div class="p-index">
    <div class="pb-banner">
      <div class="c-header o-box">
        <CLogo />
        <CNavBar />
        <h1 class="pb-banner__title u-tac c3 fs42">福州力软 • 匠心品质</h1>
        <p class="pb-banner__desc u-tac c1 fs18">从概念到产品，最短只需几周时间，我们让您的伟大想法落地</p>
        <CQRCode />
      </div>
    </div>
    <PBServices />
    <PBCases />
    <PBArticles />
    <CFooter />
  </div>
</template>

<script>
import CLogo from '~/components/logo'
import CNavBar from '~/components/nav-bar'
import CQRCode from '~/components/qrcode'
import PBServices from './blocks/services'
import PBCases from './blocks/cases'
import PBArticles from './blocks/articles'
import CFooter from '~/components/footer'

export default {
  components: {
    CLogo,
    CNavBar,
    CQRCode,
    PBServices,
    PBCases,
    PBArticles,
    CFooter
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
