<template>
  <form @submit.prevent="submit">
    <input v-model="title"
           placeholder="Unesi novi task" />
    <button>Dodaj</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')

const emit = defineEmits(['add-task'])

function submit() {
  if (title.value.trim() === '') return

  emit('add-task', title.value)
  title.value = ''
}
</script>

<style scoped>
  form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
  }

    button:hover {
      background-color: #2980b9;
    }
</style>
