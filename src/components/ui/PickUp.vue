<script setup>
    import { ref } from 'vue';
    const hideRef = ref(false);
        window.addEventListener('scroll', function(){
            hideRef.value = (window.scrollY > 0);
        })
</script>

<template>
    <section :class="{'pick_up': true,'hidden': hideRef }">
        <div class="image_half">
            <img src="@/assets/img/R5TM5544.jpg" alt="pickup">
        </div>
        <div class="content">
            <h5>PICK UP</h5>
            <p>Zero Waste Oahu (ゼロウェイストオアフ) の …</p>
        </div>
    </section>
</template>

<style scoped>
section.pick_up{
    display: flex;
    position: fixed;
    box-sizing: border-box;
    bottom: 25px;
    left: 25px;
    gap: 15px;
    z-index: 10;
    width: calc(100% - 25px);
    max-width: 400px;
    height: 110px;
    padding: 15px;
    background-color: #222;
    border-radius: 10px;
    overflow: hidden;
    transition: bottom .5s ease-in;
}
section.pick_up.hidden{
    bottom: -140px;
}
section.pick_up .image_half{
    width: 40%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
}
section.pick_up .image_half > img{
    width: 100%;
}
section.pick_up .content *{
    color: #fff;
    font-size: 14px;
    line-height: 25px;
}
section.pick_up .content h5{
    color: var(--hawaii-red);
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 1px;
}
</style>