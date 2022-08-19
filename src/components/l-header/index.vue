<template>
  <ul class="l-header__nav">
    <li :class="{ 'is-active': path === '/' }" @click="$router.push('/')">
      首页
    </li>
    <li
      :class="{ 'is-active': path === '/course' }"
      @click="$router.push('/course')"
    >
      课程
    </li>
    <li
      :class="{
        'is-active': path.split('/')[1] === 'platform',
      }"
      @click="$router.push('/platform')"
    >
      平台
    </li>
  </ul>
  <div class="l-header__link">
    <span @click="gotoScratch">创建AI案例</span>
    <span
      v-if="loggedIn()"
      class="t-warning"
      @click="$router.push({ path: '/uc' })"
    >
      个人中心
    </span>
  </div>
</template>

<script src="./script.js"></script>
