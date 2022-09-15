<script setup>
import { reactive } from 'vue'
const type_data = {
    leaf: './src/assets/img/icon_leaf_w.svg', 
    sea: './src/assets/img/icon_sea2.svg', 
    calc: './src/assets/img/icon_cale3.svg',
    swin: './src/assets/img/icon_swin2.svg',
    tag: './src/assets/img/icon_tag2.svg',
};
const card_data = [{
        image: './src/assets/img/asset55.jpg',
        type: 'leaf',
        title: '【ハワイ島】海深914mから湧き出る海洋深層水の製塩所ツアーを体験！お土産に最適な12種類の絶品ハワイアンソルトも',
        content: '近年ハワイのエコツーリズムは益々注目され、現地では生態系と土地を守りながら、いかにして観光を両立させるかが課題となっています。表面的だけではないハワイの奥深さを',
        date: '2022.06.14',
        link: 'javascript:;'
    },{
        image: './src/assets/img/asset56.jpg',
        type: 'calc',
        title: 'キング・カメハメハ・デー制定150周年記念イベント',
        content: '6月11日は、ハワイ王国を建国したカメハメハ大王を讃える「キング・カメハメハ・デー」。1871年12月22日、大王の孫にあたるカメハメハ5世が、初代国王を讃え、',
        date: '2022.06.14',
        link: 'javascript:;'
    },{
        image: './src/assets/img/asset57.png',
        type: 'swin',
        title: '「E Ulu A Paʻa」～ビショップ ミュージアム が年に一度のファンドレイジングを開催！～',
        content: '「E Ulu A Paʻa」 ビショップ ミュージアムは、2021年8月19日から8月29日まで、年に一度のファンドレイジングの一環であるオークションを実施しま',
        date: '2022.08.12',
        link: 'javascript:;'
    },{
        image: './src/assets/img/asset77.jpeg',
        type: 'swin',
        title: 'ハワイは耳からでも文化に触れることができる～ハワイアンミュージックの世界～',
        content: 'ハワイの人々は楽器ともども、テクノロジーの進化と異文化に影響を受け続けてきました。そんな中でもハワイの音楽は島々のコミュニティに深く根ざしたハワイアンミュージッ',
        date: '2021.04.18',
        link: 'javascript:;'
    },{
        image: './src/assets/img/asset78.png',
        type: 'calc',
        title: 'ポノトラベラー（責任ある旅行者になるため）のマナー',
        content: 'ポノトラベラーとは旅行先の住民が大切に守っている自然環境や文化、習慣に敬意を払い、正しい行動を取ることができる旅行者のことを呼びます。ハワイがいつまでも素晴らし',
        date: '2021.04.01',
        link: 'javascript:;'
    }];

</script>

<template>
    <div class="intro_grid">
        <div class="intro_scroll">
            <div class="intro_card_group">
                <div class="intro_card" v-for="card in card_data" :key="card.image">
                    <a :href="card.link">
                        <div class="intro_img">
                            <img :src="card.image" alt="card.title">
                        </div>
                        <div class="contentbox">
                            <span class="type_btn">
                                <img :src="type_data[card.type]">
                            </span>
                            <div class="text">
                                <h4>{{ card.title }}</h4>
                                <p class="content">{{ card.content }}</p>
                            </div>
                            <span class="footer">{{ card.date }}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.intro_grid{
    max-width: 100vw;
    overflow: hidden;
}

.intro_scroll{
    display: block;
    max-width: 1240px;
    margin: auto;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
    padding: 0 calc(50vw - 620px);
}
.intro_card_group {
    display: flex;
    gap: 15px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    min-width: 900px;
    width: auto;
}

.intro_card_group .intro_card {
    position: relative;
    min-width: 300px;
    width: 20%;
    aspect-ratio: 1 / 1.4;
    border-radius: 10px;
    overflow: hidden;
}

.intro_card .intro_img,
.intro_card .contentbox {
    position: absolute;
    top: 0;
    right: 0;
}
.intro_card .type_btn{
    padding: 0;
}
.intro_card .type_btn img{
    width: 40px;
    aspect-ratio: 1 / 1;
}
.intro_card .intro_img::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #ffffff00 50%, #000000a0 70%);
    transition: all .3s ease-in;
}

.intro_card .intro_img img{
    height: 420px;
    width: 100%;
    object-fit: cover;
}

.intro_card .contentbox {
    position: relative;
    padding: 20px;
    height: 100%;
    color: #fff;
}

.intro_card .contentbox .text{
    position: absolute;
    color: #ffffff;
    bottom: 85px;
    width: 85%;
}

.intro_card .contentbox h4{
    line-height: 1.6rem;
    text-align: justify;
    margin-bottom: 10px;
}
.intro_card .contentbox p{
    overflow: hidden;
    max-height: 0;
    color: #ffffffa0;
    font-size: 12px;
    line-height: 1.5rem;
    transition: all .3s ease-in;
}

.intro_card .contentbox .footer {
    position: absolute;
    bottom: 55px;
    left: 20px;
    width: 85%;
    font-size: 12px;
    line-height: 1.2rem;
    color: #ffffff80;
}

.intro_card * {
    transition: all .2s;
}

.intro_card:hover .intro_img::before {
    background-image: linear-gradient(to bottom, #000000a0 0%, #000000a0 40%);
}

.intro_card:hover .contentbox p{
    max-height: 500px;
    transition: all .3s ease-in;
}
@media screen and (max-width: 767px) {
    /* intro */
    .intro_scroll {
        width: 100vw;
        overflow-x: scroll;
    }
    .intro_card .contentbox .title {
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
}
</style>