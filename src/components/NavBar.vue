<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import Home from '@/views/HomeView.vue';
</script>

<template>
    <nav>
        <a href="javascript:;" class="about_link sm_none">マラマハワイとは</a>
        <ul class="md_none lg_none">
            <li>
                <RouterLink to="/"  >
                    <img src="@/assets/img/menu_home.svg" alt="ホーム "> ホーム
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/travelers">
                    <img src="@/assets/img/menu_list.svg" alt="記事 "> 記事
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/movie">
                    <img src="@/assets/img/menu_movie.svg" alt="関連映像 "> 関連映像
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/communities">
                    <img src="@/assets/img/menu_people.svg" alt="コミュニティ "> コミュニティ
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/folder">
                    <img src="@/assets/img/menu_folder.svg " alt="特集 "> 特集
                </RouterLink>
            </li>
        </ul>
        <ul class="sm_none">
            <li>
                <RouterLink to="/travelers">
                    旅行者にできること
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/initiative">
                    取組み紹介
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/movie">
                    関連映像
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/communities">
                    コミュニティ
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/folder">
                    特集
                </RouterLink>
            </li>
        </ul>
        <a href="javascrip:;" class="sm_none">
            業界関係の方へ <img src="@/assets/img/menu_link.svg" alt="業界関係の方へ">
        </a>
    </nav>
</template>

<style scoped>

nav {
    position: sticky;
    top: 0;
    bottom: -2px;
    z-index: 10;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    width: 100%;
    height: 60px;
    font-weight: bold;
    box-sizing: border-box;
}

nav ul {
    display: flex;
    list-style: none;
    height: 100%;
}

nav li {
    width: 20%;
    transition: all .2s ease-in;
    border-bottom: 0 solid #000;
    margin: 0 20px;
}

nav li a {
    display: block;
    position: relative;
    text-align: center;
    color: #000;
    display: grid;
    height: 100%;
}
nav li a::before{
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 0;
    background: #000;
    transition: all .2s ease-in;
}
ul.sm_none li a:hover::before,
ul.sm_none li a.router-link-active::before{
    height: 5px;
}
ul.md_none li a.router-link-active{
    background: #f9f6f5;
}

nav li img {
    display: block;
    margin: 5px auto 3px auto;
}

@media screen and (max-width: 767px) {
    nav {
        position: fixed;
        top: auto;
        bottom: 0;
        border-top: 1px solid #ddd;
    }
    nav li {
        margin: 0;
    }
    .sm_none {
        display: none;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    nav {
        display: flex;
        justify-content: space-between;
        border-top: 0;
        padding: 0 10px;
        line-height: 60px;
    }
    nav>a {
        display: flex;
        padding: 15px 0;
        line-height: 30px;
    }
    nav ul li {
        width: auto;
    }
    .md_none, .lg_none {
        display: none;
    }
}

@media screen and (min-width: 1025px) {

    nav {
        display: flex;
        justify-content: space-between;
        border-top: 0;
        padding: 0 25px;
        line-height: 60px;
        font-size: 14px;
    }
    nav>a {
        display: flex;
        padding: 15px 0;
        line-height: 30px;
    }
    nav ul li {
        width: auto;
    }
    .md_none, .lg_none {
        display: none;
    }
}
</style>
