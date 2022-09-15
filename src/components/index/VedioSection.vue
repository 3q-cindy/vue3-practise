<script setup>
    import { onMounted } from 'vue';
    onMounted(()=>{
        let movie_area = document.querySelector('.vedio_layout');
        movie_area.addEventListener('mousemove', (Event)=>{
            const x_position = (Event.pageX - 35) + 'px';
            const y_position = (Event.pageY - movie_area.offsetTop - 40) + 'px';
            movie_area.style.setProperty("--mouse-X-position", x_position);
            movie_area.style.setProperty("--mouse-Y-position", y_position);
            movie_area.style.setProperty("--mouse-opacity", 1);
        });
        movie_area.addEventListener('mouseleave',(Event)=>{
            movie_area.style.setProperty("--mouse-opacity", 0);
        });
    });

</script>

<template>
    <section class="vedio_layout">
        <a href="javascript:;" class="mouse_cursor">
            <img src="@/assets/img/asset 73.png" alt="arrow">
        </a>
        <video class="pc_content" src="https://www.allhawaii.jp/malamahawaii/wp-content/themes/malamahawaii/movies/top_footer_mv.mp4" loop="" muted="" autoplay=""></video>
    </section>
</template>

<style scoped>

section.vedio_layout {
    position: relative;
    height: 800px;
    overflow: hidden;
    --mouse-X-position: 0;
    --mouse-Y-position: 0;
    --mouse-opacity: 0;
}

section.vedio_layout .mouse_cursor {
    position: absolute;
    top:  var(--mouse-Y-position);
    left: var(--mouse-X-position);
    opacity: var(--mouse-opacity);
    transition: all .05s ease-in;
    width: 80px;
    height: 80px;
}

section.vedio_layout .mouse_cursor img {
    width: 100%;
    cursor: default;
}

section.vedio_layout video {
    min-width: 100%;
    min-height: 100%;
}

</style>