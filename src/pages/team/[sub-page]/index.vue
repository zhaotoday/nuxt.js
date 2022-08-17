<template>
  <div class="v-information-list c-container bg-white u-shadow u-pb50">
    <l-breadcrumb title="研究队伍">
      <a href="/">首页</a> / 研究队伍 / {{ title }}
    </l-breadcrumb>
    <l-sidebar />
    <l-main :title="title" has-sidebar>
      <div class="c-content">
        <div class="c-content__body">
          <div
            v-for="(item1, index1) in $helpers.page(data.data.items, 5)"
            :key="index1"
            class="c-members"
          >
            <a
              v-for="item2 in item1"
              :key="item2.id"
              class="c-members__item u-pb20"
              :href="`/team/${$route.params.subpage}/${item2.id}`"
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
              v-for="item3 in 5 - item1.length"
              :key="item3"
              class="c-members__item u-pb20"
            ></div>
          </div>
        </div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>
