import { Getter, Mutation, Action } from 'vuex'

export interface RootState {
  version: string
}

export interface CartState {
  items: Array<AppBeer>
}

export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}

export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}

export interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}
