<template>
  <div class="v-information-list c-container bg-white u-shadow u-pb50">
    <l-breadcrumb title="信息发布">
      <a href="/">首页</a> / 信息发布 / {{ title }}
    </l-breadcrumb>
    <l-sidebar />
    <l-main :title="title" has-sidebar>
      <div class="c-content">
        <div class="c-content__body">
          <div class="c-content__title">{{ data.data.title }}</div>
          <div class="c-content__desc">
            发布时间：{{ $time.getTime(data.data.createdAt) }}
          </div>
          <div
            class="c-content__body s-cms-content"
            v-html="data.data.content"
          ></div>
        </div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>
