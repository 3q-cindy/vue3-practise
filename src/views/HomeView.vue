<script setup>
import { ref, reactive } from 'vue';
import MainSection from '@/components/index/MainSection.vue'
import IntroSection from '@/components/index/IntroSection.vue'
import Pickup from '@/components/ui/PickUp.vue'
import CardSection from '@/components/index/CardSection.vue'
import FeaturedSection from '@/components/index/FeaturedSection.vue'
import AdvertiseSection from '@/components/index/AdvertiseSection.vue'
import VedioSection from '@/components/index/VedioSection.vue'
import HeaderBar from '@/components/HeaderBarindex.vue'
import NavBar from '@/components/NavBar.vue'

</script>
<template>
  <HeaderBar />
  <NavBar />
  <Pickup />
  <MainSection />
  <IntroSection />
  <CardSection />
  <!-- <CardSection /> -->
  <!-- <CardSection /> -->
  <FeaturedSection />
  <AdvertiseSection />
  <VedioSection />
</template>

<style scoped>
h1{
  font-size: 100px;
  margin: 30px auto;
}
/* @media screen and (min-width: 1025px){
  header.header {
      height: 110px;
      background: red;
  }

  header.header .logo img {
      max-height: 45px;
  }
} */

</style>