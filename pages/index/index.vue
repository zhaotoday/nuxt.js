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
    <PBProjects />
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
import PBProjects from './blocks/projects'
import PBServices from './blocks/services'
import PBCases from './blocks/cases'
import PBArticles from './blocks/articles'
import CFooter from '~/components/footer'

export default {
  head () {
    return {
      title: '福州力软信息科技有限公司_福州网络公司_福州软件开发_福州小程序开发_福州商城开发',
      meta: [
        {
          name: 'description',
          content: '福州力软信息科技有限公司成立于 2015 年 11 月 24 日，是福州新崛起的移动互联网服务提供商，为中小企业提供小程序开发、商城开发、公众号 H5 开发、App 开发、网站开发等服务。'
        }
      ]
    }
  },
  components: {
    CLogo,
    CNavBar,
    CQRCode,
    PBProjects,
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
