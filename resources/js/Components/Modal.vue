<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { toRefs } from 'vue';
const props = withDefaults(
    defineProps<{
        modelValue?: boolean;
        title?: string;
    }>(),
    { title: '', modelValue: false }
);
const { modelValue } = toRefs(props);
const emit = defineEmits(['update:modelValue']);
const show = ref(modelValue.value);
watch(
    () => modelValue.value,
    () => {
        if (show.value == modelValue.value) return;
        if (show.value) close();
        else open();
    }
);
const modal = ref(null);
const open = () => {
    emit('update:modelValue', true);
    show.value = true;
    nextTick(() => {
        modal.value.classList.add('d-block');
        setTimeout(() => modal.value.classList.add('show'), 0);
    });
};
const close = () => {
    modal.value.classList.remove('show');
    setTimeout(() => {
        modal.value.classList.remove('d-block');
        nextTick(() => {
            emit('update:modelValue', false);
            show.value = false;
        });
    }, 150);
};
</script>

<template>
    <div @click="open">
        <slot name="open"></slot>
    </div>
    <template v-if="show">
        <div ref="modal" class="modal fade m-0" @click.self="close">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-truncate">
                            {{ title }}
                        </h5>
                        <button type="button" class="btn-close" @click.self="close"></button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show m-0"></div>
    </template>
</template>
