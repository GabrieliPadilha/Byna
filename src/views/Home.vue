<template>
    <v-card >
        <v-card-text>
            <v-row>
                <v-col>
                    <v-btn
                        color="primary"
                        @click="abrirDialogoDeAgendamento"
                    >
                        <v-icon>
                            mdi-plus
                        </v-icon>
                        Adicionar serviços
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn
                        color="primary"
                        @click="abriDialogoDeServicos"
                    >
                        <v-icon>
                            mdi-format-list-bulleted
                        </v-icon>
                        Meus Serviços
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
        <DialogoDeAgendamento ref="abrirAgendamento"/>
        <DialogoDeListaDeServicos ref="abrirServicos"/>
    </v-card>

</template>

<script>
  import DialogoDeAgendamento  from '../components/DialogoDeAgendamento'
  import DialogoDeListaDeServicos from '../components/DialogoDeListaDeServicos'

  export default {
    components: {
        DialogoDeAgendamento,
        DialogoDeListaDeServicos
    },
     methods: {
        abrirDialogoDeAgendamento () {
            this.$refs.abrirAgendamento.mostrar()
        },
        abriDialogoDeServicos(){
            this.$refs.abrirServicos.mostrar()
        }
    },
  }
</script>
