<script setup lang="ts">
import Text from "ui/Text.vue";
import Button from "ui/Button.vue";
import FilledButton from "ui/FilledButton.vue";

import logo from "assets/img/logo.png";
import { useRouter } from "vue-router";

const router = useRouter();

const clickRegistrationHandle = () => {
  router.push({ name: "RegistrationScreen" });
};

const clickLoginHandle = () => {
  router.push({ name: "LoginScreen" });
};
</script>

<template>
  <div class="container">
    <img width="189px" :src="logo" />
    <Text
      :line-height="34"
      margin="60px 0 0 0"
      :font-size="28"
      :font-weight="700"
      color-scheme="dark"
      value="Добро пожаловать!"
    />
    <FilledButton @click="clickRegistrationHandle" margin="28px 0 0 0"
      >Зарегистрироваться</FilledButton
    >
    <Button
      @click="clickLoginHandle"
      margin="40px 0 0 0"
      :font-weight="400"
      :font-size="20"
      color-scheme="dark"
      >У меня уже есть аккаунт</Button
    >
  </div>
</template>
