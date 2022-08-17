<template>
  <div class="v-contact c-container bg-white u-shadow u-pb50">
    <l-breadcrumb title="联系我们">
      <a href="/">首页</a> / 联系我们
    </l-breadcrumb>
    <l-main title="联系我们">
      <div class="c-content">
        <div class="c-content__body">
          <div class="s-cms-content u-pb10" v-html="data.data.content"></div>
          <iframe
            width="1192"
            height="460"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://surl.amap.com/1aMJn9Y12ccp"
          ></iframe>
        </div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>
