<script setup>
import UnitTitle from '@/components/ui/UnitTitle.vue'
import UnitBtnGroup from '@/components/ui/UnitBtnGroup.vue'
import CardMarquee  from '@/components/ui/CardMarquee.vue'
import CardBigbox  from '@/components/ui/CardBigbox.vue'
import CardBox  from '@/components/ui/CardBox.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import NavBar from '@/components/NavBar.vue'
import {ref, reactive } from 'vue'

const title = ref('旅行者にできること');
const subtitle = ref('What travelers can do');
const content =  reactive([
  '美しいハワイを守るために、旅行者のみなさんにできることはたくさんあります。',
  '持ち物、森林の歩き方、海洋生物との接し方、アクティビティへの参加。',
  '旅行者の皆さんのアクションが、ハワイの美しさを保つことに繋がります。'
  ]);
const major_data = reactive([ {
        type: 'swin',
        image: './src/assets/img/asset 29.png',
        title: '【ハワイ島】海深914mから湧き出る海洋深層水の製塩所ツアーを体験！お土産に最適な12種類の絶品ハワイアンソルトも',
        content: '「E Ulu A Paʻa」～ビショップ ミュージアム が年に一度のファンドレイジングを開催！～',
        date: '2021.08.12',
        link: 'javascript:;'
    },{
        type: 'swin',
        image: './src/assets/img/asset 29.png',
        title: '【ハワイ島】海深914mから湧き出る海洋深層水の製塩所ツアーを体験！お土産に最適な12種類の絶品ハワイアンソルトも',
        content: '「E Ulu A Paʻa」～ビショップ ミュージアム が年に一度のファンドレイジングを開催！～',
        date: '2021.08.12',
        link: 'javascript:;'
    }]);

const more_data = [
    {
        type: 'swin',
        image: './src/assets/img/asset 29.png',
        content: '「E Ulu A Paʻa」～ビショップ ミュージアム が年に一度のファンドレイジングを開催！～',
        date: '2021.08.12',
    },
    {
        type: 'sea',
        image: './src/assets/img/asset 32.jpeg ',
        content: '『世界海洋デー』とは～豊かな海の環境を守ろう～',
        date: '2021.06.08',
    },
    {
        type: 'tag',
        image: './src/assets/img/asset 33.jpeg ',
        content: 'POW! WOW! x ハワイアン航空　限定ロゴグッズ販売の収益が子供たちへの教育サポートに',
        date: '2021.06.08',
    },
    {
        type: 'tree',
        image: './src/assets/img/756-1.jpg',
        content: 'Rapid ‘ŌHI‘A death～オヒアレフアを枯死問題から守ろう～',
        date: '2021.04.21',
    },
    {
        type: 'sea',
        image: './src/assets/img/asset 32.jpeg ',
        content: '『世界海洋デー』とは～豊かな海の環境を守ろう～',
        date: '2021.06.08',
    },
    {
        type: 'tag',
        image: './src/assets/img/asset 33.jpeg ',
        content: 'POW! WOW! x ハワイアン航空　限定ロゴグッズ販売の収益が子供たちへの教育サポートに',
        date: '2021.06.08',
    },
    {
        type: 'tree',
        image: './src/assets/img/756-1.jpg',
        content: 'Rapid ‘ŌHI‘A death～オヒアレフアを枯死問題から守ろう～',
        date: '2021.04.21',
    },
    {
        type: 'tag',
        image: './src/assets/img/asset 33.jpeg ',
        content: 'POW! WOW! x ハワイアン航空　限定ロゴグッズ販売の収益が子供たちへの教育サポートに',
        date: '2021.06.08',
    },
];
const other_data = reactive([]);
more_data.map(card => {
  other_data.push(card);
});

</script>

<template>
  <HeaderBar />
  <NavBar />
  <section>
    <UnitTitle :title="title" :subtitle="subtitle" :content="content" />
    <UnitBtnGroup />
  </section>
  <div class="container">
      <h3 class="major_title">PICK UP</h3>
  </div>
  <CardMarquee />
  <div class="container">
      <h3 class="major_title">LATEST</h3>
  </div>
  <div class="container card_content">
    <div class="column_2 major" v-for="(card, index) in major_data" :key="index">
      <CardBigbox :card="major_data" />
    </div>
  </div>
  <section class="card_layout">
    <div class="container card_content">
      <div class="grid_card" v-if="other_data.length !== 0">
        <CardBox v-for="(card, index) in other_data" :key="index" :card="card" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section{
    padding: 65px 0;
}
.column_2.major {
    width: calc(50% - 10px);
}

.card_layout .grid_card{
  flex: 1;
  gap: 20px;
  justify-content: flex-start;
}
.card_layout .grid_card>* {
    width: calc(25% - 15px);
    gap: 30px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .card_layout .grid_card>* {
      width: calc(50% - 10px);
      gap: 30px;
  }
}
@media screen and (max-width: 767px) {
  .card_layout .grid_card>* ,.column_2.major{
      width: 100%;
      gap: 30px;
  }
}
</style>