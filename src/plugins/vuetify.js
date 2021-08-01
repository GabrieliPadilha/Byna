import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const TEMA_PADRAO = {
	themes: {
		light: {
			primary: '#734159',
			secondary: '#211c1c',
		},
	},
}

export default new Vuetify({
    theme: TEMA_PADRAO 
});
