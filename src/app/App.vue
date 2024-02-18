<script setup lang="ts">
import { MainButton, useWebAppPopup } from 'vue-tg';

const { showAlert } = useWebAppPopup();

</script>

<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-view /> 
    <MainButton class="btn" text="aleфыаrt" @click="() => showAlert('ofubw')" />
  </div>
</template>

<style>
  @import './style.css';
  .btn{
    background-color: red;
  }
</style>
