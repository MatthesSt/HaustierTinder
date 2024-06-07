<script setup lang="ts">
import { currentShelter } from "../../shelter";
</script>
<template>
    <div class="row g-2">
        <div v-for="animal of currentShelter?.tiere" class="col-6">
            <div class="card">
                <div class="card-body">
                    <div class="h-2">{{ animal.name }} ({{ animal.alter }})</div>
                    <div>{{ animal.art }}, {{ animal.rasse }}, {{ animal.farbe }}</div>
                    <div>{{ animal.besonderheiten }}</div>

                </div>
            </div>
        </div>

    </div>
</template>