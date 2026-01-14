<template>
  <h1>Detalji zadatka</h1>

  <p v-if="!task">Zadatak nije pronađen.</p>

  <div v-else>
    <p><strong>ID:</strong> {{ task.id }}</p>
    <p><strong>Naslov:</strong> {{ task.title }}</p>
    <p><strong>Status:</strong> {{ task.done ? 'Gotov' : 'Nije gotov' }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTasksStore } from '../stores/tasks'

const route = useRoute()
const store = useTasksStore()

const task = computed(() =>
  store.tasks.find(t => t.id === Number(route.params.id))
)
</script>
