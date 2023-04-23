<template>
  <div class="box">
    <div class="left">
      <div class="topText">
        {{ $t("message.index.index_six.content_left_one") }}
      </div>
      <div class="blueLine"></div>
      <div class="bottomText">
        {{ $t("message.index.index_six.content_left_two") }}
      </div>
    </div>
    <div class="right">
      <div class="rightTop">
        <div class="rightBox rightBox_one">
          <div class="right_text">
            {{ $t("message.index.index_six.content_right_fleet_one") }}
          </div>
        </div>
        <div class="rightBox">
          <div class="right_text">
            {{ $t("message.index.index_six.content_right_fleet_two") }}
          </div>
        </div>
      </div>
      <div class="rightCenter">
        <div class="rightBox">
          <div class="right_text">
            {{ $t("message.index.index_six.content_right_fleet_three") }}
          </div>
        </div>
        <div class="rightBox">
          <div class="right_text">
            {{ $t("message.index.index_six.content_right_fleet_four") }}
          </div>
        </div>
        <div class="rightBox">
          <div class="right_text">
            {{ $t("message.index.index_six.content_right_fleet_five") }}
          </div>
        </div>
      </div>
      <div class="rightBottom">
        <div class="rightBox">
          <div class="right_text">
            {{ $t("message.index.index_six.content_right_fleet_six") }}
          </div>
        </div>
        <div class="rightBox">
          <div class="right_text">
            {{ $t("message.index.index_six.content_right_fleet_seven") }}
          </div>
        </div>
      </div>
      <div class="right_small">
        <div class="right_one">
          <div class="right_text">
            <p class="right_text_title">
              {{
                $t("message.index.index_six.content_right_fleet_download_title")
              }}
            </p>
            <p class="right_text_content">
              {{
                $t(
                  "message.index.index_six.content_right_fleet_download_content"
                )
              }}
            </p>
          </div>
        </div>
        <div class="right_two"></div>
        <div class="right_three"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexAssembly5",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.box {
  overflow: hidden;
  margin-bottom: 60px;
  width: 1272px;
  height: 720px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 1px rgba(72, 142, 255, 0.1);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  padding: 40px 30px 56px 66px;
  box-sizing: border-box;
  background-image: url(../assets/images/home_bg2.png);
  background-size: 23%;
  background-repeat: no-repeat;
  background-position: 100% 100%;
}
.blueLine {
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, #1f70f5 0%, #ffffff 100%);
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.left {
  float: left;
  font-size: 12px;
  width: 362px;
  padding-top: 32px;
  box-sizing: border-box;
}
.topText {
  height: 400px;
  font-size: 20px;
  font-weight: bold;
  color: #4c4c4c;
  line-height: 50px;
  overflow: scroll;
  zoom: 0.8;
}
.bottomText {
  font-size: 20px;
  height: 350px;
  font-weight: bold;
  margin-top: 30px;
  line-height: 50px;
  color: #4c4c4c;
  overflow: scroll;
  zoom: 0.8;
}
.right {
  width: 810px;
  float: left;
  /* background-color: #bfa; */
  position: relative;
  top: -20px;
}
.rightTop {
  background-image: url(../assets/images/index6_img1.png);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: 83px 0px;
  overflow: hidden;
  height: 230px;
}
.rightCenter {
  background-image: url(../assets/images/index6_img2.png);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: 83px 0px;
  overflow: hidden;
  height: 230px;
}
.rightBottom {
  background-image: url(../assets/images/index6_img3.png);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: 83px 0px;
  overflow: hidden;
  height: 230px;
}
.rightTop,
.rightCenter,
.rightBottom {
  width: 810px;
  /* height: 220px; */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rightBox {
  margin-left: 80px;
  width: 150px;
  height: 150px;
  /* background: #ffffff; */
  /* box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1); */
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  /* border: 1px solid #707070; */
  transform: rotate(45deg);
  position: relative;
}
.rightBox .right_text {
  width: 150px;
  height: 30px;
  text-align: center;
  /* background-color: pink; */
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  transform: translate(-50%, -50%) rotate(-45deg);
  position: absolute;
  left: 50%;
  top: 50%;
  zoom: 0.8;
}
.right .right_small {
  position: absolute;
  bottom: 16%;
  left: 15%;
}
.right .right_small .right_one {
  width: 75px;
  height: 75px;
  background: #1f70f5;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 7px 7px 7px 7px;
  opacity: 1;
  transform: rotate(45deg);
}
.right_text {
  width: 100px;
  transform: translate(-50%, -50%) rotate(-45deg);
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
}
.right_text .right_text_title {
  height: 21px;
  font-size: 26px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  margin: 0 auto;
  zoom: 0.6;
}
.right_text .right_text_content {
  height: 17px;
  width: 150px;
  text-align: center;
  font-size: 26px;
  line-height: 100px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 auto;
  zoom: 0.6;
}
.right .right_small .right_two {
  width: 25px;
  height: 25px;
  background: #1f70f5;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 5px 5px;
  opacity: 0.5;
  transform: rotate(45deg);
  position: absolute;
  right: -15%;
  top: 120%;
}
.right .right_small .right_three {
  width: 32px;
  height: 32px;

  background: #1f70f5;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 5px 5px;
  opacity: 0.2;
  transform: rotate(45deg);
  position: absolute;
  left: -15%;
  top: 160%;
}
</style>