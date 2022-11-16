import { defineStore } from 'pinia'

export interface Task {
  id: number,
  text: string,
  done: boolean,
}

export const useTasksStore = defineStore('tasks', {
  state: () => {
    return {
      next_id: 1,
      tasks_by_id: [
        // {
        //   text: 'Sample pinia stored task',
        //   done: false
        // },
      ] as { [id: number]: Task },
    }
  },
  getters: {
    tasks: (state) => Object.values(state.tasks_by_id),
  },
  actions: {
    getTask(id: number) {
      return this.tasks_by_id[id]
    },
    addNewTask(text: string) {
      const new_id = this.next_id++
      this.tasks_by_id[new_id] = {
        id: new_id,
        text: text,
        done: false,
      }
    },
    editTask(task: Task) {
      console.log('edit task:', task)
      this.tasks_by_id[task.id] = task
    },
    deleteTask(id: number) {
      delete this.tasks_by_id[id]
    },
    clearDoneTasks() {
      for (const id in this.tasks_by_id) {
        if (this.tasks_by_id[id].done) delete this.tasks_by_id[id]
      }
    },
  }
})