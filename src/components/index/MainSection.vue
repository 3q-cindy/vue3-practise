<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
    import { onMounted, ref, reactive } from 'vue';
    const progress = ref(0);
    const titlegroup = [
        {name:'R', id:1 },
        {name:'e', id:2 },
        {name:'-', id:3 },
        {name:'I', id:4 },
        {name:'m', id:5 },
        {name:'a', id:6 },
        {name:'g', id:7 },
        {name:'i', id:8 },
        {name:'n', id:9 },
        {name:'e', id:10 },
        {name:' ', id:11 },
        {name:'H', id:12 },
        {name:'a', id:13 },
        {name:'w', id:14 },
        {name:'a', id:15 },
        {name:'i', id:16 },
        {name:'‘', id:17 },
        {name:'i', id:18 }
    ];
    const titleChar = reactive(titlegroup);
    onMounted(()=>{
        window.addEventListener("scroll", function () {
            // progress.value = window.innerHeight + 'deg';
            progress.value = this.pageYOffset + 'deg';
        });
    });
</script>

<template>
        <section class="main_layout">
            <div class="container title_group">
                <div class="subtitle">
                    <h3 style="--title:0.2s">ハワイを想うことは、 </h3>
                    <h3 style="--title:0.4s"> ハワイの未来を創ること。</h3>
                </div>
                <h1 class="title">
                    <Transition v-for="char in titleChar" :key="char.id" >
                        <span :style="{'--title': char.id*0.05 + 's'}"> {{ char.name }} </span>
                    </Transition>
                </h1>
            </div>
            <div class="row">
                <img class="main_img scroll_img" src="@/assets/img/main.jpg" alt="plant">
                <div class="container main_group">
                    <div class="main_scroll">
                        <img class="circle" :style="{'--hawaii': progress}"  src="@/assets/img/circle.svg" alt="scroll">
                        <img class="arrow" src="@/assets/img/black_arrow_b.svg" alt="arrow">
                    </div>
                    <article class="main_content">
                        <p>美しい楽園ハワイは、永遠ではありません。</p>
                        <p>山から海まで、ハワイに生きる美しい自然や文化に</p>
                        <p>「マラマ = 思いやりの心」を持って接すること。</p>
                        <p>レスポンシブル・ツーリズムは、そんな思いやりの心を </p>
                        <p>旅の中で実践していく、新しい観光のカタチです。</p>
                        <p>ハワイが何十年後も、何百年後も、素晴らしい楽園であるよう</p>
                        <p>旅行者のみなさんだからできることがあります。</p>
                    </article>
                </div>
            </div>
        </section>
</template>

<style scoped>
.main_layout {
    margin: 70px 0;
    margin-bottom: 0;
    --hawaii: 0;
    --title: 0;
}

.main_layout * {
    color: #000;
}

.main_layout .title_group {
    position: relative;
    align-items: center;
    margin-bottom: -70px;
    z-index: 2;
}

.main_layout .subtitle {
    width: 33%;
}
.main_layout .subtitle h3{
    opacity: 0;
    transform: translateY(30px);
    animation: fade-in 1s linear;
    animation-fill-mode:forwards;
    animation-delay: var(--title);
}

.main_layout .title {
    width: 65%;
}
.main_layout .title span{
    display: inline-block;
    font-weight: 500;
    font-family: "FreightNeo W03 Medium";
    font-style: normal;
    width: auto;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;

    opacity: 0;
    transform: translateY(30px);
    transition: all ease-in;
    animation: fade-in 1s linear;
    animation-delay: var(--title);
    animation-fill-mode:forwards;
}
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.main_layout .main_img {
    display: inline-block;
    width: 100%;
    opacity: 0.5;
    transform: scale(1.3) translateY(160px);

    transition: transform ease-in;
    animation: zoom-in 2.5s cubic-bezier(0.39, 0.575, 0.565, 1);
    animation-delay: var(--title);
    animation-fill-mode:forwards;
    clip-path: inset(0);
}
@keyframes zoom-in {
    from {
        opacity: 0.5;
        transform: scale(1.3) translateY(160px);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

.main_layout .main_scroll {
    position: absolute;
    top: 0px;
    right: 70px;
}

.main_layout .main_scroll img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(var(--hawaii));
}
@media screen and (max-width: 767px){
    /* main */
    .main_layout .title_group {
        position: relative;
        flex-direction: column-reverse;
        align-items: start;
        padding: 20px;
        margin-bottom: 0;
    }
    .main_layout .title_group * {
        width: 100%;
    }
    .main_layout h1.title {
        font-size: 70px;
        line-height: 4.5rem;
    }
    .main_layout .main_group {
        width: 100%;
    }
    .main_layout .main_content {
        width: 100%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* MAIN */
    .main_layout .title_group {
        padding: 20px;
    }
    .main_layout .main_group {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .main_layout .title_group * {
        width: 100%;
    }
    .main_layout h1.title {
        font-size: 100px;
        line-height: 5.2rem;
    }
}
@media screen and (min-width: 1025px) {
    /* main */
    .main_layout {
        clear: both;
    }
    .main_layout h1.title {
        font-size: 170px;
        line-height: 10rem;
    }
    .main_layout .main_img {
        width: 65%;
        border-radius: 0 20px 20px 0;
    }
    .main_layout .main_img {
        content: "";
        display: block;
        clear: both;
    }
    .main_layout .row {
        display: flex;
    }
    .main_layout .main_group {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        margin-left: 6%;
    }
    .main_layout .main_scroll {
        position: unset;
        display: block;
        top: -50px;
        margin: auto;
        margin-bottom: 150px;
        transform: scale(1.2);
    }
    .main_layout .main_content {
        writing-mode: vertical-lr
    }
}
</style>