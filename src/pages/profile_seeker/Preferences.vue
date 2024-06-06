<template>
    <p>Wähle aus, welche Tiere du suchen möchtest.</p>
    <div class="container">
        <div class="row g-2" v-if="currentUser">
            <div v-for="animal of currentUser.preferences" class="col-6">
                <div class="card" role="button" :class="{ 'bg-primary': animal.active }"
                    @click="animal.active = !animal.active">
                    <div class="card-body">
                        {{ animal.german }}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import { currentUser } from "../../user";
</script>
<style></style>
