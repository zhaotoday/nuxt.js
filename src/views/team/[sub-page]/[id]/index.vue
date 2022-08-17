<template>
  <div class="v-team-detail c-container bg-white u-shadow u-pb50">
    <l-breadcrumb title="研究队伍">
      <a href="/">首页</a> / 研究队伍 / {{ title }}
    </l-breadcrumb>
    <l-sidebar />
    <l-main :title="title" has-sidebar>
      <div class="c-content">
        <div class="c-content__body">
          <div class="b-user">
            <img
              class="b-user__avatar u-ofc u-br4 u-shadow"
              :src="$helpers.getFileUrl({ id: data.data.avatarFileId })"
            />
            <div class="b-user__info">
              <table class="c-table">
                <tr>
                  <td class="b-user__label">姓名</td>
                  <td>{{ data.data.name }}</td>
                </tr>
                <tr>
                  <td class="b-user__label">性别</td>
                  <td>
                    {{
                      data.data.gender
                        ? $helpers.getItem(
                            $enums.Gender,
                            "value",
                            data.data.gender
                          )["label"]
                        : ""
                    }}
                  </td>
                </tr>
                <tr>
                  <td class="b-user__label">出生年月</td>
                  <td>{{ data.data.birthday }}</td>
                </tr>
                <tr>
                  <td class="b-user__label">单位</td>
                  <td>{{ data.data.unit }}</td>
                </tr>
                <tr>
                  <td class="b-user__label">学位</td>
                  <td>
                    {{
                      data.data.degree
                        ? $helpers.getItem(
                            $enums.Degree,
                            "value",
                            data.data.degree
                          )["label"]
                        : ""
                    }}
                  </td>
                </tr>
                <tr>
                  <td class="b-user__label">职称</td>
                  <td>{{ data.data.title }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div
            class="s-cms-content u-pt20"
            v-html="data.data.introduction"
          ></div>
        </div>
      </div>
    </l-main>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
