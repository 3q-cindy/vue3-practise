<script setup>
    import CircleMarquee from '../ui/CircleMarquee.vue';
    import { ref, reactive, onMounted } from 'vue';
    const list_id = ref('axs123');
    const list_id2 = ref('zxs345');
    const list = reactive([
        {
            src: './src/assets/img/asset 52.jpeg',
            title: "ホオクアアイナ",
            content: "ホオクアアイナ（Ho‘okua‘āina）"
        },
        {
            src: './src/assets/img/asset 53.png',
            title: "ナ・コア・マヌ・コンサベーション",
            content: "ナ・コア・マヌ・コンサベーション（Na Koa Manu C …"
        },
        {
            src: './src/assets/img/asset 54.png',
            title: "イオラニ宮殿",
            content: "イオラニ宮殿（Iolani Palace） …"
        },
        {
            src: './src/assets/img/asset 56.jpeg',
            title: "アウワヒ・フォレスト・レストレーション・プロジェクト",
            content: "アウワヒ・フォレスト・レストレーション・プロジェクト (Au …"
        },
        {
            src: './src/assets/img/asset 57.png',
            title: "ホオクアアイナ",
            content: "ホオクアアイナ（Ho‘okua‘āina）"
        },
        {
            src: './src/assets/img/asset 58.jpeg',
            title: "ハワイ・フォレスト・インスティテュート",
            content: "ハワイ・フォレスト・インスティテュート（Hawai’i Forest Institute)"
        },
        {
            src: './src/assets/img/asset 59.png',
            title: "イミロア天文学センター",
            content: "イミロア天文学センター（ʻImiloa Astronomy Center of Hawaiʻi）"
        },
        {
            src: './src/assets/img/asset 60.jpeg',
            title: "ナショナル熱帯植物園",
            content: "ナショナル熱帯植物園（National Tropical Botanical Garden ）"
        },
        {
            src: './src/assets/img/asset 61.png',
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