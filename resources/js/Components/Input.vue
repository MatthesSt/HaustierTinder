<script setup lang="ts">
import { createId } from '@/utils';
import { onMounted, ref } from 'vue';

withDefaults(
    defineProps<{
        modelValue: string;
        placeholder: string;
        type?: 'text' | 'email' | 'password' | 'textarea';
        error?: string;
        options?: string[];
    }>(),
    {
        type: 'text',
    }
);
defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
const id = ref(createId());
defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <div class="input-group has-validation">
        <slot name="beforeButton"></slot>
        <div class="form-floating" :class="{ 'is-invalid': error }">
            <template v-if="type == 'textarea'">
                <textarea
                    ref="input"
                    class="form-control"
                    :class="{ 'is-invalid': error }"
                    :id="id"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    style="height: 6rem"
                ></textarea>
            </template>
            <template v-else>
                <input
                    ref="input"
                    :type="type"
                    class="form-control"
                    :class="{ 'is-invalid': error }"
                    :id="id"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    :list="'datalist' + id"
                />
                <datalist :id="'datalist' + id" v-if="options">
                    <option v-for="option of options" :value="option"></option>
                </datalist>
            </template>
            <label :for="id">{{ placeholder }}</label>
        </div>
        <slot name="afterButton"></slot>
        <div class="invalid-feedback">{{ error }}</div>
    </div>
</template>
