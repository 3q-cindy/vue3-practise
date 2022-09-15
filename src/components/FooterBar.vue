<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BannerSection from './common/banner.vue'
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
   <BannerSection />
   <footer>
        <div class="container ">
            <div class="column_4 ">
                <RouterLink to="/" class="box ">
                    <div class="title ">トップ</div>
                    <span>TOP</span>
                </RouterLink>
                <a href="javascript:; " class="box ">
                    <div class="title ">マラマハワイとは</div>
                    <span>About Mālama Hawaiʻi</span>
                </a>
            </div>
            <div class="column_4 ">
                <RouterLink to="/travelers" class="box ">
                    <div class="title ">旅行者にできること</div>
                    <span>WHAT TRAVELERS CAN DO</span>
                </RouterLink>
                <RouterLink to="/initiative" class="box ">
                    <div class="title ">取組み紹介</div>
                    <span>INITIATIVES</span>
                </RouterLink>
                <RouterLink to="/movie" class="box ">
                    <div class="title ">関連映像</div>
                    <span>MOVIES</span>
                </RouterLink>
            </div>
            <div class="column_4 ">
                <RouterLink to="/communities" class="box ">
                    <div class="title ">コミュニティ紹介</div>
                    <span>COMMUNITIES</span>
                </RouterLink>
                <RouterLink to="/folder" class="box ">
                    <div class="title ">特集</div>
                    <span>FEATURED</span>
                </RouterLink>
            </div>
            <div class="column_4 ">
                <ul>
                    <li>
                        <a href="javascript:; ">業界関係の方へ <img src="@/assets/img/icon_link_w.svg " alt="業界関係の方へ "></a>
                    </li>
                    <li>
                        <a href="javascript:; ">お問い合わせ <img src="@/assets/img/icon_link_w.svg " alt="お問い合わせ "></a>
                    </li>
                    <li>
                        <a href="javascript:; ">利用規約 <img src="@/assets/img/icon_link_w.svg " alt="利用規約 "></a>
                    </li>
                    <li>
                        <a href="javascript:; ">プライバシーポリシー <img src="@/assets/img/icon_link_w.svg " alt="プライバシーポリシー "></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container compony ">
            <div class="column_3 ">
                <span>ハワイ州</span>
                <span>レスポンシブル・ツーリズム</span>
                <span>情報サイ</span>
            </div>
            <div class="column_3 ">
                <div class="logo "><img src="@/assets/img/logo_grey.svg " alt="Malama Hawaii "></div>

            </div>
            <div class="column_3 ">
                <ul class="about_link ">
                    <li>
                        <a href="javascript:; "><img src="@/assets/img/icon_twitter.svg " alt="twitter "></a>
                    </li>
                    <li>
                        <a href="javascript:; "><img src="@/assets/img/icon_insgram.svg " alt="insgram "></a>
                    </li>
                    <li>
                        <a href="javascript:; "><img src="@/assets/img/icon_facebook.svg " alt="facebook "></a>
                    </li>
                    <li>
                        <a href="javascript:; "><img src="@/assets/img/icon_youtube.svg " alt="youtube "></a>
                    </li>
                    <li>
                        <a href="javascript:; "><img src="@/assets/img/icon_line.svg " alt="line "></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-center ">
            ©Hawai‘i Tourism Japan All rights reserved.
        </div>
    </footer>
</template>

<style scoped>

/* FOOTER */

footer {
    background-color: #202124;
    padding-top: 50px;
    padding-bottom: 40px;
}

footer * {
    color: rgb(256 256 256 /.7);
    transition: all .2s ease-in;
}

footer a:hover * {
    color: var(--hawaii-red);
}

footer .box {
    display: block;
    line-height: 1.8rem;
    padding-bottom: 40px;
}

footer .box * {
    display: block;
}

footer .box .title {
    font-size: 20px;
    font-weight: bolder;
}

footer span {
    display: block;
}

footer .box span {
    font-size: 10px;
}

footer .compony {
    border-top: 1px solid #888;
    padding: 40px 0;
    margin-top: 20px;
    justify-content: center;
}

footer .compony .about_link {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

footer ul {
    list-style: none;
}

footer ul a,
footer ul a:hover {
    display: flex;
    align-items: flex-start;
    color: rgb(256 256 256 /.7);
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 5px;
}

footer ul a:hover {
    opacity: 0.7;
}
@media screen and (max-width: 767px) {
    
    /* footer */
    footer {
        padding: 30px 0;
    }
    footer .container {
        gap: 0;
    }
    footer .box {
        display: flex;
        gap: 5px;
        align-items: end;
    }
    footer span {
        text-align: center;
    }
    footer .compony {
        flex-direction: column;
        row-gap: 10px;
        text-align: center;
    }
    footer .compony .about_link {
        justify-content: center;
    }
    
}
</style>