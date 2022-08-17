<template>
  <div class="u-p24">
    <div class="l-breadcrumb">
      <div class="l-breadcrumb__body">
        <p class="u-lh1 u-pb14 fs22">{{ title }}</p>
        <p class="u-lh1">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
