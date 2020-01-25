import { Module, GetterTree, ActionTree, MutationTree } from 'vuex'
import { CartState, RootState } from '@/store/types'

const state: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]')
}

const getters: GetterTree<CartState, RootState> = {
  items: (state): Array<AppBeer> => state.items
}

const actions: ActionTree<CartState, RootState> = {
  addItem ({ commit }, item: AppBeer): void {
    commit('addItem', item)
  },
  removeItem ({ commit }, id: number): void {
    commit('removeItem', id)
  }
}

const mutations: MutationTree<CartState> = {
  addItem (state, item: AppBeer) {
    state.items.push(item)
    // persit to local storage
    localStorage.setItem('cart', JSON.stringify(state.items))
  },
  removeItem (state, id: number) {
    state.items = state.items.filter(item => item.id !== id)
    // persist to local storage
    localStorage.setItem('cart', JSON.stringify(state.items.filter(item => item.id !== id)))
  }
}

const cart: Module<CartState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default cart
