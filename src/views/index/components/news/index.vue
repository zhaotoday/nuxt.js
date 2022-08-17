<template>
  <div class="b-news c-panel">
    <div class="c-panel__head bg-g3">
      <div class="c-panel__title">
        <i class="c-iconfont c-iconfont--news-filled"></i>
        <span>新闻快讯</span>
      </div>
      <div class="c-panel__extra">
        <a href="/information/news">更多</a>
      </div>
    </div>
    <div class="c-panel__body">
      <img class="b-news__image u-ofc" src="/images/index/news/demo.jpg" />
      <div class="b-list">
        <a
          v-for="item in data.data.items"
          :key="item.id"
          :href="`/information/news/${item.id}`"
        >
          <span class="b-list__title">{{ item.title }}</span>
          <span class="b-list__time">
            {{ $time.getDate(item.createdAt) }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
