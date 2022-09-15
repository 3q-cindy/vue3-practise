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
    <section class="card_layout">
        <div class="container">
            <h3 class="major_title">LATEST</h3>
        </div>
        <div class="container">
            <div class="sub_title">
                <h3>旅行者にできること</h3>
                <span class="sub">What Travelers Can Do</span>
                <a href="javascript:;" class="more_btn_red">
                    詳しく見る
                </a>
            </div>
        </div>
        <div class="container card_content">
            <div class="column_2">
                <a href="jsvascript:;">
                    <div class="card_box">
                        <span class="title">
                            <img src="@/assets/img/icon_tag2.svg" alt="">その他 
                        </span>
                        <div class="intro_img">
                            <img src="@/assets/img/asset27.jpeg " alt="">
                        </div>
                        <div class="content">
                            <h3>ユニクロ アラモアナ店〜UTme!限定デザイン「Together in Hawaii」シリーズでハワイフードバンクに寄付を〜</h3>
                            <div>
                                <p>UTme!「Together in Hawaii」シリーズ開始 ユニクロ アラモアナ店では地元アーティストや企業等とコラボしたUTme!「Together in</p>
                                <span class="date">2022.01.28</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="column_2 grid_card">
                <a href="jsvascript:;">
                    <div class="card_box">
                        <span class="title">
                            <img src="@/assets/img/icon_swin2.svg" alt="">カルチャー 
                        </span>
                        <div class="intro_img">
                            <img src="@/assets/img/asset29.png" alt="">
                        </div>
                        <div class="content">
                            <h4>「E Ulu A Paʻa」～ビショップ ミュージアム が年に一度のファンドレイジングを開催！～</h4>
                            <span class="date">2021.08.12</span>
                        </div>
                    </div>
                </a>
                <a href="jsvascript:;">
                    <div class="card_box">
                        <span class="title">
                            <img src="@/assets/img/icon_sea2.svg" alt="">海
                        </span>
                        <div class="intro_img">
                            <img src="@/assets/img/asset32.jpeg " alt="">
                        </div>
                        <div class="content">
                            <h4>『世界海洋デー』とは～豊かな海の環境を守ろう～</h4>
                            <span class="date">2021.06.08</span>
                        </div>
                    </div>
                </a>
                <a href="jsvascript:;">
                    <div class="card_box">
                        <span class="title">
                            <img src="@/assets/img/icon_tag2.svg" alt="その他">その他
                        </span>
                        <div class="intro_img">
                            <img src="@/assets/img/asset33.jpeg " alt="">
                        </div>
                        <div class="content">
                            <h4>POW! WOW! x ハワイアン航空　限定ロゴグッズ販売の収益が子供たちへの教育サポートに</h4>
                            <span class="date">2021.05.28</span>
                        </div>
                    </div>
                </a>
                <a href="jsvascript:;">
                    <div class="card_box">
                        <span class="title">
                            <img src="@/assets/img/icon_tree.svg" alt="">自然 
                        </span>
                        <div class="intro_img">
                            <img src="@/assets/img/756-1.jpg" alt="">
                        </div>
                        <div class="content">
                            <h4>Rapid ‘ŌHI‘A death～オヒアレフアを枯死問題から守ろう～</h4>
                            <span class="date">2021.04.21</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>

/* CARD */

.card_layout {
    padding: 60px 0 30px 0;
}

.card_layout:nth-child(even) .card_content {
    flex-direction: row-reverse;
    padding-top: 0;
    padding-bottom: 0;
}
    @media screen and (max-width: 767px){        
        /* card */
        .card_layout .grid_card {
            flex: 0 0 100%;
        }
        .card_layout:nth-child(even) .card_content {
            flex-direction: row;
        }
    }
</style>