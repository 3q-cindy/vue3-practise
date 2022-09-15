<script setup>
import { ref, reactive } from 'vue';
const list = reactive({
    ABOUT: {
        subtitle: 'マラマハワイとは',
        content: {
            title: "マラマハワイとは トップ",
            link: "123"
        }
    }
});

</script>

<template>
    <section class="featured_layout">
        <div class="container">
            <div class="featured_group">
                <div class="featured_box">
                    <div class="intro_img"><img src="@/assets/img/asset049.jpg" alt=""></div>
                    <a href="javascript:;" class="featured_link">
                        <span class="space"></span> ことばで知るハワイ
                    </a>
                </div>
                <div class="featured_box">
                    <div class="intro_img"><img src="@/assets/img/asset50.jpg" alt=""></div>
                    <a href="javascript:;" class="featured_link">
                        <span class="space"></span> coming soon...
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

/* FEATURED */

.featured_layout {
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: 0;
}

.featured_layout .text_box {
    padding-bottom: 20px;
}

.featured_layout .text_box h3 {
    margin-bottom: 20px;
}

.featured_layout .container {
    overflow-x: auto;
}

.featured_layout .featured_group {
    display: flex;
    gap: 25px;
    justify-content: space-between;
}

.featured_layout .featured_box {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: calc(50% - 20px);
    aspect-ratio: 5 / 3;
}

.featured_layout .featured_box:before {
    content: '';
    position: absolute;
    bottom: 25px;
    right: 30px;
    z-index: 1;
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-image: url(@/assets/img/white_arrow_r.svg);
    background-size: 20px 20px;
    background-position: center;
    transition: all .2s ease-in;
}

.featured_layout .featured_box:hover:before {
    background-image: url(@/assets/img/orange_arrow_r.svg);
    border: 1px solid var(--hawaii-red);
}
@media screen and (max-width: 767px) {
    /* featured */
    .featured_layout {
        flex-direction: column;
    }
}
</style>