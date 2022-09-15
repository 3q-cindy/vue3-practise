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
        type: 'tree',
        image: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/aa3b29ef02b2aac47014fd5d4b470389c3cb7c47/src/assets/img/756-1.jpg',
        content: 'Rapid ‘ŌHI‘A death～オヒアレフアを枯死問題から守ろう～',
        date: '2021.04.21',
    },
]);
const props = defineProps({
    card: {
        type: Object,
        required: true,
    }
});
const card = reactive(props.card);
</script>

<template>
    <a :href="card.link">
        <div class="card_box">
            <span class="title">
                <img :src="cardtype[card.type]['img']" alt="">
                {{ cardtype[card.type]['txt'] }} 
            </span>
            <div class="intro_img">
                <img :src="card.image" alt="">
            </div>
            <div class="content">
                <h4>{{ card.content }}</h4>
                <span class="date">{{ card.date }}</span>
            </div>
        </div>
    </a>
</template>

<style scoped>
/* ... */
</style>