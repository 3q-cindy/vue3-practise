<script setup>

import UnitTitle from '@/components/ui/UnitTitle.vue'
import UnitBtnGroup from '@/components/ui/UnitBtnGroup.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import NavBar from '@/components/NavBar.vue'
import {ref, reactive } from 'vue'

const title = ref('コミュニティ&パートナー紹介');
const subtitle = ref('Communities');
const content =  reactive([
  'ハワイには自然や文化などを守るために活動する団体が多くあります。 ここでは、自然保護活動を行う団体、教育プログラムを提供するNPO、文化継承の取り組みを行っている施設などをご紹介しています。',
  ]);
const list = reactive([
    {
        src: './src/assets/img/asset 52.jpeg',
        title: "カウアイ・ミュージアム（Kauai Museum ）",
        content: "（Ho‘okua‘āina）1960年に設立されたカウアイ・ミュージアムはカウアイ島と二イハウ島の豊かな歴史を語る魅力的な展示物、出版物、教育プログラム、 そして人工遺物の記録保管物など多くの感動にあふれているカウアイ島の博物館です。"
    },
    {
        src: './src/assets/img/asset 53.png',
        title: "ナ・コア・マヌ・コンサベーション",
        content: "ナ・コア・マヌ・コンサベーション（Na Koa Manu C …"
    },
    {
        src: './src/assets/img/asset 54.png',
        title: "イオラニ宮殿",
        content: "イオラニ宮殿（Iolani Palace） …"
    },
    {
        src: './src/assets/img/asset 56.jpeg',
        title: "アウワヒ・フォレスト・レストレーション・プロジェクト",
        content: "アウワヒ・フォレスト・レストレーション・プロジェクト (Au …"
    },
    {
        src: './src/assets/img/asset 57.png',
        title: "ホオクアアイナ",
        content: "ホオクアアイナ（Ho‘okua‘āina）"
    },
    {
        src: './src/assets/img/asset 58.jpeg',
        title: "ハワイ・フォレスト・インスティテュート",
        content: "ハワイ・フォレスト・インスティテュート（Hawai’i Forest Institute)"
    },
    {
        src: './src/assets/img/asset 59.png',
        title: "イミロア天文学センター",
        content: "イミロア天文学センター（ʻImiloa Astronomy Center of Hawaiʻi）"
    },
    {
        src: './src/assets/img/asset 60.jpeg',
        title: "ナショナル熱帯植物園",
        content: "ナショナル熱帯植物園（National Tropical Botanical Garden ）"
    },
    {
        src: './src/assets/img/asset 61.png',
        title: "マラマ・マウナルア",
        content: "マラマ・マウナルア（Mālama Maunalua ）"
    }
]);
</script>

<template>
  <HeaderBar />
  <NavBar />
  <section>
    <UnitTitle :title="title" :subtitle="subtitle" :content="content" />
    <div class="container community_card">
      <div class="card" v-for="card in list" :key="card.src">
        <div class="photo">
          <img :src="card.src" :alt="card.title">
        </div>
        <div class="title">
          <h4>{{ card.title }}</h4>
          <img class="arrow" src="@/assets/img/orange_arrow_r.svg" alt="">
        </div>
        <p class="textbox">{{ card.content }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section{
    padding: 65px 0;
    background: #F8F6F5;
}
.community_card{
  display: flex;
  gap: 30px;
}
.community_card .card{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 7px;
  max-width: 250px;
  width: calc(20% - 24px);
  aspect-ratio: 1 / 1.3;
  background: #fff;
}
.card:last-child{
  margin-right: auto;
}
.card:hover{
  box-shadow: 0 0 10px #aaaaaa20;
}
.card .photo, .photo img{
  width: auto;
  max-height: 70px;
  margin: 0 auto;
}
.card .title{
  display: flex;
  align-items: center;
  margin-top: auto;
}
.card .title .arrow{
  width: 30px;
  height: 30px;
}
.card h4, .card p{
  font-size: 13px;
  display: block;
  line-height: 150%;
  color: #6c6d6e;
}
.card h4{
  width: calc(100% - 30px);
}
.card:hover p{
  display: block;
  max-height: 60px;
  overflow: hidden;
}
.card p{
  display: none;
}
</style>