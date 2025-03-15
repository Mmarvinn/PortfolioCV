<!-- types of badge primary, warning, danger -->
<!-- active, done, processing, canceled -->
<template>
  <span
    :class="[
      'badge',
      { primary: type == 'active' },
      { secondary: type == 'done' },
      { warning: type == 'processing' },
      { danger: type == 'canceled' },
    ]"
    >{{ type }}</span
  >
</template>

<script>
export default {
  name: 'AppStatus',
  props: {
    type: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style scoped></style>
