<template>
  <div class="task-card">
    <RouterLink :to="`/tasks/${task.id}`" :class="{ done: task.done }">
      {{ task.title }}
    </RouterLink>

    <button type="button" @click="toggle">
      {{ task.done ? 'Undo' : 'Done' }}
    </button>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle-done'])

function toggle() {
  emit('toggle-done', props.task.id)
}
</script>

<style scoped>
  .task-card {
    background-color: white;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .done {
    text-decoration: line-through;
    color: #999;
  }

  button {
    background-color: #2ecc71;
    border: none;
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    color: white;
  }

    button:hover {
      background-color: #27ae60;
    }
</style>
