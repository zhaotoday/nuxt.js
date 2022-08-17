<template>
  <div class="v-research-area-list c-container bg-white u-shadow u-pb50">
    <l-breadcrumb title="科学研究">
      <a href="/">首页</a> / 科学研究 / 研究方向
    </l-breadcrumb>
    <l-sidebar />
    <l-main title="研究方向" has-sidebar>
      <div class="c-content">
        <div class="c-content__body">
          <div class="b-list">
            <a
              v-for="item in data.data.items"
              :key="item.id"
              class="b-list__item u-mb20 u-shadow"
              :href="`/research/area/${item.id}`"
            >
              <img
                class="b-list__image u-br4 u-ofc"
                :src="$helpers.getFileUrl({ id: item.coverFileId })"
              />
              <div class="b-list__body">
                <h2 class="u-lh1 fs18 u-fwb u-pb10">{{ item.name }}</h2>
                <p class="fs16 t-g7">{{ item.summary || "准备中..." }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
