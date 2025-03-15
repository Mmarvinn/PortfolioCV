<template>
  <div class="card" v-if="currentTodo">
    <h2>{{ currentTodo.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTodo.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTodo.deadline }}</p>
    <p><strong>Описание</strong>: {{ currentTodo.desc }}</p>
    <div>
      <button class="btn" @click="() => updateTodo('processing')">
        Взять в работу
      </button>
      <button class="btn primary" @click="() => updateTodo('done')">
        Завершить
      </button>
      <button class="btn danger" @click="() => updateTodo('canceled')">
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import { useStore } from 'vuex';
import AppStatus from '../components/AppStatus';
import { computed } from 'vue';

export default {
  props: ['id'],

  setup({ id }, context) {
    const store = useStore();
    const todos = computed(() => store.getters.todosList);
    const currentTodo = computed(() =>
      todos.value.find((item) => item.id == id)
    );

    const updateTodo = (type) => {
      store.dispatch('updateInStorage', { id, type });
    };

    return { currentTodo, updateTodo };
  },

  components: { AppStatus },
};
</script>

<style scoped></style>
