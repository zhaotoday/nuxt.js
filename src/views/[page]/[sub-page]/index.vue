<template>
  <div class="v-sub-page c-container bg-white u-shadow u-pb50">
    <l-breadcrumb :title="title1">
      <a href="/">首页</a> / {{ title1 }} / {{ title2 }}
    </l-breadcrumb>
    <l-sidebar />
    <l-main :title="title2" has-sidebar>
      <div class="c-content">
        <div
          class="c-content__body s-cms-content"
          v-html="data.data.content"
        ></div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>
