<template>
  <div class="pb-panel">
    <div class="u-tac">
      <h2 class="pb-panel__title fs42">开源项目</h2>
      <p class="pb-panel__body c6">以敏捷的开发方式，为您提供成熟的解决方案</p>
    </div>
    <ul class="pb-articles o-box o-grid">
      <li
        v-for="item1 in items"
        :key="item1.id"
        class="o-grid__cell">
        <dl>
          <dt class="pb-articles__img"></dt>
          <dd
            v-for="item2 in item1.children"
            :key="item2"
            class="pb-articles__item">
            <span class="bgc3 c1">2019-03-30</span>
            <a
              class="c5"
              :title="item2.title"
              :href="item2.url"
              target="_blank"
              rel="nofollow">
              {{ item2.title }}
            </a>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PBArticles',
  data () {
    return {
      items: [
        {
          id: 1,
          children: [
            {
              title: '基于 Vue CLI 3 + iView 的 Vue.js 后台管理系统',
              url: 'https://github.com/zhaotoday/iview'
            },
            {
              title: '基于 Koa.js 的 Node.js MVC 框架',
              url: 'https://github.com/zhaotoday/less.js'
            },
            {
              title: '使用 Nuxt.js 作为多页应用项目的 UI 渲染框架',
              url: 'https://github.com/zhaotoday/nuxt.js'
            }
          ]
        },
        {
          id: 2,
          children: [
            {
              title: '基于 mpVue 的小程序开发模板',
              url: 'https://github.com/zhaotoday/mpvue'
            },
            {
              title: '工作和学习过程中收集的实用的免费 API 集合',
              url: 'https://github.com/zhaotoday/free-apis'
            },
            {
              title: '微信小程序资料收集',
              url: 'https://github.com/zhaotoday/mini-program'
            }
          ]
        },
        {
          id: 3,
          children: [
            {
              title: '一个极简的轻量级 Sass 工具库',
              url: 'https://github.com/zhaotoday/sass-utils'
            },
            {
              title: '前端收藏夹',
              url: 'https://github.com/zhaotoday/frontend-favorites'
            },
            {
              title: '简易的 RESTful API 规范',
              url: 'https://github.com/zhaotoday/rest-api-guide'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
