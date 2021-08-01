<template>
	<v-dialog  width="400" v-model="mostrarDialogo">
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
							v-model="calendarioAtivo"
							:close-on-content-click="false"
							transition="scale-transition"
							offset-y
							min-width="290px"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									v-bind="{ ...attrs, ...$attrs }"
									v-on="on"
									v-model="dataFormatada"
									@blur="() => $emit('input', parseDate(dataFormatada))"
								/>
							</template>
							<v-date-picker
								color="primary"
								:value="date"
								@input="value => $emit('input', value)"
								v-bind="$attrs['date-picker']"
								no-title
								scrollable
							>
								<v-spacer/>
								<v-btn text color="primary" @click="menu.save(date)">
									OK
								</v-btn>
							</v-date-picker>
						</v-menu>
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
	components: {
	},
	data() {
		return {
			mostrarDialogo: false,
			calendarioAtivo: false,
			dataFormatada: null,
		}
	},
	methods: {
		mostrar(){
			this.mostrarDialogo = true 
		}
	},
}
</script>
