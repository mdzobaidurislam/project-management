import { create } from 'zustand'
import { v4 as uuid } from 'uuid'
import { persist } from 'zustand/middleware'


export const useTaskStore = create()(
  persist(
    set => ({
      tasks: [],
      usersData: [],
      setUser: (data) => set({ usersData: data }),
      draggedTask: null,
      addTask: (title, description,status,data) => {
        return set(state => ({

          tasks: [
            ...state.tasks,
            { id: uuid(), ...data,title, description, status: status, }
          ]
        }))
      }
      ,
      dragTask: (id) => set({ draggedTask: id }),
      setTasks: (data) => set({ tasks: data }),
      updateTaskPosition: (updatedData) =>
        set(state => {
          updatedData.map((updatedTask) => {
            const indexToRemove = state.tasks.findIndex(item => item.id === updatedTask.id);
            if (indexToRemove !== -1) {
              state.tasks.splice(indexToRemove, 1);
            }
          })
           return {
            tasks: [
            ...state.tasks,
            ...updatedData
          ]
           }
        }),
      removeTask: (id) =>
        set(state => ({
          tasks: state.tasks.filter(task => task.id !== id)
        })),
      updateTask: (id, status) =>
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? { ...task, status } : task
          )
        }))
      }),
    { name: 'task-store', skipHydration: true }
  )
)