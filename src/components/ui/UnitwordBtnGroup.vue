<script setup>
    import { reactive } from 'vue';
    
    const props = defineProps({
        icon_group: {
            type: Array,
            require: true,
        }
    });
    const word_btn = reactive([]);
    props.icon_group.map(item => {
        word_btn.push(item);
    });
</script>

<template>
    <article class="classif_button">
        <button type="button" v-for="(item, index) in word_btn" :key="index" 
                :class="{'icon': true, 'active': item.type }" >
            {{ item.words }}
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
}
.classif_button button.icon{
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: 10px center;
}
.classif_button .icon:hover, .classif_button .icon.active{
    color: #fff;
    background: #000;
    border-color: #000;
}
</style>