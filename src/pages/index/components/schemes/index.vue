<template>
  <div class="b-schemes bg-white">
    <div class="c-block c-container">
      <div class="c-block__title">小程序+APP+代运营+精准营销解决方案</div>
      <div class="c-block__extra">从软件开发到营销，为你打造一站式解决方案</div>
      <ul>
        <li v-for="(item1, index1) in 3" :key="index1">
          <div class="b-block">
            <div class="b-block__icon" :class="`is-${index1 + 1}`">
              <div class="b-block__title fs18 u-fwb">小程序定制开发</div>
              <div class="b-block__desc fs14">
                根据需求和行业特性，进行功能开发，微信公众号、小程序、H5定制开发等
              </div>
            </div>
            <ul class="b-list">
              <li
                v-for="(item2, index2) in 3"
                :key="index2"
                class="u-lh1"
                :class="`is-${index1 + 1}-${index2 + 1}`"
              >
                公众号
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
