<template>
  <div class="box">
    <TopImgs>
      <div
        slot="topImg_bg"
        :style="{
          backgroundImage:
            'url(' + require('../assets/images/partners_1.png') + ')',
          backgroundSize: '145%',
          backgroundPosition: '50% 50%',
        }"
        class="topImg_bg"
      ></div>
    </TopImgs>
    <div class="container">
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_2.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '60%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_1") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_3.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '45%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_2") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_4.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '60%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_3") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_5.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '60%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_4") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_6.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '55%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_5") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_7.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '120%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_6") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_8.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '70%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_7") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_9.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '28%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_8") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_10.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_9") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_11.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '35%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_10") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_12.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_11") }}
        </div>
      </PartnerCard>
      <PartnerCard>
        <div
          class="topImg"
          slot="topImg"
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/Partner_13.png') + ')',
            backgroundPosition: '50% , 50%',
            backgroundSize: '60%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="bottomText" slot="bottomText">
          {{ $t("message.partner.partner_12") }}
        </div>
      </PartnerCard>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopImgs from "@/components/TopImgs.vue";
import Footer from "@/components/Footer.vue";
import PartnerCard from "@/components/PartnerCard.vue";
export default {
  name: "Partners",
  data() {
    return {};
  },
  components: { TopImgs, Footer, PartnerCard },
};
</script>

<style scoped>
.container {
  padding: 0 324px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
}
</style>