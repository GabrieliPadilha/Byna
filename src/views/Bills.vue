<template>
  <v-app-bar
    fixed
    dark
    color="primary"
  >
    <v-toolbar-title>Faturas</v-toolbar-title>
    <v-spacer/>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

  <v-list>
    <v-list-item>
      <v-chip prepend-icon="mdi-clock-outline">
        Em Aberto
      </v-chip>
      <v-chip prepend-icon="mdi-check">
        Faturado
      </v-chip>
      <v-chip prepend-icon="mdi-minus-circle-outline">
        Cancelado
      </v-chip>
    </v-list-item>
    <template
      v-for="(fatura, index) in bills"
      :key="fatura.cliente"
    >
      <v-divider v-if="index"/>
      <BillingItem :bill="fatura"/>
    </template>
  </v-list>
</template>

<script setup lang="ts">
import { Bill } from '../types/Bill';
import BillingItem from '../components/BillingItem.vue';

const bills: Bill[] = [
  {
    customer: 'Germano Gascho',
    date: '31 de agosto',
    status: 'Em Aberto',
  },
  {
    customer: 'Gabrieli Padilha',
    date: '27 de agosto',
    status: 'Faturado',
  },
  {
    customer: 'Fulano Oliveira',
    date: '30 de março',
    status: 'Cancelado',
  },
]

</script>