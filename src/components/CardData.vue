<script setup lang="ts">
import { PropType } from 'vue'
import type { Address } from '../types/types'

const props = defineProps({
    address: {
        type: Object as PropType<Address>,
        required: true
    },
    isLoading: {
        type: Boolean,
        required: true
    }
})


// FORMATAR key para UpperCase
const formatKey = (key: string) => {
    const keyMap: { [key: string]: string } = {
        cep: 'CEP',
        label: 'LABEL',
        logradouro: 'LOGRADOURO',
        complemento: 'COMPLEMENTO',
        bairro: 'BAIRRO',
        localidade: 'LOCALIDADE',
        uf: 'UF',
        ibge: 'IBGE',
        gia: 'GIA',
        ddd: 'DDD',
        siafi: 'SIAFI'
    }
    return keyMap[key] || key.toUpperCase()
}
</script>

<template>
    <a-card title="Endereço" class="card" v-if="!isLoading && address">
        <div v-if="props.address.error">
            <p><strong>{{ props.address.error }}</strong></p>
        </div>
        <div v-else>
            <div v-for="(value, key) in props.address" :key="key">
                <p><strong>{{ formatKey(key) }}:</strong> {{ typeof value === 'string' ? value.toUpperCase() : 'N/A' }}
                </p>
            </div>
        </div>
    </a-card>
</template>

<style scoped>
.card {
    width: 300px;
    margin-top: 15px;
    width: 50%;
    border-radius: 2%;
    border-color: rgb(27, 25, 25);
    border-width: 1px;
}
</style>