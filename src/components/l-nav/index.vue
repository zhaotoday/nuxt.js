<template>
  <div class="l-nav__wrap">
    <ul class="l-nav c-container o-grid">
      <li
        v-for="(item1, index1) in menus"
        :key="index1"
        class="l-nav__item o-grid__cell"
        :class="{ 'is-active': isActive(item1.path) }"
      >
        <a :href="item1.path" class="l-nav__link">{{ item1.title }}</a>
        <ul class="b-drop">
          <li
            v-for="(item2, index2) in item1.children"
            :key="index2"
            class="b-drop__item"
          >
            <a class="b-drop__link" :href="item2.path">{{ item2.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
