<template>
  <h1 class="text-white center" v-if="!todos?.length">Задач пока нет</h1>
  <h3 class="text-white" v-else>Total active todos: {{ activeTodos }}</h3>
  <template v-for="todo in todos" :key="todo.id">
    <div class="card">
      <h2 class="card-title">
        {{ todo.title }}
        <AppStatus :type="todo.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ todo.deadline }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push(`/todo/${todo.id}`)">
        Посмотреть
      </button>
    </div>
  </template>
</template>

<script>
import { useStore } from 'vuex';
import {
  isRef,
  isReactive,
  ref,
  onMounted,
  onBeforeMount,
  computed,
} from 'vue';

import AppStatus from '../components/AppStatus';

export default {
  setup(props, context) {
    const store = useStore();
    const todos = computed(() => store.getters.todosList);
    const activeTodos = computed(
      () => todos.value.filter((item) => item.status === 'active')?.length
    );

    onBeforeMount(() => {
      store.dispatch('getTodosFromStorage');
    });

    return {
      todos,
      activeTodos,
    };
  },

  components: { AppStatus },
};
</script>
