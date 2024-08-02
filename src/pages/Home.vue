<script setup lang="ts">
import SearchInput from '../components/SearchInput.vue'
import Divider from '../components/Divider.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="home-container">
        <SearchInput />
        <!-- TO DO: adicionar componente com informaçoes mais especificas do cep, tipo historia, etc???? -->
        <Divider />
        <Footer />
    </div>
</template>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
}
</style>