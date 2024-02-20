<script setup lang="ts">
import FieldPassword from 'ui/field/FieldPassword.vue';
import FilledButton from 'ui/FilledButton.vue';
import FormLayout from 'layout/FormLayout.vue';
import {ref} from 'vue'

const errorPassword = ref<string | undefined>(undefined)
const valuePassword = ref('')

const loginHandle = () => {
    if(valuePassword.value === ''){
        errorPassword.value = 'Пароль не указан'
        return
    }
    else{
        errorPassword.value = undefined
    }

    console.log('dsg')
}

</script>

<template>
    <FormLayout title="Авторизация">
        <FieldPassword :error-message="errorPassword" :value="valuePassword" placeholder="Пароль" :on-change="(value) => valuePassword = value"/>
        <FilledButton @click="loginHandle" margin="40px 0 0 0">Войти</FilledButton>
    </FormLayout>
</template>

<style scoped>
</style>
