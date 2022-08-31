<template>
  <v-list-item
    :title="bill.customer"
    :subtitle="bill.date"
    @click="() => {}"
  >
    <template #prepend>
      <v-tooltip activator="parent">
        <template #activator="{ props }">
          <v-icon
            :color="icon.color"
            v-bind="props"
          >
            {{ icon.icon }}
          </v-icon>
        </template>
        {{ icon.tooltip }}
      </v-tooltip>
    </template>
    <template #append>
      <div class="text-green-darken-4">
        R$ 35
      </div>
      <v-btn icon flat>
        <v-icon>mdi-share</v-icon>
      </v-btn>
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { Bill } from '../types/Bill';
import { defineProps, computed } from 'vue'

const { bill } = defineProps<{
  bill: Bill
}>()

type BillIcon = {
  tooltip: string
  color: string
  icon: string
}

const icon = computed<BillIcon>(() => {
  switch(bill.status) {
    case 'Cancelado':
      return {
        color: 'disabled',
        icon: 'mdi-minus-circle-outline',
        tooltip: 'Cancelado'
      }
    case 'Em Aberto':
      return {
        color: 'red',
        icon: 'mdi-clock-outline',
        tooltip: 'Em Aberto'
      }
    case 'Faturado':
      return {
        color: 'success',
        icon: 'mdi-check',
        tooltip: 'Faturado'
      }
  }
})

</script>