<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits(["update:checked"]);

const props = withDefaults(
    defineProps<{
        checked: boolean;
    }>(),
    {}
);

const proxyChecked = computed({
    get() {
        return props.checked;
    },

    set(val) {
        emit("update:checked", val);
    },
});
</script>

<template>
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            v-model="proxyChecked"
            @click="emit('update:checked', !proxyChecked)"
        />
        <label class="form-check-label" for="flexCheckDefault">
            <slot></slot>
        </label>
    </div>
</template>
