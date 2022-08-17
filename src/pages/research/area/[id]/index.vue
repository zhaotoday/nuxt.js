<template>
  <div class="v-team-detail c-container bg-white u-shadow u-pb50">
    <l-breadcrumb title="科学研究">
      <a href="/">首页</a> / 科学研究 / 研究方向
    </l-breadcrumb>
    <l-sidebar />
    <l-main title="研究方向" has-sidebar>
      <div class="c-content">
        <div class="c-content__body">
          <h2 class="c-content__title">{{ data.data.name }}</h2>
          <div
            class="c-content__body s-cms-content"
            v-html="data.data.content || '准备中...'"
          ></div>
        </div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
