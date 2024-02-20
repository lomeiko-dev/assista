<script setup lang="ts">
    import Field from 'ui/field/Field.vue';
    import FieldMultiline from 'ui/field/FieldMultiline.vue';
    import FieldPrice from 'ui/field/FieldPrice.vue';
    import RadioButton from 'ui/RadioButton.vue';
    import Text from 'ui/Text.vue';
    import Range from 'ui/Range.vue';
    import FilledButton from 'ui/FilledButton.vue';
    import PopupItem from 'ui/PopupItem.vue';
    import {ref} from 'vue'

    interface IOrderForm {
        deadline: string,
        name: string
        description: string,
        price: number,
        skills: string
    }

    interface IProps {
        onClickCreateOrder: (form: IOrderForm) => void
    }

    const props = defineProps<IProps>()
    
    const scales = [
        '0дн',
        '1нед',
        '1мес',
        '2мес',
        '3мес',
    ]

    const skills = [
        'paython',
        'lua',
        'git',
        'html',
        'css',
        'js',
        'react',
        'go',
        'vue',
        'C#',
        'WPF'
    ]

    const valueDeadline = ref('')
    const valueName = ref('')
    const valueDescription = ref('')
    const valueSkills = ref('')
    const isOnline = ref(true)
    const valuePrice = ref(0)

    const clickValueSkillsHandle = (value: string) => {
        valueSkills.value += `${valueSkills.value.length !== 0 ? ', ' : ''}${value}`
    }

    const clickCreateOrderHandle = () => {
        const form: IOrderForm = {
            deadline: valueDeadline.value,
            description: valueDescription.value,
            name: valueName.value,
            price: valuePrice.value,
            skills: valueSkills.value
        }

        props.onClickCreateOrder(form)
    }
</script>

<template>
    <Field :value="valueName" :on-change="(value) => valueName = value" placeholder="Название"/>
    <FieldMultiline :value="valueDescription" margin="15px 0 0 0" :height="160" :on-change="(value) => valueDescription = value" placeholder="Техническое задание"/>

    <RadioButton checked margin="15px 0 0 0" :on-trigger="() => isOnline = true" label="онлайн"/>
    <RadioButton margin="10px 0 0 0" :on-trigger="() => isOnline = false" label="оффлайн"/>

    <div v-if="!isOnline">
        <slot name="formCountry"/>
    </div>

    <Field :value="valueSkills" margin="15px 0 0 0" is-active-dropdwon placeholder="Выберите навыки" :on-change="(value) => valueSkills = value">
        <PopupItem styled="line" :on-click="() => clickValueSkillsHandle(skill)" v-for="skill in skills" :key="skill">
            {{ skill }}
        </PopupItem>
    </Field>

    <div class="slice">
        <Text color-scheme="dark" value="Цена"/>
        <FieldPrice class="field" currency="₽" :on-change="(value) => valuePrice = Number(value)"/>
    </div>
    <div class="slice">
        <Text color-scheme="dark" value="Срок"/>
        <Field :value="valueDeadline" class="field" :on-change="(value) => valueDeadline = value"/>
    </div>

    <div class="range-wrap">
        <Range :on-change="(value) => valueDeadline = scales[value]" :default-value="0" :max-value="4" :min-value="0"/>
        <div class="scale">
            <Text color-scheme="dark" v-for="item in scales" :key="item" :value="item"/>
        </div>
    </div>

    <FilledButton @click="clickCreateOrderHandle" margin="40px 0 0 0">Создать заказ</FilledButton>
</template>

<style scoped>

.range-wrap{
    margin-top: 15px;
}
.slice{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 23px;

    .field{
        width: 100%;
        max-width: 245px;
    }
}

.scale{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>