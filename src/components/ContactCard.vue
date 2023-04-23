<template>
  <div class="box">
    <div class="left">
      <div class="left_title">
        <div class="left_title_bg"></div>
        <slot name="left_title_text"></slot>
      </div>
      <div class="blueLine"></div>
      <div class="contactInfo">
        <slot name="contactInfo_name"></slot>
        <div class="contactInfo_Tel">
          Tel:
          <slot name="contactInfo_Tel"></slot>
        </div>
        <slot name="contactInfo_Fax"></slot>
        <div class="contactInfo_Email">
          E.mail:
          <slot name="contactInfo_Email"></slot>
        </div>
        <div class="contactInfo_address">
          <slot name="contactInfo_address"></slot>
        </div>
      </div>
    </div>
    <slot name="cardRight"></slot>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  margin-bottom: 60px;
  width: 843px;
  height: 326px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  opacity: 1;
  border-radius: 12px 12px 12px 12px;
  margin-right: 17px;
}
.left {
  float: left;
  width: 398px;
  height: 100%;
  background-image: url(../assets/images/contact_bg1.png);
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: 30%;
}
.left .left_title {
  position: relative;
}
.left .left_title .left_title_bg {
  padding-left: 24px;
  box-sizing: border-box;
  width: 338px;
  height: 41px;
  background: linear-gradient(272deg, #ffffff 0%, #1e6def 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.15;
  font-size: 18px;
  line-height: 41px;
  font-weight: bold;
  color: #4c4c4c;
}
.left_title_text {
  position: absolute;
  top: 0px;
  left: 24px;
  width: 505px;
  height: 24px;
  font-size: 26px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #4c4c4c;
  zoom: 0.8;
  line-height: 55px;
}
.blueLine {
  width: 338px;
  height: 4px;
  background: linear-gradient(270deg, rgba(31, 112, 245, 0) 0%, #1f70f5 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 0.5;
}
.left .contactInfo {
  padding-left: 24px;
}
.left .contactInfo_name {
  width: 185px;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #4c4c4c;
  margin: 16px 0 10px 0;
  zoom: 0.8;
  margin-bottom: 10px;
}
.contactInfo_Tel,
.contactInfo_Fax,
.contactInfo_Email {
  width: 1000px;
  height: 51px;
  line-height: 54px;
  font-size: 26px;
  font-weight: 400;
  color: #4c4c4c;
  margin-bottom: 8px;
  zoom: 0.8;
  word-wrap: normal;
  overflow: scroll;
}
.contactInfo_address {
  width: 514px;
  height: 110px;
  font-size: 28px;
  line-height: 58px;
  font-weight: 400;
  color: #4c4c4c;
  margin-top: 6px;
  zoom: 0.8;
  overflow: scroll;
}
.cardRight {
  float: right;
  margin: 24px 24px 24px 0;
  width: 412px;
  height: 278px;
  background: #ebebeb;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
}
</style>