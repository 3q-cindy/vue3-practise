<script setup>
    const props = defineProps({
        title: {
            type: String,
            require: true,
        },
        subtitle: {
            type: String,
            require: true,
        },
        content: {
            type: Object,
            rewuire: true,
        }
    })
</script>

<template>
    <div class="unit_section">
        <div class="title_content">
            <h4>{{ props.title }}</h4>
            <h1>{{ props.subtitle }}</h1>
            <div class="content">
                <p v-for="(content, index) in props.content" :key="index">
                    {{ content }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.unit_section{
    display: block;
    text-align: center;
    margin-bottom: 80px;
}
.unit_section h4{
    font-size: 16px;
    font-weight: 400;
}
.unit_section h1{
    font-size: 80px;
    font-family: "FreightNeo W03 Medium";
    font-weight: 300;
    margin-bottom: 15px;
}
.unit_section .content{
    max-width: 650px;
    margin: auto;
}
.unit_section p {
    display: block;
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.8px;
    color: #666;
}


</style>