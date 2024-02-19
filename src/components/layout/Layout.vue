<script setup lang="ts">
import logo from "assets/img/logo.png"
</script>

<template>
    <div class="container">
        <div class="wrap-logo">
            <img width="189px" class="logo" :src="logo"/>
        </div>
        <slot />
    </div>
</template>

<style scoped>
.wrap-logo{
    width: fit-content;
    margin: 0 auto;
}
.container{
  margin: 0 20px;

}
</style>