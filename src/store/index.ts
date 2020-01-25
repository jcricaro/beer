import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import modules from './modules'
import { RootState } from '@/store/types'
Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules
}

export default new Vuex.Store<RootState>(store)
