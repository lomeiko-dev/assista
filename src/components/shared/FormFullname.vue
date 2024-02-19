<script setup lang="ts">
import Text from "ui/Text.vue";
import Field from "ui/field/Field.vue";
import RadioButton from "ui/RadioButton.vue";
import FilledButton from "ui/FilledButton.vue";
import { ref } from "vue";

enum enumGender {
  MAN = "man",
  WOMAN = "woman",
}

export interface IFormFullname {
  name: string;
  lastName: string;
  patronymic: string;
  gender: enumGender;
}

interface IProps {
  defaultName?: string,
  defaultLastName?: string,
  defaultPatronymic?: string,
  defaultGender?: enumGender, 
  title?: string;
  subTitle?: string;
  onSkip?: () => void;
  onBack?: () => void;
  onClickNext: (form: IFormFullname) => void;
}

const props = defineProps<IProps>();

const errorName = ref<string | undefined>(undefined);
const errorLastName = ref<string | undefined>(undefined);

const valueName = ref(props.defaultName || '');
const valueLastName = ref(props.defaultLastName || '');
const valuePatronymic = ref(props.defaultPatronymic || '');
const valueGender = ref<enumGender>(props.defaultGender || enumGender.MAN);

const clickNextHandle = () => {
  if (valueName.value === "") {
    errorName.value = "Имя не указано";
    return null;
  } else {
    errorName.value = undefined;
  }

  if (valueLastName.value === "") {
    errorLastName.value = "Фамилия не указана";
    return null;
  } else {
    errorLastName.value = undefined;
  }

  const form: IFormFullname = {
    name: valueName.value,
    lastName: valueLastName.value,
    patronymic: valuePatronymic.value,
    gender: valueGender.value,
  };

  props.onClickNext(form);
};
</script>

<template>
  <Field
    :error-message="errorName"
    :value="valueName"
    :on-change="(value) => (valueName = value)"
    placeholder="Имя*"
  />
  <Field
    :error-message="errorLastName"
    margin="15px 0 0 0"
    :value="valueLastName"
    :on-change="(value) => (valueLastName = value)"
    placeholder="Фамилия*"
  />
  <Field
    margin="15px 0 0 0"
    :value="valuePatronymic"
    :on-change="(value) => (valuePatronymic = value)"
    placeholder="Отчество"
  />

  <Text
    :font-size="16"
    :font-weight="600"
    margin="30px 0 0 0"
    color-scheme="dark"
    value="Ваш пол"
  />
  <div class="gender">
    <RadioButton
      :checked="valueGender === enumGender.MAN"
      label="Мужской"
      :on-trigger="() => (valueGender = enumGender.MAN)"
    />
    <RadioButton
      :checked="valueGender === enumGender.WOMAN"
      label="Женский"
      :on-trigger="() => (valueGender = enumGender.WOMAN)"
    />
  </div>
  <FilledButton @click="clickNextHandle" margin="40px 0 0 0"
    >Далее</FilledButton
  >
</template>

<style scoped lang="scss">
.gender {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 11px;
}
</style>
