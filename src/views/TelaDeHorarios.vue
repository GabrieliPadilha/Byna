<template>
	<v-card>
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
	</v-card>
</template>

<script>
export default {
	name: TelaDeHorarios,
	data() {
		return {
			date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
			menu: false,
		}
	},
	methods: {
		
	},
}
</script>
