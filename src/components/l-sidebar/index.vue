<template>
  <div class="l-sidebar">
    <a
      v-for="(item, index) in menus[menuIndex].children"
      :key="index"
      class="l-sidebar__item"
      :class="{ 'is-active': isActive(item.path) }"
      :href="item.path"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
