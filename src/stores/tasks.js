import { defineStore } from 'pinia'
import { getTasks } from '../services/tasksApi'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    loading: false
  }),

  actions: {
    async fetchTasks() {
      if (this.tasks.length > 0) return

      this.loading = true
      this.tasks = await getTasks()
      this.loading = false

      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    addTask(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        done: false
      })

      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.done = !task.done
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  }
})
