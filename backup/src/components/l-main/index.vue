<template>
  <div class="l-main" :class="{ 'has-sidebar': hasSidebar }">
    <h2 class="l-main__title">{{ title }}</h2>
    <div class="l-main__body">
      <slot />
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
