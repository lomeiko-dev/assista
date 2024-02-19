<script setup lang="ts">
import FieldPassword from "ui/field/FieldPassword.vue";
import FilledButton from "ui/FilledButton.vue";
import { ref } from "vue";

interface IProps {
  defaultPassword?: string,
  onClickRegistration: (password: string) => void;
}

const props = defineProps<IProps>();

const errorPassword = ref<string | undefined>(undefined);
const errorReplayPassword = ref<string | undefined>(undefined);
const valuePassword = ref(props.defaultPassword || '');
const valueReplayPassword = ref('');

const clickRegistrationHandle = () => {
  if (valuePassword.value === "") {
    errorPassword.value = "пароль не указан";
    return;
  } else {
    errorPassword.value = undefined;
  }

  if (valuePassword.value !== valueReplayPassword.value) {
    errorReplayPassword.value = "пароли не совпадают";
    return
  } else {
    errorReplayPassword.value = undefined;
  }

  props.onClickRegistration(valuePassword.value);
};
</script>

<template>
  <FieldPassword
    :error-message="errorPassword"
    :value="valuePassword"
    :on-change="(value) => (valuePassword = value)"
    placeholder="Пароль*"
  />
  <FieldPassword
    :error-message="errorReplayPassword"
    margin="15px 0 0 0"
    :value="valueReplayPassword"
    :on-change="(value) => (valueReplayPassword = value)"
    placeholder="Повторите пароль*"
  />
  <FilledButton @click="clickRegistrationHandle" margin="40px 0 0 0"
    >Зарегистрироваться</FilledButton
  >
</template>
