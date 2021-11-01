<template>
	<v-dialog width="400" v-model="mostrarDialogo">
		<v-card>
			<v-toolbar color="primary" dark>
				<v-toolbar-title>
					Cadastro de serviços
				</v-toolbar-title>
			</v-toolbar>
			<v-card-text>
				<v-row class="mt-3">
					<v-col>
						<v-text-field
							dense
							label="Nome do serviço"
							outlined
						/>
					</v-col>
				</v-row>
				<v-divider/>
				<v-card-title>
					Horários
				</v-card-title>
				<v-row>
					<v-col>
						<v-menu
							ref="menu"
							v-model="menu"
							:close-on-content-click="false"
							:return-value.sync="date"
							transition="scale-transition"
							offset-y
							min-width="auto"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									v-model="date"
									label="Picker in menu"
									prepend-icon="mdi-calendar"
									readonly
									v-bind="attrs"
									v-on="on"
								></v-text-field>
							</template>
							<v-date-picker
								v-model="date"
								no-title
								scrollable
							>
								<v-spacer></v-spacer>
								<v-btn
									text
									color="primary"
									@click="menu = false"
								>
									Cancel
								</v-btn>
								<v-btn
									text
									color="primary"
									@click="$refs.menu.save(date)"
								>
									OK
								</v-btn>
							</v-date-picker>
						</v-menu>
						{{date}}
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-actions class="d-flex justify-space-between">
				<v-btn>
					Cancelar
				</v-btn>
				<v-btn color="primary" class="">
					Salvar
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
			menu: false,
			mostrarDialogo: false
		}
	},
	methods: {
		mostrar(){
			this.mostrarDialogo = true 
		}
	},
}
</script>
