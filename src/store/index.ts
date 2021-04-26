/*
 * @Author: xiaoHui
 * @Date: 2021-04-26 15:15:35
 * @LastEditors: xiaoHui
 * @LastEditTime: 2021-04-26 15:15:44
 * @Description:
 * @Version: 1.0.0
 * @FilePath: \vite-project\src\store\index.ts
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
