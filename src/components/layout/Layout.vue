<script setup lang="ts">
import logo from "assets/img/logo.png"
</script>

<template>
    <div class="container">
        <img width="189px" :src="logo"/>
        <slot />
    </div>
</template>

<style scoped>
.container{
  margin: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>