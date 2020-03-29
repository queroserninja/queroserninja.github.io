
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: '#ECF0F1',
        black: '#3D3D3D',
        javascript: '#F0DA50',
        git: '#E74C3C',
        react: '#4AD5FF'
      },
    },
  },
})
