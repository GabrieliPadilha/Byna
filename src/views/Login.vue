<template>
<v-container>
    <div style="margin-right: auto">
        <h1>Cadastre-se</h1>
    </div>
    <v-row>
        <v-col cols="12" sm="6">
            <v-text-field
                label="e-mail"
                outlined
                dense
            />
        <v-col cols="12" sm="6">
        </v-col>
            <v-text-field
                outlined
                dense
                v-model="password"
                :append-icon="mostraSenha ? 'mdi-eye' : 'mdi-eye-off'"
                :type="mostraSenha ? 'text' : 'password'"
                label="Senha"
                hint="mínimo 8 caracteres"
                counter
                @click:append="mostraSenha = !mostraSenha"
            />
            <v-btn color="primary" block>
                Entrar
            </v-btn>
        </v-col>
        <v-col cols="12" sm="6">
            <v-img
                style="float: right;"
                src="@/assets/ilustracao-de-login.png"

            />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            mostraSenha: false
        }
    },
    methods: {
        // incrementar() {
        //     this.contador++
        // }
    },
    created() {
        console.log('CSS modules: ', this.$style)
    }
}
</script>

<style>

</style>