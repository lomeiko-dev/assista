<script setup lang="ts">
import Text from "ui/Text.vue";
import Button from "ui/Button.vue";
import FilledButton from "ui/FilledButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const clickRegistrationCustomerHandle = () => {
  router.push({ name: "RegistrationCustomerScreen" });
};

const clickRegistrationExecutorHandle = () => {
  router.push({ name: "RegistrationExecutorScreen" });
};
</script>

<template>
  <div class="registration">
    <Text
      margin="30px 0 0 0"
      :font-weight="700"
      :font-size="28"
      color-scheme="dark"
      value="Регистрация"
    />
    <FilledButton @click="clickRegistrationCustomerHandle" margin="50px 0 0 0"
      >Я заказчик</FilledButton
    >
    <Button
      @click="clickRegistrationExecutorHandle"
      margin="40px 0 0 0"
      :font-size="20"
      :font-weight="400"
      color-scheme="dark"
      >Я исполнитель</Button
    >
  </div>
</template>

<style scoped>
.registration{
  text-align: center;
}
</style>
