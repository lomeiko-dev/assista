<script setup lang="ts">
import FormFullname, { IFormFullname } from "shared/FormFullname.vue";
import FormPassword from "shared/FormPassword.vue";
import FormCountry, { IFormCountry } from "shared/FormCountry.vue";
import FromSkillStack, { IFormSkillStack } from "shared/FromSkillStack.vue";
import FormLayout from "layout/FormLayout.vue";
import FormAvatar from "shared/FormAvatar.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const step = ref(0);
const router = useRouter()

interface IForm {
  formFullName?: IFormFullname;
  formCountry?: IFormCountry;
  password?: string;
}

const formRegistration = ref<IForm>({
  formFullName: undefined,
  formCountry: undefined,
  password: undefined,
});

watch(formRegistration.value, () => {
  step.value++;
});

const clickRegistrationHandle = (password: string) => {
  formRegistration.value.password = password;
};

const setSkillStackHandle = (form: IFormSkillStack) => {
  console.log(form);
  step.value++;
};

const setImageHandle = (image: string) => {
  console.log(formRegistration.value, image);
};

const backHandle = () => {
    if(step.value === 0){
        router.go(-1);
    }

    step.value--
};
const skipHandle = () => step.value++;
</script>

<template>
  <FormLayout v-if="step === 0" :on-back="backHandle" title="Регистрация">
    <FormFullname
      :default-patronymic="formRegistration.formFullName?.patronymic"
      :default-last-name="formRegistration.formFullName?.lastName"
      :default-name="formRegistration.formFullName?.name"
      :default-gender="formRegistration.formFullName?.gender"
      :on-click-next="(form) => (formRegistration.formFullName = form)"
    />
  </FormLayout>

  <FormLayout v-if="step === 1" :on-back="backHandle" title="Регистрация">
    <FormCountry
      :default-country="formRegistration.formCountry?.country"
      :default-city="formRegistration.formCountry?.city"
      :on-click-next="(form) => (formRegistration.formCountry = form)"
    />
  </FormLayout>

  <FormLayout v-if="step === 2" :on-back="backHandle" title="Регистрация">
    <FormPassword
      :default-password="formRegistration.password"
      :on-click-registration="clickRegistrationHandle"
    />
  </FormLayout>

  <FormLayout
    v-if="step === 3"
    :on-skip="skipHandle"
    sub-title="Давайте заполним еще немного данных"
    title="Вы успешно зарегистрированы!"
  >
    <FromSkillStack :on-click-next="setSkillStackHandle" />
  </FormLayout>

  <FormLayout
    v-if="step === 4"
    :on-skip="skipHandle"
    sub-title="Загрузите аватар"
  >
    <FormAvatar :on-click-next="setImageHandle" />
  </FormLayout>
</template>
<style scoped></style>
