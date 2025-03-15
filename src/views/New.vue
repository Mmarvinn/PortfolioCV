<template>
  <form class="card">
    <h1>Create new todo</h1>
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" v-model.trim="title" />
    </div>

    <div class="form-control">
      <label for="date">Deadline date</label>
      <input type="date" id="date" v-model="deadline" />
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" v-model.trim="desc"></textarea>
    </div>

    <button
      :disabled="isBtnDisabled"
      class="btn primary"
      @click.prevent="onSubmit"
    >
      Create
    </button>
  </form>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'New',

  setup(props, context) {
    const store = useStore();
    const router = useRouter();

    const title = ref(null);
    const deadline = ref(null);
    const desc = ref(null);

    const isBtnDisabled = computed(() => {
      if (!title.value || !deadline.value || !desc.value) {
        return true;
      } else {
        return false;
      }
    });

    const onSubmit = () => {
      store.dispatch('addTodoAsync', {
        title: title.value,
        deadline: deadline.value,
        desc: desc.value,
      });

      router.push('/');
    };

    return { title, deadline, desc, isBtnDisabled, onSubmit };
  },
};
</script>

<style scoped></style>
