<template>
  <div class="b-team c-panel">
    <div class="c-panel__head bg-g3">
      <div class="c-panel__title">
        <i class="c-iconfont c-iconfont--team-filled"></i>
        <span>研究队伍</span>
      </div>
      <div class="c-panel__extra">
        <a href="/team/ergonomic">更多</a>
      </div>
    </div>
    <div class="c-panel__body">
      <swiper
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
        }"
        :modules="modules"
        loop
      >
        <swiper-slide
          v-for="(item1, index1) in $helpers.page(data.data.items, 4)"
          :key="index1"
          class="c-members"
        >
          <a
            v-for="item2 in item1"
            :key="item2.id"
            class="c-members__item"
            :href="`/${item2.path}/${item2.id}`"
          >
            <img
              class="u-ofc u-br4 u-shadow"
              :src="$helpers.getFileUrl({ id: item2.avatarFileId })"
            />
            <p class="u-tac u-mt10 u-br4 fs16 t-white bg-secondary">
              {{ item2.name }}
            </p>
          </a>
          <div
            v-for="item3 in 4 - item1.length"
            :key="item3"
            class="c-members__item"
          ></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
