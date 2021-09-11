import { InjectionKey } from 'vue'
import {createStore, Store, useStore as baseUseStore} from "vuex";

export interface State{
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state(){
        return {
            count: 0
        }
    },
    mutations:{
        increment(state: State){
            state.count++
        }
    }
})

export function useStore(){
    return baseUseStore(key)
}
