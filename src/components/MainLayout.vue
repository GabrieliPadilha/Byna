<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
        <v-list>
            <v-list-item>
                 <v-list-item-avatar>
                     <v-icon>
                         mdi-plus
                     </v-icon>
                 </v-list-item-avatar>
                 <v-list-item-title>
                     Cadastro  de Serviços
                 </v-list-item-title>
            </v-list-item>
            <v-list-item :to="{name: 'Horarios'}">
                <v-list-item-avatar>
                     <v-icon>
                         mdi-alarm-check
                     </v-icon>
                 </v-list-item-avatar>
                 <v-list-item-title>
                    Horários
                 </v-list-item-title>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Byna</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <router-view/>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null
        }
    },
}
</script>

<style>

</style>