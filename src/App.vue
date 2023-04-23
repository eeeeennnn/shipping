<template>
  <div id="app">
    <button @click="changeLangEvent()">中英文切换</button>
    <topNav></topNav>
    <router-view />
  </div>
</template>

<script>
import topNav from "@/components/TopNav.vue";
export default {
  name: "",
  data() {
    return {
      lang: true,
    };
  },
  components: { topNav },
  methods: {
    changeLangEvent() {
      console.log("changeLangEvent");
      this.$confirm("确定切换语言吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // type: "warning",
      })
        .then(() => {
          if (this.$i18n.locale === "cn") {
            this.$i18n.locale = "en"; //关键语句
            console.log(this.$i18n.locale);
          } else {
            this.$i18n.locale = "cn"; //关键语句
            console.log(this.$i18n.locale);
          }
        })
        .catch(() => {
          console.log("catch");
          this.$message({
            type: "info",
          });
        });
    },
  },
};
</script>


<style>
#app {
  /* width: 1920px; */
  padding: 0;
  margin: 0;
  text-overflow: ellipsis;
  background-color: #fafafa;
}
* {
  padding: 0;
  margin: 0;
}
#content {
  width: 1272px;
  overflow: hidden;
  margin: auto;
}
</style>
