import { defineStore } from 'pinia'

export interface Task { text: String, done: boolean }

export const useTasksStore = defineStore('tasks', {
  state: () => {
    return {
      tasks: [
        // {
        //   text: 'Sample pinia stored task',
        //   done: false
        // },
      ] as Task[],
    }
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    editTask(task: Task) {
      console.log('Edit task (not implemented):', task)
    },
    clearDoneTasks() {
      this.tasks = this.tasks.filter(task => !task.done)
    },
  }
})