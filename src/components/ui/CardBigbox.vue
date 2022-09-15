<script setup>
import { reactive } from 'vue';
const cardtype = reactive({
    swin: {
        img: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/aa3b29ef02b2aac47014fd5d4b470389c3cb7c47/src/assets/img/icon_swin2.svg',
        txt: 'カルチャー', 
    },
    sea: {
        img: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/aa3b29ef02b2aac47014fd5d4b470389c3cb7c47/src/assets/img/icon_sea2.svg',
        txt: '海',
    },
    tag: {
        img: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/aa3b29ef02b2aac47014fd5d4b470389c3cb7c47/src/assets/img/icon_tag2.svg',
        txt: 'その他',
    },
    tree: {
        img: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/aa3b29ef02b2aac47014fd5d4b470389c3cb7c47/src/assets/img/icon_tree.svg',
        txt: '自然',
    }
});
//
const sample = reactive([
    {
        type: 'swin',
        image: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset 29.png',
        title: '【ハワイ島】海深914mから湧き出る海洋深層水の製塩所ツアーを体験！お土産に最適な12種類の絶品ハワイアンソルトも',
        content: '「E Ulu A Paʻa」～ビショップ ミュージアム が年に一度のファンドレイジングを開催！～',
        date: '2021.08.12',
        link: 'javascript:;'
    }
]);
const props = defineProps({
    card: {
        type: Object,
        required: true,
    }
});
const datas = reactive(props.card[0]);
</script>

<template>
    <a :href="datas.link">
        <div class="card_box">
            <span class="title">
                <img :src="cardtype[datas.type]['img']" alt="">
                {{ cardtype[datas.type]['txt'] }} 
            </span>
            <div class="intro_img">
                <img :src="datas.image" alt="">
            </div>
            <div class="content">
                <h3>{{ datas.title }}</h3>
                <div>
                    <p>{{ datas.content }}</p>
                    <span class="date">{{ datas.date }}</span>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped>
/* ... */
</style>