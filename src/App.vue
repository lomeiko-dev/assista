<script setup lang="ts">
import { MainButton, useWebAppPopup } from 'vue-tg';

const { showAlert } = useWebAppPopup();

</script>

<template>
  <div>
    <router-link to="/">Ho  me</router-link> |
    <router-link to="/about">About</router-link>
    <router-view /> 
    <MainButton class="btn" text="aleфыаrt" @click="() => showAlert('ofubw')" />
  </div>
</template>

<style scoped>
  .btn{
    background-color: red;
  }
</style>
