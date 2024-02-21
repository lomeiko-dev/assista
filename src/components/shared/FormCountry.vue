<script setup lang="ts">
import Field from "ui/field/Field.vue";
import FilledButton from "ui/FilledButton.vue";
import PopupItem from "ui/PopupItem.vue";
import { ref } from "vue";

export interface IFormCountry {
  country: string;
  city: string;
}

interface IProps {
  defaultCountry?: string;
  defaultCity?: string;
  onClickNext: (form: IFormCountry) => void;
  onChangeCountry?: (value: string) => void 
  onChangeCity?: (value: string) => void
  isShowButton?: boolean
}

const props = defineProps<IProps>();

const countries = [
  "Россия",
  "Казахстан",
  "Армения",
  "Литва",
  "Грузия",
  "Украина",
  "Япония",
  "Китай",
  "Англия",
  "Бразилия",
];

const errorCountry = ref<string | undefined>(undefined);
const valueCountry = ref(props.defaultCountry || "");
const valueCity = ref(props.defaultCity || "");

const clickNextHandle = () => {
  if (valueCountry.value === "") {
    errorCountry.value = "страна не указана";
    return null;
  } else {
    errorCountry.value = undefined;
  }

  const form: IFormCountry = {
    city: valueCity.value,
    country: valueCountry.value,
  };

  props.onClickNext(form);
};

const changeCountryHandler = (value: string) => {
  valueCountry.value = value
  props.onChangeCountry && props.onChangeCountry(value)
}

const changeCityHandler = (value: string) => {
  valueCity.value = value
  props.onChangeCity && props.onChangeCity(value)
}
</script>

<template>
  <Field
    :error-message="errorCountry"
    :on-change="changeCountryHandler"
    :value="valueCountry"
    is-active-dropdwon
    placeholder="Страна*"
  >
    <PopupItem
      styled="outline"
      width="225px"
      :on-click="() => (valueCountry = country)"
      v-for="country in countries"
      :key="country"
    >
      {{ country }}
    </PopupItem>
  </Field>
  <Field
    :value="valueCity"
    margin="15px 0 0 0"
    :on-change="changeCityHandler"
    placeholder="Город"
  />

  <FilledButton v-if="props.isShowButton" @click="clickNextHandle" margin="40px 0 0 0"
    >Далее</FilledButton
  >
</template>
