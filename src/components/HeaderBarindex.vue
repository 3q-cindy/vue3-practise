<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue'; 
import LeftMenu from '@/components/index/LeftMenu.vue';

    const switchType = ref(true);
    const atSwitchChange = () => {
        switchType.value = true;
    };
    const HandleOpenMenu = () => {
        switchType.value = false;
    }

</script>

<template>
    <header class="header">
        <div class="header_top">
            <a href="javascript:;" @click="HandleOpenMenu" class="website_map"></a>
            <span class="sm_none md_none">
                ハワイ州 <br> レスポンシブル・ツーリズム <br> 情報サイト <br>
            </span>
        </div>
        <div class="logo">
                <RouterLink to="/">
                    <img src="@/assets/img/logo.svg " alt=" ">
                </RouterLink>
        </div>
        <div class="header_end">
            <img src="@/assets/img/hawaiianIsland.png" alt="" class="sm_none">
            <a href="javascript:;" class="about_link lg_none">マラマハワイとは</a>
        </div>
    </header>
    <LeftMenu :atSwitchChange="atSwitchChange" :switchType="switchType" />
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
}

header .header_top {
    display: flex;
    align-items: center;
}

header .header_top span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-left: 25px;
    color: #6c6d6e;
}

header .website_map {
    height: 24px;
    width: 24px;
    background-size: cover;
    background-image: url('@/assets/img/menu_search.svg');
}

header .header_end {
    font-weight: bold;
    margin-left: auto;
}

header .logo {
    text-align: center;
}

header .logo img {
    display: block;
    max-height: 40px;
    padding: 0 10px;
    aspect-ratio: 3/1;
    text-align: center;
}

@media screen and (max-width: 767px) {
    header {
        position: fixed;
        top: 0;
        z-index: 10;
        height: 40px;
        padding: 0 15px;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    header {
        height: 110px;
        padding: 0 20px;
    }
    header>* {
        width: 33.33%;
    }
    header .logo {
        text-align: center;
        max-height: 70px;
    }
    header.logo img {
        height: 60px;
    }
    header .website_map {
        height: 30px;
        width: 30px;
    }
    header .header_end {
        text-align: left;
    }
    header .header_end img {
        display: flex;
        margin-left: auto;
        max-width: 120px;
    }
    header .about_link {
        display: none;
    }
}
@media screen and (min-width: 1025px) {
    header {
        justify-content: space-between;
        height: 110px;
        padding: 0 30px;
    }
    header > * {
        width: 33.33%;
    }
    header .header_end {
        text-align: left;
    }
    header .header_end img {
        display: flex;
        margin-left: auto;
        max-width: 120px;
    }
}
</style>
