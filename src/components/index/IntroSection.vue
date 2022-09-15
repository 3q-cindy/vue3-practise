<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
    <section class="intro_layout">
        <div class="container">
            <div class="intro_img intro_photo_left">
                <img src="@/assets/img/turtle.jpg" alt="turtle">
            </div>
            <div class="intro_textbox">
                <h3 class="title">
                    <div>美しいハワイを</div>
                    <div>未来へとつなぐために</div>
                    <div>わたしたちができること</div>
                </h3>
                <p class="content">
                    ハワイは世界の絶滅危惧種の宝庫と呼ばれるほど、貴重な生物がたくさん生息しています。ウミガメ、イルカ、クジラ、サンゴ礁。これらを守るためにも、知ってもらいたいことやルールがあります。これからは旅行者にも、ハワイの島々の自然や文化を守り、現地住民が大切にする場所を敬い、美しいハワイを未来へつなげていく行動が求められます。 「レスポンシブル・ツーリズム」一緒にはじめませんか。
                </p>
                <a href="javascript:;" class="intro_link">
                    マラマハワイとは
                    <img src="@/assets/img/orange_arrow_r.svg" alt="intro">
                </a>
            </div>
        </div>
        <div class="container">
            <h2>
                What We Can Do to
                <span class="h2_hawaii_red dis_block">Keep Hawai‘i Beautiful</span> for the Future.
            </h2>
            <span class="text-center dis_block">ABOUT MĀLAMA HAWAI‘I</span>
        </div>
        <div class="intro_scroll">
            <div class="container intro_card_group">
                <div class="intro_card">
                    <a href="javascript:;" class="">
                        <div class="intro_img">
                            <img src="@/assets/img/intro_card1.jpg" alt="hawaii">
                        </div>
                        <div class="textbox">
                            <h3 class="title">
                                責任ある旅行“レスポンシブル・ツーリズム”について
                            </h3>
                            <span class="more_btn">
                                詳しく見る
                            </span>
                            <p class="content">観光客もツーリズムを構成する要素であると捉え、観光客が意識や行動に責任を持つことで、より良い観光地形成を行っていこうという考え方です。</p>
                            <span class="footer">WHAT IS “RESPONSIBLE TOURISM</span>
                        </div>
                    </a>
                </div>
                <div class="intro_card">
                    <a href="javascript:;">
                        <div class="intro_img">
                            <img src="@/assets/img/intro_card2.jpg" alt="hawaii">
                        </div>
                        <div class="textbox">
                            <h3 class="title">
                                ハワイ独自の取り組み“アロハプラスチャレンジ”について
                            </h3>
                            <span class="more_btn">
                                詳しく見る
                            </span>
                            <p class="content">SDG’sを基準にハワイ州が独自のゴールを設定した特別プログラムです。官民一体となり経済、社会、環境の側面からを持続可能な社会を目指します。</p>
                            <span class="footer">ABOUT “ALOHA + CHALLENGE</span>
                        </div>
                    </a>
                </div>
                <div class="intro_card">
                    <a href="javascript:;">
                        <div class="intro_img">
                            <img src="@/assets/img/intro_card3.jpg" alt="hawaii">
                        </div>
                        <div class="textbox">
                            <h3 class="title">
                                ハワイ州観光局からのメッセージ
                            </h3>
                            <span class="more_btn">
                                詳しく見る
                            </span>
                            <p class="content">歴史的にも深い関係を持つ日本とハワイが、これからも共に支え合い、高め合う良い関係が継続できるようハワイ州観光局もサポートしていきます。</p>
                            <span class="footer">MESSAGE FROM HAWAI‘I TOURISM JAPAN</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

/* INTRO */

.intro_layout {
    background-color: #f9f6f5;
    padding: 60px 0;
}

.intro_textbox .title {
    margin-bottom: 20px;
}

.intro_link {
    display: flex;
    font-size: 14px;
    color: var(--hawaii-red);
    font-weight: 600;
    margin: 15px 0;
}

.intro_link:hover {
    color: var(--hawaii-red);
}

.intro_link img {
    border: 1px solid var(--hawaii-red);
    padding: 3px;
    margin: 0 5px;
    border-radius: 50%;
}

.intro_card_group {
    flex-direction: row;
    flex-wrap: nowrap;
    min-width: 900px;
    overflow-x: scroll;
}

.intro_card_group .intro_card {
    position: relative;
    min-width: 280px;
    width: calc(33% - 10px);
    aspect-ratio: 1 / 1.3;
    border-radius: 10px;
    overflow: hidden;
}

.intro_card .intro_img,
.intro_card .textbox {
    position: absolute;
    top: 0;
    right: 0;
}

.intro_card .intro_img::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #00000040;
}

.intro_card .textbox {
    position: relative;
    padding: 20px;
    height: 100%;
    color: #fff;
}

.intro_card .textbox p {
    opacity: 0;
    position: absolute;
    bottom: 85px;
    width: 90%;
    font-size: 13px;
    line-height: 1.3rem;
}

.intro_card .textbox .footer {
    position: absolute;
    bottom: 55px;
    left: 20px;
    width: 85%;
    font-size: 12px;
    line-height: 1.2rem;
    color: #ccc;
}

.intro_card * {
    transition: all .2s;
}

.intro_card:hover .textbox p {
    opacity: 1;
}

.intro_card:hover .intro_img::before {
    background-color: #000000a0;
}

.intro_card:hover .more_btn {
    background-color: #ffffff;
    color: #000;
}

.intro_card:hover .more_btn::after {
    background-image: url(@/assets/img/white_arrow_r.svg);
    border: 1px solid var(--hawaii-red);
    background-color: var(--hawaii-red);
}
@media screen and (max-width: 767px) {
    /* intro */
    .intro_scroll {
        width: 100vw;
        overflow-x: scroll;
    }
    .intro_card .textbox .title {
        font-size: 20px;
    }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* INTRO */
    .intro_card_group {
        width: 150vw;
        overflow-x: scroll;
    }
    .intro_card {
        width: 50%;
    }
    .intro_scroll {
        width: 100vw;
        overflow-x: auto;
    }
}
@media screen and (min-width: 1025px) {
    /* INTRO */
    .intro_photo_left {
        width: calc(50% - 8px);
    }
    .intro_photo_left img {
        max-width: 550px;
        transform: translateY(-70%);
    }
    .intro_textbox {
        width: calc(50% - 8px);
    }
}
</style>