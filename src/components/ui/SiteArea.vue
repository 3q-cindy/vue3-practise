<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        section:{
            type: Object,
            required: true,
        },
    });
    const handleSwitch = ref(true);
    const AtSwitch = () => {
        handleSwitch.value = !handleSwitch.value;
    };
    const HasContent = () => {
        if(String(props.section.content) !== ''){
            return true;
        }else{
            return false;
        }
    };
</script>

<template>
    <article class="about_section site_area">
        <button type="button" @click="AtSwitch()"
                :class="{'title':true, 'open': handleSwitch, 'hascontent': HasContent()}">
            <span class="en">{{ props.section.name }}</span>
            <span class="jp">{{ props.section.subtitle }}</span>
        </button>
        <div class="content">
            <div class="item" v-for="item in props.section.content" :key="item.id">
                <a :href="item.link">
                    <img v-show="item.icon" :src="item.icon" alt="" class="icon">
                    <span>{{ item.title }}</span>
                </a>
            </div>
        </div>

    </article>
</template>

<style scoped>
.site_area {
    padding: 20px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.website_map .site_area .title {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    line-height: 28px;
    color: #fff;
    background: transparent;
    text-align: left;
}

.website_map .site_area .title:hover {
    opacity: 0.75;
    cursor: pointer;
}

.site_area .title ~ .content{
    max-height: 0;
    transition: .5s all ease-in;
}
.website_map .site_area .title.hascontent {
    padding-left: 28px;
}

.site_area .title.hascontent.open ~ .content{
    max-height: 300px;
    margin-top: 5px;
}

.site_area .content{
    overflow: hidden;
}
.site_area .content.close{
    height: 0;
}
.site_area .content * {
    color: rgba(255, 255, 255, 0.7);
    display: inline-block;
    vertical-align: middle;
}

.site_area .content .item {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.site_area .content .item:hover * {
    color: rgba(255, 255, 255, 0.55);
}

.site_area .content .item span {
    line-height: 15px;
    height: 15px;
}

.site_area .content .item .icon {
    margin-right: 13px;
    width: 16px;
    height: 16px;
}

.site_area .title .en {
    font-family: "FreightNeo W03 Medium";
    font-size: 28px;
    margin: 0 15px 2px 0;
}

.site_area .title .jp {
    font-size: 13px;
    font-weight: 100;
}

.site_area .title.hascontent::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 8px solid rgba(255, 255, 255, 0.5);
    border-top: 7px solid #0000;
    border-bottom: 7px solid #0000;
    transition: 0.2s all ease-in;
}

.site_area .title.hascontent.open::before {
    left: 6px;
    transform: rotate(90deg);
}

</style>