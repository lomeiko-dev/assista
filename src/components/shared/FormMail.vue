<script setup lang="ts">
import Field from "ui/field/Field.vue";
import FilledButton from "ui/FilledButton.vue";
import InputMask from 'primevue/inputmask';
import Text from "ui/Text.vue";
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
  <div class="wrap-input-mask">
    <Text color-scheme="dark" class="error" v-if="errorNumberPhone" :value="errorNumberPhone"/>
    <InputMask id="basic" :class="`${errorNumberPhone && 'p-invalid'}`" v-model="valueNumberPhone" mask="+7 (999) 999 99 99" placeholder="Телефон*" />
  </div>

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

<style scoped>

.wrap-input-mask{
  position: relative;
  
  .error{
    position: absolute;
    top: -20px;
    left: 0;
    color: red;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }

  #basic{
    padding: 10px 15px;
    width: 100%;
  }
}

</style>
