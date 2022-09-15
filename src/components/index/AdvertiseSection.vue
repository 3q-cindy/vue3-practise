<script setup>
    import CircleMarquee from '../ui/CircleMarquee.vue';
    import { ref, reactive, onMounted } from 'vue';
    const list_id = ref('axs123');
    const list_id2 = ref('zxs345');
    const list = reactive([
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset52.jpeg',
            title: "ホオクアアイナ",
            content: "ホオクアアイナ（Ho‘okua‘āina）"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset53.png',
            title: "ナ・コア・マヌ・コンサベーション",
            content: "ナ・コア・マヌ・コンサベーション（Na Koa Manu C …"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset54.png',
            title: "イオラニ宮殿",
            content: "イオラニ宮殿（Iolani Palace） …"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset56.jpeg',
            title: "アウワヒ・フォレスト・レストレーション・プロジェクト",
            content: "アウワヒ・フォレスト・レストレーション・プロジェクト (Au …"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset057.png',
            title: "ホオクアアイナ",
            content: "ホオクアアイナ（Ho‘okua‘āina）"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset58.jpeg',
            title: "ハワイ・フォレスト・インスティテュート",
            content: "ハワイ・フォレスト・インスティテュート（Hawai’i Forest Institute)"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset59.png',
            title: "イミロア天文学センター",
            content: "イミロア天文学センター（ʻImiloa Astronomy Center of Hawaiʻi）"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset60.jpeg',
            title: "ナショナル熱帯植物園",
            content: "ナショナル熱帯植物園（National Tropical Botanical Garden ）"
        },
        {
            src: 'https://raw.githubusercontent.com/3q-cindy/vue3-practise/master/src/assets/img/asset61.png',
            title: "マラマ・マウナルア",
            content: "マラマ・マウナルア（Mālama Maunalua ）"
        }
    ]);
</script>

<template>
    <section class="advertise_layout">
        <div class="container">
            <h3 class="major_title">COMMUNITIES & PARTNERS</h3>
            <div class="sub_title">
                <h3>コミュニティ紹介</h3>
                <a href="javascript:;" class="more_btn_red">
                        詳しく見る
                    </a>
            </div>
        </div>
        <CircleMarquee :data="list" :ips="list_id" />
        <CircleMarquee :data="list" :ips="list_id2" :reverse="true" />
    </section>
</template>

<style scoped>


/* advertise */

.advertise_layout {
    padding: 100px 0;
    background-color: var(--hawaii-grey);
    overflow-x: hidden;
}

</style>