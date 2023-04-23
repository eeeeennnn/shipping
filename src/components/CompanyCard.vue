<template>
  <div class="box">
    <div class="CompanyCard_title">
      <slot name="company_title"></slot>
      <div class="title_left"></div>
      <div class="title_right"></div>
    </div>
    <div class="blueLine"></div>
    <div class="content">
      <div class="left">
        <slot name="company_content"></slot>
      </div>
      <div class="right">
        <div class="right_one">
          <slot name="company_img1"></slot>
        </div>
        <div class="right_two">
          <slot name="company_img2"></slot>
        </div>
      </div>
    </div>
    <div class="blueLine"></div>
  </div>
</template>

<script>
export default {
  name: "CompanyCard",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.company_content {
  zoom: 0.8;
  font-size: 24px;
}
.box {
  margin-bottom: 20px;
  width: 1272px;
  height: 343px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 24px 0;
  box-sizing: border-box;
}
.content {
  padding: 0 24px;
  box-sizing: border-box;
  height: 252px;
  padding: 13px 0 14px 0;
  box-sizing: border-box;
}
.content .left {
  margin-right: 26px;
  width: 678px;
  height: 250px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 44px;
  float: left;
  background-color: #bfa;
  overflow: scroll;
  zoom: 0.8;
}
.CompanyCard_title {
  position: relative;
}
.CompanyCard_title .title_left {
  padding-left: 24px;
  box-sizing: border-box;
  width: 363px;
  height: 41px;
  background: linear-gradient(272deg, #ffffff 0%, #1e6def 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.15;
  float: left;
}
.CompanyCard_title .title_right {
  width: 878px;
  height: 41px;
  background: linear-gradient(272deg, #1e6def 0%, #ffffff 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.15;
  float: right;
}
.blueLine {
  width: 363px;
  height: 4px;
  background: linear-gradient(270deg, rgba(31, 112, 245, 0) 0%, #1f70f5 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.5;
}
.content .right {
  float: right;
  width: 670px;
  display: flex;
  justify-content: space-between;
}
.content .right .right_one,
.content .right .right_two {
  width: 320px;
  height: 225px;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  background-size: 115%;
  background-position: -20px -20px;
}
.company_title {
  font-size: 22px;
  position: absolute;
  left: 0px;
  top: 0px;
  line-height: 55px;
  color: #4c4c4c;
  font-weight: 700;
  zoom: 0.8;
}
</style>