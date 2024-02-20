<script setup lang="ts">
import FormFullname, { IFormFullname } from "shared/FormFullname.vue";
import FormMail, { IFormMail } from "shared/FormMail.vue";
import FormPassword from "shared/FormPassword.vue";
import FormDateBirth from "shared/FormDateBirth.vue";
import FormAvatar from "shared/FormAvatar.vue";
import FormLayout from "layout/FormLayout.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const step = ref(0);
const router = useRouter();

interface IForm {
  formFullName?: IFormFullname;
  formMail?: IFormMail;
  password?: string;
}

const formRegistration = ref<IForm>({
  formFullName: undefined,
  formMail: undefined,
});

const backHandle = () => {
  if (step.value === 0) router.go(-1);

  step.value--;
};

watch(formRegistration.value, () => {
  step.value++;
});

const clickRegistrationHandle = (value: string) => {
  formRegistration.value.password = value;
};

const clickSetDateHandle = (date: string) => {
  console.log(date);
  step.value++;
};

const clickSetAvatarHandle = (image: string) => {
  console.log(image);
};
</script>

<template>
  <FormLayout v-if="step === 0" :on-back="backHandle" title="Регистрация">
    <FormFullname
      :default-name="formRegistration.formFullName?.name"
      :default-last-name="formRegistration.formFullName?.lastName"
      :default-patronymic="formRegistration.formFullName?.patronymic"
      :default-gender="formRegistration.formFullName?.gender"
      :on-click-next="(form) => (formRegistration.formFullName = form)"
    />
  </FormLayout>

  <FormLayout v-if="step === 1" :on-back="backHandle" title="Регистрация">
    <FormMail
      :default-number-phone="formRegistration.formMail?.numberPhone"
      :default-email="formRegistration.formMail?.email"
      :on-click-next="(form) => (formRegistration.formMail = form)"
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
    :on-skip="() => step++"
    title="Вы успешно зарегистрированы!"
    sub-title="Давайте заполним еще немного данных"
  >
    <FormDateBirth :on-click-next="clickSetDateHandle" />
  </FormLayout>

  <FormLayout
    v-if="step === 4"
    :on-skip="() => step++"
    sub-title="Загрузите аватар"
  >
    <FormAvatar :on-click-next="clickSetAvatarHandle" />
  </FormLayout>
</template>

<style scoped></style>
