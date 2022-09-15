<script setup>
    import SiteArea from '@/components/ui/SiteArea.vue';
    import { reactive, ref } from 'vue';
    const props = defineProps({
        switchType: {
            type: Boolean,
            require: true,
        },
        atSwitchChange: {
            type: Function,
            require: true,
        }
    });
    
    const list = reactive([
        {
            name: 'ABOUT',
            subtitle: 'マラマハワイとは',
            content: [{
                id: 1,
                icon: '',
                title: "マラマハワイとは トップ",
                link: "javascript:;"
            },{
                id:2,
                icon: '',
                title: "責任ある観光“レスポンシブル・ツーリズム”とは",
                link: "javascript:;"
            },{
                id: 3,
                icon: '',
                title: "ハワイ独自の取り組み“アロハプラスチャレンジ”について",
                link: "javascript:;"
            },{
                id: 4,
                icon: '',
                title: "ハワイ州からのメッセージ",
                link: "javascript:;"
            }]
        },{
            name: 'WHAT TRAVELERS CAN DO',
            subtitle: '旅行者にできること',
            content: [{
                id: 1,
                icon: './src/assets/img/icon_dot.svg',
                title: 'すべて',
                link: 'javascript:;'
            },{
                id: 2,
                icon: './src/assets/img/icon_sea.svg',
                title: '海',
                link: 'javascript:;'
            },{
                id: 3,
                icon: './src/assets/img/icon_leaf.svg',
                title: 'すべて',
                link: 'javascript:;'
            },{
                id: 4,
                icon: './src/assets/img/icon_dot.svg',
                title: 'エコ活動',
                link: 'javascript:;'
            },{
                id: 5,
                icon: './src/assets/img/icon_cale.svg',
                title: 'イベント',
                link: 'javascript:;'
            },{
                id: 6,
                icon: './src/assets/img/icon_tag.svg',
                title: 'ボランティア',
                link: 'javascript:;'
            },{
                id: 7,
                icon: './src/assets/img/icon_swin.svg',
                title: 'カルチャー',
                link: 'javascript:;'
            },{
                id: 8,
                icon: './src/assets/img/icon_tag3.svg',
                title: 'その他',
                link: 'javascript:;'
            }]
        },{
            name: 'INITIATIVES',
            subtitle: '取組み紹介',
            content: [{
                id: 1,
                icon: './src/assets/img/icon_dot.svg',
                title: "すべて",
                link: "javascript:;"
            },{
                id:2,
                icon: './src/assets/img/icon_build.svg',
                title: "企業の取組み",
                link: "javascript:;"
            },{
                id: 3,
                icon: './src/assets/img/icon_flag.svg',
                title: "ハワイ州観光局の取組み",
                link: "javascript:;"
            },{
                id: 4,
                icon: './src/assets/img/icon_people.svg',
                title: "コミュニティの取組み",
                link: "javascript:;"
            }]
        },{
            name: 'MOVIES',
            subtitle: '関連映像',
            content: [{
                id: 1,
                icon: './src/assets/img/icon_dot.svg',
                title: "すべて",
                link: "javascript:;"
            },{
                id:2,
                icon: './src/assets/img/icon_ticket.svg',
                title: "プロモーション",
                link: "javascript:;"
            },{
                id: 3,
                icon: './src/assets/img/icon_gress.svg',
                title: "自然環境",
                link: "javascript:;"
            },{
                id: 4,
                icon: './src/assets/img/icon_bulb.svg',
                title: "ハワイ文化保護",
                link: "javascript:;"
            },{
                id: 5,
                icon: './src/assets/img/icon_hi.svg',
                title: "イベント活動",
                link: "javascript:;"
            },{
                id: 6,
                icon: './src/assets/img/icon_chat.svg',
                title: "インタビュー",
                link: "javascript:;"
            },{
                id: 7,
                icon: './src/assets/img/icon_tag3.svg',
                title: "その他",
                link: "javascript:;"
            }]
        },{
            name: 'COMMUNITIES',
            subtitle: 'コミュニティ紹介',
            content: []
        },{
            name: 'FEATURED',
            subtitle: '特集',
            content: []
        }
    ]);    

</script>

<template>
    <section :class="{'website_bg': true, 'close': props.switchType }">
        <div class="website_map">
            <div class="logo site_area">
                <img src="@/assets/img/logo_w.svg" alt="">
                <span>ハワイ州 レスポンシブル・ツーリズム 情報サイト </span>
            </div>
            <div class="site_area">
                <label for="" class="search_bar ">
                    <input type="text" placeholder="キーワードで記事を検索 …">
                    <button type="button">
                        <img src="@/assets/img/saerch_black.svg" alt="">
                    </button>
                </label>
            </div>
            <SiteArea v-for="item in list" :section="item" :key="item.name" />
            <article class="about_section site_area">
                <div class="content">
                    <div class="item">
                        <a href="javascript:;">
                            <span>業界関係の方へ</span>
                            <img src="@/assets/img/icon_link_w.svg" alt="" class="icon">
                        </a>
                    </div>
                    <div class="item">
                        <a href="javascript:;">
                            <span>お問い合わせへ</span>
                            <img src="@/assets/img/icon_link_w.svg" alt="" class="icon">
                        </a>
                    </div>
                    <div class="item">
                        <a href="javascript:;">
                            <span>利用規約</span>
                            <img src="@/assets/img/icon_link_w.svg" alt="" class="icon">
                        </a>
                    </div>
                    <div class="item">
                        <a href="javascript:;">
                            <span>プライバシーポリシー</span>
                            <img src="@/assets/img/icon_link_w.svg" alt="" class="icon">
                        </a>
                    </div>
                </div>
            </article>
            <div class="site_area">
                <a href="javascript:;" class="logo">
                    <img src="@/assets/img/hawaiianIsland.png" alt="">
                </a>
            </div>
        </div>
        <button type="button" class="close_btn" @click="atSwitchChange">
            <div class="times-icon"></div>
        </button>
    </section>
</template>

<style scoped>
.website_bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .7);
    transition: z-index 0.1s ease-in, background-color 0.3s 0.1s ease-in;
}

.website_bg.close {
    background-color: rgba(0, 0, 0, 0);
    z-index: -1;
    transition: z-index 0.2s 0.2s ease-in;
}

.website_bg .website_map {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #222326;
    color: rgba(255, 255, 255, 0.5);
    width: 493px;
    z-index: 15;
    overflow-y: scroll;
    height: 100%;
    transition: left .3s 0.2s ease-in;
}

.website_bg.close .website_map {
    left: -493px;
    transition: left .3s ease-in;
}
.close_btn{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 493px;
    width: calc(100% - 493px);
    height: 100%;
    background: transparent;
    cursor: pointer;
}

.close_btn .times-icon{
    position: absolute;
    top: 10px;
    left: 30px;
    width: 1.5px;
    height: 40px;
    background: #fff;
    transform: rotate(45deg);
}

.close_btn .times-icon::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5px;
    height: 40px;
    background: #fff;
    transform: rotate(90deg);
}

.website_bg.close .website_map {
    left: -493px;
}

.website_bg .website_map .site_area {
    padding: 20px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.website_map .site_area .title {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    line-height: 28px;
    color: #fff;
    margin-bottom: 15px;
}
.website_map .site_area .title.hascontent {
    padding-left: 28px;
}

.website_map .site_area .title:hover {
    opacity: 0.75;
    cursor: pointer;
}

.site_area .title.hascontent ~ .content{
    max-height: 0;
    transition: .5s all ease-in;
}

.site_area .title.hascontent.open ~ .content{
    max-height: 300px;
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
    font-size: 28px;
    margin: 0 15px 2px 0;
}

.site_area .title .jp {
    font-size: 13px;
}

.site_area .title.hascontent::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 8px solid rgba(255, 255, 255, 0.5);
    border-left: 7px solid #0000;
    border-right: 7px solid #0000;
}

.website_map .logo {
    text-align: left;
    letter-spacing: 0.75px;
}

.website_map .logo img {
    display: block;
    height: 35px;
    width: auto;
    margin-bottom: 10px;
}

.website_map .search_bar {
    display: block;
    height: 35px;
    line-height: 35px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.12);
    border-radius: 5px;
    padding: 5px 10px;
}

.website_map .search_bar * {
    background-color: #fff0;
    margin: 0;
    outline: 0;
    border: none;
    vertical-align: middle;
}

.website_map .search_bar input {
    width: 90%;
    font-size: 14px;
    caret-color: #fff;
    color: #fff;
}

@media screen and (max-width: 767px) {
    /* SITEMAP */
    .website_bg .website_map {
        width: 100%;
    }
    .website_bg.close .website_map {
        width: -100%;
    }
}

</style>