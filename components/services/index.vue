<template>
  <ul class="c-services o-box o-grid">
    <li
      v-for="item in items"
      :key="item.id"
      class="c-services__item o-grid__cell">
      <h3 class="fs26">{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CServices',
  data () {
    return {
      items: [
        {
          id: 1,
          title: '基础运维',
          desc: '数据迁移、网站设置、软件安装，故障排查、众多运维服务您来选'
        },
        {
          id: 2,
          title: '企业部署',
          desc: '专业工程师帮您部署企业高性能、高可用解决方案'
        },
        {
          id: 3,
          title: '开发设计',
          desc: '网站设计、软件开发、平面设计、名片海报设计等'
        },
        {
          id: 4,
          title: '推广营销',
          desc: '名家高手为您定制网站和企业品牌推广方案'
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
