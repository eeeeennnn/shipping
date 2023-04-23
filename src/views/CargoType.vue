<template>
  <div class="box">
    <TopImgs>
      <div
        slot="topImg_bg"
        :style="{
          backgroundImage:
            'url(' + require('../assets/images/cargo_1.png') + ')',
          backgroundSize: '145%',
          backgroundPosition: '50% 100%',
        }"
        class="topImg_bg"
      ></div>
    </TopImgs>
    <div id="content">
      <div class="cargoType">
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_1.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_1.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_1.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_2.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_2.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_2.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_3.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_3.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_3.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_4.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_4.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_4.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_5.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_5.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_5.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_6.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_6.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_6.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_7.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_7.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_7.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_8.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_8.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_8.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_9.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_9.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_9.content") }}
          </div>
        </CargoCard>
        <CargoCard>
          <div
            class="top"
            slot="top"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoType_10.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div class="center_title" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_10.name") }}
          </div>
          <div class="bottom" slot="center_title">
            {{ $t("message.cargo.cargoType.cargoType_10.content") }}
          </div>
        </CargoCard>
      </div>
      <div class="cargoBottom">
        <CargoBottom>
          <div class="title" slot="left_title">
            {{ $t("message.cargo.cargoBottom.cargoBottom_1.title") }}
          </div>
          <div class="left_text" slot="left_text">
            {{ $t("message.cargo.cargoBottom.cargoBottom_1.content") }}
          </div>
          <div
            class="img_1"
            slot="Img_1"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/company_1.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div
            class="img_2"
            slot="Img_2"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/company_2.png') + ')',
              backgroundPosition: '-20px , 0px',
              backgroundSize: '130%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div
            class="img_3"
            slot="Img_3"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoBottom_1.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
        </CargoBottom>
        <CargoBottom>
          <div class="title" slot="left_title">
            {{ $t("message.cargo.cargoBottom.cargoBottom_1.title") }}
          </div>
          <div class="left_text" slot="left_text">
            {{ $t("message.cargo.cargoBottom.cargoBottom_1.content") }}
          </div>
          <div
            class="img_1"
            slot="Img_1"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/company_1.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div
            class="img_2"
            slot="Img_2"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/company_2.png') + ')',
              backgroundPosition: '-20px , 0px',
              backgroundSize: '130%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
          <div
            class="img_3"
            slot="Img_3"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/cargoBottom_1.png') + ')',
              backgroundPosition: '-25px , 0px',
              backgroundSize: '120%',
              backgroundRepeat: 'no-repeat',
            }"
          ></div>
        </CargoBottom>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopImgs from "@/components/TopImgs.vue";
import CargoCard from "@/components/CargoCard.vue";
import CargoBottom from "@/components/CargoBottom.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "CargoType",
  data() {
    return {};
  },
  components: { TopImgs, CargoCard, CargoBottom, Footer },
};
</script>

<style scoped>
.box {
  margin-bottom: 60px;
}
.cargoType {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>