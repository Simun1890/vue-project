<template>
  <div class="tasks-container">
    <h1>Tasks</h1>

    <p class="info">
      Broj nedovršenih zadataka: {{ unfinishedCount }}
    </p>

    <AddTaskForm @add-task="store.addTask" />

    <p v-if="store.loading">Učitavanje...</p>

    <div v-else>
      <TaskCard v-for="task in store.tasks"
                :key="task.id"
                :task="task"
                @toggle-done="store.toggleTask($event)" />
    </div>
  </div>
</template>

<<script setup>
import { onMounted, computed } from 'vue'
import { useTasksStore } from '../stores/tasks'
import TaskCard from '../components/TaskCard.vue'
import AddTaskForm from '../components/AddTaskForm.vue'

const store = useTasksStore()

onMounted(() => {
  if (store.tasks.length === 0) {
    store.fetchTasks()
  }
})

const unfinishedCount = computed(() => {
  return store.tasks.filter(task => !task.done).length
})
</script>

<style scoped>
   .tasks-container {
     max-width: 600px;
     margin: 0 auto;
   }

   .info {
     color: #555;
     margin-bottom: 1rem;
   }
</style>
