<script setup lang="ts">
import Field from "ui/field/Field.vue";
import FilledButton from "ui/FilledButton.vue";
import { ref } from "vue";


export interface IFormMail {
  numberPhone: string;
  email: string;
}

interface IProps {
  defaultNumberPhone?: string,
  defaultEmail?: string,
  onClickNext: (form: IFormMail) => void;
}

const props = defineProps<IProps>();

const errorNumberPhone = ref<string | undefined>(undefined);
const valueNumberPhone = ref(props.defaultNumberPhone || '');
const valueEmail = ref(props.defaultEmail || '');

const clickNextHandle = () => {
  if (valueNumberPhone.value === "") {
    errorNumberPhone.value = "Номер телефона не указан";
    return;
  } else {
    errorNumberPhone.value = undefined;
  }

  const form: IFormMail = {
    email: valueEmail.value,
    numberPhone: valueNumberPhone.value,
  };

  props.onClickNext(form);
};
</script>

<template>
  <Field
    :error-message="errorNumberPhone"
    :value="valueNumberPhone"
    :on-change="(value) => (valueNumberPhone = value)"
    placeholder="Телефон*"
  />
  <Field
    type="email"
    :value="valueEmail"
    margin="15px 0 0 0"
    :on-change="(value) => (valueEmail = value)"
    placeholder="Эл. почта"
  />
  <FilledButton @click="clickNextHandle" margin="40px 0 0 0"
    >Далее</FilledButton
  >
</template>

<style scoped></style>
