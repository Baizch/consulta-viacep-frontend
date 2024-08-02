<script setup lang="ts">
import { ref } from 'vue'

const year = ref<number>(new Date().getFullYear())
</script>

<template>
    <footer class="footer">
        <p>&copy; {{ year }} Franco A Baisch</p>
        <p>All rights reserved.</p>
    </footer>
</template>

<style scoped>
.footer {
    text-align: center;
    padding: 1em;
    bottom: 0;
    width: 100%;
    color: #000000;
    margin-top: auto;
}
</style>