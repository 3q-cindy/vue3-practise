<script setup>
    import { reactive, onMounted } from 'vue';
    const props = defineProps({
        data:{
            type: Object,
            required: true,
        },
        ips:{
            type: String,
            default: "12azad"
        },
        reverse: {
            type: Boolean,
            default: false,
        },
    });
    onMounted(()=>{
        const root = document.getElementById(props.ips);
        const marqueeContent = document.querySelector(`#${props.ips} .advertise_carousel`);
        
        root.style.setProperty("--marquee-elements", props.data.length);
        for(let ele = 0; ele < props.data.length; ele++){
            marqueeContent.appendChild(marqueeContent.children[ele].cloneNode(true));
        }
        if(props.reverse){
            root.style.setProperty("--marquee-reverse", "reverse");
        };
    });

</script>

<template>
    <div class="advertise_window" :id="props.ips">
        <div class="advertise_carousel">
            <div class="advertise_item" v-for="(item, index) in props.data" :key="index">
                <div class="adver_img">
                    <img :src="item.src" :alt="item.title">
                </div>
                <div class="textbox">
                    {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.advertise_layout .advertise_window {
    display: block;
    width: 100%;
    margin: 40px 0;
    overflow-x: auto;
    --marquee-elements: 9;
    --marquee-elements-display: 8;
    --marquee-animation-duration: calc(var(--marquee-elements)*5s);
    --marquee-reverse: normal;
}

.advertise_layout .advertise_carousel {
    display: flex;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: var(--marquee-animation-duration);
    animation-direction: var(--marquee-reverse);
    background: #fff0;
}
.advertise_layout .advertise_carousel:hover{
    animation-play-state: paused;
}

.advertise_carousel .advertise_item {
    border-radius: 5px;
    box-sizing: border-box;
    width: 160px;
    min-width: 160px;
    aspect-ratio: 17 / 22;
    padding: 20px;
    margin: 0 15px;
    overflow: hidden;
    background-color: #fff;
}

.advertise_carousel .advertise_item .adver_img {
    width: 100%;
    height: 0;
    padding-bottom: 80%;
    text-align: center;
    line-height: 130px;
}
@keyframes marquee {
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-1710px);
    }
}
.advertise_item .adver_img img {
    width: clamp(50px, 100%, 100px);
}

.advertise_item .textbox {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80px;
}

</style>