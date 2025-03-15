import {
  getLocalStorageData,
  setLocalStorageData,
} from '@/storage/localStorage';
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      todos: [],
    };
  },

  mutations: {
    // test(state, payload) {},
    setTodos(state, payload) {
      if (payload) {
        state.todos = payload;
      } else {
        state.todos = [];
      }
    },

    updateTodos(state, payload) {
      const todo = state.todos.find((item) => item.id == payload.id);
      if (todo) {
        todo.status = payload.type;
      }
    },

    addTodo(state, payload) {
      const { deadline, ...rest } = payload;
      let status;

      if (Date.now() > Date.parse(deadline)) {
        status = 'canceled';
      } else {
        status = 'active';
      }

      const todo = {
        status,
        id: (Math.random() * 10000000).toFixed(0),
        deadline: new Date(deadline).toLocaleDateString(),
        ...rest,
      };

      state.todos.unshift(todo);
    },
  },

  actions: {
    // test(context, payload) {},
    getTodosFromStorage(context) {
      const dataFromStorage = getLocalStorageData();
      context.commit('setTodos', dataFromStorage);
    },

    updateInStorage(context, payload) {
      context.commit('updateTodos', payload);
      setLocalStorageData(context.state.todos);
    },

    addTodoAsync(context, payload) {
      context.commit('addTodo', payload);
      setLocalStorageData(context.state.todos);
    },
  },

  getters: {
    // test(state, getters) {},

    todosList(state) {
      return state.todos;
    },
  },
});
