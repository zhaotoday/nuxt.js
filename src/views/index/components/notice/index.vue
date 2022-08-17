<template>
  <div class="b-notices c-panel">
    <div class="c-panel__head bg-white">
      <div class="c-panel__title">
        <i class="c-iconfont c-iconfont--notice-filled"></i>
        <span>通知公告</span>
      </div>
      <div class="c-panel__extra">
        <a href="/information/notice">更多</a>
      </div>
    </div>
    <div class="c-panel__body">
      <div class="b-list">
        <a
          v-for="item in data.data.items.filter((item, index) => index < 3)"
          :key="item.id"
          :href="`/information/notice/${item.id}`"
        >
          <div class="b-time__wrap">
            <div class="b-time u-tac">
              <div class="t-primary fs20 u-lh1 u-pb4">
                {{ $time.format(item.createdAt, "DD") }}
              </div>
              <div class="fs12 u-lh1">
                {{ $time.format(item.createdAt, "YYYY-MM") }}
              </div>
            </div>
          </div>
          <div class="b-list__title">{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
