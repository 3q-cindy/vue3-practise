<script setup>

import UnitTitle from '@/components/ui/UnitTitle.vue'
import UnitBtnGroup from '@/components/ui/UnitBtnGroup.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import NavBar from '@/components/NavBar.vue'
import FeaturedSection from '@/components/index/FeaturedComSection.vue'
import {ref, reactive } from 'vue'

const title = ref('特集記事');
const subtitle = ref('Feature');
const content =  reactive([
  '日本の皆さんにもっと知って欲しいことを特集記事としてお届けします。',
  'ことば、数字、ストーリーなど、ちょっと違う視点でハワイの魅力を切り取ります。',
  '知るほどハワイが好きに、そして大切に思う人が増えてくれたら嬉しいです。'
  ]);
</script>

<template>
  <HeaderBar />
  <NavBar />
  <section>
    <UnitTitle :title="title" :subtitle="subtitle" :content="content" />
  </section>
  <div class="container">
      <h3 class="major_title">LATEST</h3>
  </div>
  <FeaturedSection />
</template>

<style scoped>
section{
    padding: 65px 0;
}
</style>