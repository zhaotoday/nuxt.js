<template>
  <div class="pb-panel">
    <div class="u-tac">
      <h2 class="pb-panel__title fs44">行业动态</h2>
      <p class="pb-panel__body c6">以敏捷的开发方式，为您提供成熟的解决方案</p>
    </div>
    <ul class="pb-articles o-box o-grid">
      <li
        v-for="item1 in [1, 2, 3]"
        :key="item1"
        class="o-grid__cell">
        <dl>
          <dt class="pb-articles__img"></dt>
          <dd
            v-for="item2 in [1, 2, 3, 4, 5]"
            :key="item2"
            class="pb-articles__item">
            <span class="bgc3 c1">2015-03-30</span>
            <a
              class="c5"
              href="#">
              基于 vue-cli + iView 的 Vue js 后台管理系统
            </a>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CArticles'
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
