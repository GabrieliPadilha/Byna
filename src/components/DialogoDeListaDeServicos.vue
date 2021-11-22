<template>
	<v-dialog width="400" v-model="mostrarDialogo">
		<v-card>
			<v-toolbar color="primary" dark>
				<v-toolbar-title>
					Serviços
				</v-toolbar-title>
			</v-toolbar>
			<v-card-text>
				<v-list-item v-for="item in servicos" :key="item">
					<v-list-item-content>
						<v-list-item-title>{{item.nome}}</v-list-item-title>
						<v-list-item-subtitle
							v-for="horario in  item.data"
							:key="horario"
						>
							{{horario}}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import Axios from 'axios'
export default {
	data() {
		return {
			mostrarDialogo: false,
			servicos: [
				{
					nome: 'Costura',
					data: [
						'12121',
						'12121'
					]
				},
				{
					nome: 'Conserto',
					data: [
						'12121',
						'12121'
					]
				}
			]
		}
	},
	created(){
		this.buscarServicos()
	},
	methods: {
		mostrar(){
			this.mostrarDialogo = true 
		},
		async buscarServicos(){
			await Axios.get('/api/servicos')
		},
	},
}
</script>
