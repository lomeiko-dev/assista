<script setup lang="ts">
    import Text from '../components/ui/Text.vue'
    import FilledButton from '../components/ui/FilledButton.vue'
    import Button from "../components/ui/Button.vue"
    import Field from '../components/ui/field/Field.vue';
    import FieldPassword from '../components/ui/field/FieldPassword.vue';
    import RadioButton from '../components/ui/RadioButton.vue'
import FieldDate from '../components/ui/field/FieldDate.vue';
</script>

<template>
  <div class="page">
    <Text :font-size="100" value="124" color-scheme="dark"/>
    <FilledButton>sdgs</FilledButton>
    <Button color-scheme="light">
      agsdgdsg
    </Button>
    <Field error-message="sdgsdg" :on-change="() => null" placeholder="Введите текст" is-active-dropdwon>
      <template #dropdownContent>
      </template>
    </Field>
    <FieldPassword error-message="sdgsdg" :on-change="() => null"/>
    <FieldDate margin="10px 0 0 0" :on-change="() => null"/>
    <RadioButton :on-trigger="() => console.log('sdgsckgon,dlfhdg')" label="dsgsdg"/>
    <RadioButton margin="134px 0 0 0" :on-trigger="() => console.log('sdgsdg')" label="sdgsdgsd"/>
  </div>
</template>

<style scoped>
</style>
