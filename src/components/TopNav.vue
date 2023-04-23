<template>
  <div class="topNav">
    <div class="topNav_title" @click="backHome"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#4C4C4C"
      router
    >
      <el-submenu
        index="1"
        class="el-menu-items"
        popper-class="aaamenu"
        :popper-append-to-body="true"
      >
        <template slot="title">
          {{ $t("message.topNav.service.first") }}
        </template>
        <el-menu-item index="/service" default-active="#1f70f5">
          {{ $t("message.topNav.service.second.second_1") }}
        </el-menu-item>
        <el-menu-item index="/service">
          {{ $t("message.topNav.service.second.second_2") }}
        </el-menu-item>
      </el-submenu>
      <el-submenu
        index="2"
        popper-class="aaamenu"
        :popper-append-to-body="true"
      >
        <template slot="title">
          {{ $t("message.topNav.fleet.first") }}
        </template>
        <el-menu-item index="/fleet">
          {{ $t("message.topNav.fleet.second.second_1") }}
        </el-menu-item>
        <el-menu-item index="/fleet">
          {{ $t("message.topNav.fleet.second.second_2") }}
        </el-menu-item>
      </el-submenu>
      <el-submenu
        index="3"
        popper-class="aaamenu"
        :popper-append-to-body="true"
      >
        <template slot="title">
          {{ $t("message.topNav.cargo.first") }}
        </template>
        <el-menu-item index="/cargo">
          {{ $t("message.topNav.cargo.second.second_1") }}
        </el-menu-item>
        <el-menu-item index="/cargo">
          {{ $t("message.topNav.cargo.second.second_2") }}
        </el-menu-item>
      </el-submenu>
      <el-submenu
        index="4"
        popper-class="aaamenu"
        :popper-append-to-body="true"
      >
        <template slot="title">
          {{ $t("message.topNav.line.first") }}
        </template>
        <el-menu-item index="/line">
          {{ $t("message.topNav.line.second.second_1") }}
        </el-menu-item>
      </el-submenu>
      <el-submenu
        index="5"
        popper-class="aaamenu"
        :popper-append-to-body="true"
      >
        <template slot="title">
          {{ $t("message.topNav.partner.first") }}
        </template>
        <el-menu-item index="/partners">
          {{ $t("message.topNav.partner.second.second_1") }}
        </el-menu-item>
      </el-submenu>
      <el-submenu
        index="6"
        popper-class="aaamenu"
        :popper-append-to-body="true"
      >
        <template slot="title">
          {{ $t("message.topNav.contact.first") }}
        </template>
        <el-menu-item index="/contact">
          {{ $t("message.topNav.contact.second.second_1") }}
        </el-menu-item>
        <el-menu-item index="/contact">
          {{ $t("message.topNav.contact.second.second_2") }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isShowMenu: false,
      activeIndex: "1",
    };
  },
  components: {},
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
      console.log(this.isShowMenu);
    },
    handleSelect(key, keyPath) {},
    backHome() {
      this.$router.push("/");
      this.$router.go(0);
    },
  },
};
</script>

<style  lang='less'>
.topNav {
  line-height: 47.5px;
  position: relative;
  text-align: end;
  overflow: hidden;
}
.topNav_title {
  width: 500px;
  height: 60px;
  background-color: red;
  float: left;
  background-image: url(../assets/images/navTitle-1.png);
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 20px 8px;
}
.hiddenMenu {
  background-color: pink;
  text-align: end;
  line-height: 47.5px;
}
.menuShow {
  width: 100%;
  position: absolute;
  background-color: blue;
  top: 47.5px;
  left: 0;
}

.el-submenu .el-submenu__title:hover {
  background-color: #1f70f5 !important;
  color: #fff !important;
}
.el-menu-item:hover {
  background-color: #1f70f5 !important;
  color: #fff !important;
}
::v-deep .el-menu--horizontal .el-menu--popup .el-menu-item {
  // background-color: red;
  // display: block;
  color: red;
}

.el-menu {
  float: right;
}
.el-menu .aaamenu {
  background-color: pink !important;
  flex-wrap: 700 !important;
}
.aaamenu .el-menu--popup {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 5px;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  background-color: #1f70f5;
  color: #fff !important;
  border: 0 !important;
}
</style>