<template>
  <div class="b-reports c-panel">
    <div class="c-panel__head bg-white">
      <div class="c-panel__title">
        <i class="c-iconfont c-iconfont--report-filled"></i>
        <span>研究方向</span>
      </div>
      <div class="c-panel__extra">
        <a href="/research/area">更多</a>
      </div>
    </div>
    <div class="c-panel__body">
      <div class="b-list">
        <a
          v-for="item in data.data.items"
          :key="item.id"
          :href="`/research/area/${item.id}`"
        >
          <p class="b-list__title">{{ item.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
