<template>
    <v-card >
        <v-card-text>
            <v-btn
                color="primary"
                @click="abrirDialogoDeAgendamento"
            >
                <v-icon>
                    mdi-plus
                </v-icon>
                Adicionar serviços
            </v-btn>
        </v-card-text>
        <dialogoDeAgendamento ref="abrirAgendamento"/>
    </v-card>

</template>

<script>
  import DialogoDeAgendamento  from '../components/DialogoDeAgendamento'

  export default {
    components: {
        'dialogoDeAgendamento': DialogoDeAgendamento
    },
     methods: {
        abrirDialogoDeAgendamento () {
            this.$refs.abrirAgendamento.mostrar()
        },
    },
  }
</script>
