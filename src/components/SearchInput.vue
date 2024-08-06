<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'

import type { Address } from '../types/types'

import CardData from './CardData.vue'


const inputValue = ref<string>('')
const isLoading = ref<boolean>(false)
const address = ref<Address | null>(null)

const formatCep = (cep: string): string => {
    cep = cep.replace(/\D/g, '')

    return cep.replace(/(\d{5})(\d{0,3})/, '$1-$2')
}

const getUnformattedCep = (cep: string): string => {
    return cep.replace(/\D/g, '')
}

const handleSearch = async (): Promise<void> => {
    const formattedCep = getUnformattedCep(inputValue.value)

    if (formattedCep.trim() === '') {
        return
    }

    isLoading.value = true

    try {
        const response = await axios.get(`/api/cep/${formattedCep}`)

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

watch(inputValue, (newValue: string) => {
    const formattedCep = formatCep(newValue)
    inputValue.value = formattedCep
})

const handleInput = (e: Event): void => {
    inputValue.value = (e.target as HTMLInputElement).value
}
</script>

<template>
    <a-typography-title class="title">Busca Via CEP</a-typography-title>
    <a-input-search v-model:value="inputValue" placeholder="Insira o CEP. Ex: 01001-000" :loading="isLoading"
        @enter-button="isLoading" @input="handleInput" @search="handleSearch" class="input" />
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