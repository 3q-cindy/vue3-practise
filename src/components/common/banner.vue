<script setup>
import { RouterLink, RouterView } from 'vue-router';
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
    <section class="banner_layout">
        <div class="container">
            <div class="column_4 card">
                <a href="">
                    <div class="intro_img">
                        <img src="@/assets/img/asset74.png" alt="">
                    </div>
                </a>
            </div>
            <div class="column_4 card">
                <a href="">
                    <div class="intro_img">
                        <img src="@/assets/img/asset75.png" alt="">
                    </div>
                </a>
            </div>
            <div class="column_4 card">
                <a href="">
                    <div class="intro_img">
                        <img src="@/assets/img/asset76.png" alt="">
                    </div>
                </a>
            </div>
            <div class="column_4 card">
                <a href="">
                    <div class="intro_img">
                        <img src="@/assets/img/asset76.png" alt="">
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>

/* BANNER */

section.banner_layout {
    background-color: #303133;
    padding: 50px 0;
}

section.banner_layout .card {
    transition: all .2s;
}

section.banner_layout .card:hover {
    opacity: 0.7;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* BANNER */
    section.banner_layout .card {
        width: calc(25% - 15px);
    }
}
</style>
