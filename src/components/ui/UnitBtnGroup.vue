<script setup>
    import { reactive } from 'vue';
    const icon_group = {
        dot: {
            type: true,
            word: "すべて",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_dot2.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_dot.svg')",
            color: "#000",
        },
        sea: {
            type: false,
            word: "海",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_sea.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_sea3.svg')",
            color: "#3399CC",
        },
        tree: {
            type: false,
            word: "自然",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_tree2.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_tree3.svg')",
            color: "#3b795f",
        },
        leaf: {
            type: false,
            word: "エコ活動",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_leaf.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_leaf2.svg')",
            color: "#669966",
        },
        calc: {
            type: false,
            word: "イベント",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_cale.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_cale2.svg')",
            color: "#9966CC",
        },
        tag: {
            type: false,
            word: "ボランティア",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_tag.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_tag4.svg')",
            color: "#FF9966",
        },
        swim: {
            type: false,
            word: "カルチャー",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_swin.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_swin3.svg')",
            color: "#CC6633",
        },
        other: {
            type: false,
            word: "その他",
            orgin: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_tag5.svg')",
            hover: "url('https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/icon_tag3.svg')",
            color: "#666666",
        },
    }
</script>

<template>
    <article class="classif_button">
        <button type="button" v-for="(item, index) in icon_group" :key="index"
             :class="{'icon': true, 'active': item.type}" :style="{ 
                    '--orgin-bcg': item.orgin, 
                    '--hover-bcg': item.hover,
                    '--orgin-col': item.color 
                }">
            <span> {{ item.word }}</span>
        </button>
    </article>
</template>

<style scoped>

.classif_button{
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 15px;
    gap: 10px;

}
.classif_button button{
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 7px 10px;
    gap: 5px;
    font-weight: 300;
    cursor: pointer;
    --orgin-bcg: url('@/assets/img/icon_dot2.svg');
    --orgin-col: #000;
    --hover-bcg: url('@/assets/img/icon_dot.svg');
}
.classif_button button.icon{
    padding-left: 30px;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: 10px center;
    background-image: var(--orgin-bcg);
}
.classif_button .icon:hover, .classif_button .icon.active{
    background-image: var(--hover-bcg);
    background-color: var(--orgin-col);
    color: #fff;
}
</style>