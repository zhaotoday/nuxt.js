<template>
  <div class="v-information-list c-container bg-white u-shadow u-pb50">
    <l-breadcrumb title="信息发布">
      <a href="/">首页</a> / 信息发布 / {{ title }}
    </l-breadcrumb>
    <l-sidebar />
    <l-main :title="title" has-sidebar>
      <div class="c-content">
        <div class="c-content__body">
          <div v-if="data.data.items.length" class="b-list">
            <a
              v-for="item in data.data.items"
              :key="item.id"
              :href="`/${item.path}/${item.id}`"
            >
              <span class="b-list__title">{{ item.title }}</span>
              <span class="b-list__time">
                {{ $time.getDate(item.createdAt) }}
              </span>
            </a>
          </div>
          <div v-else>整理中...</div>
        </div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
