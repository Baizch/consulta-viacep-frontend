<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

import type { Address } from '../types/types'

import CardData from './CardData.vue'


const inputValue = ref<string>('')
const isLoading = ref<boolean>(false)
const address = ref<Address | null>(null)

// const apiUrl = import.meta.env.VITE_API_URL

const handleSearch = async (): Promise<void> => {
    if (inputValue.value.trim() === '') {
        return
    }

    isLoading.value = true

    try {
        // const response = await axios.get(`${apiUrl}/${inputValue.value}`)

        const response = await axios.get(`/api/${inputValue.value}`)

        if (response.data.erro) {
            address.value = { error: 'CEP inválido' } as Address
        } else {
            address.value = response.data
        }

        await new Promise(resolve => setTimeout(resolve, 5000))

        isLoading.value = false

    } catch (error) {
        address.value = { error: 'Erro ao buscar o CEP' } as Address
        isLoading.value = false
    }
}

const handleInput = (e: Event): void => {
    inputValue.value = (e.target as HTMLInputElement).value
}
</script>

<template>
    <a-typography-title class="title">Busca Via CEP</a-typography-title>
    <a-input-search v-model:value="inputValue" placeholder="Insira o CEP" :loading="isLoading" @enter-button="isLoading"
        @input="handleInput" @search="handleSearch" class="input" />
    <CardData v-if="address" :address="address" :isLoading="isLoading" />
</template>

<style scoped>
.input {
    width: 40%;
    margin-bottom: 10px;
}

.title {
    margin-bottom: 20px;
    margin-top: 10%;
}
</style>