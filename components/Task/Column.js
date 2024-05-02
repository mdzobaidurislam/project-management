'use client'

import { useTaskStore } from "@/utils/useStore"
import TaskItem from "./TaskItem"
import { useEffect, useMemo } from "react"
import DropArea from "./DropArea"
export default function Column({
    title,
    status,
    setActiveCard,
    onDrop
  }) {
   
    const tasks = useTaskStore(state => state.tasks)
    const filteredTasks = useMemo(
      () => tasks.filter(task => task.status === status),
      [tasks, status]
    )

    useEffect(() => {
      useTaskStore.persist.rehydrate()
    }, [])

    return (
      <section className='h-[600px] flex-1'>
        <h2 className='ml-1 font-serif text-2xl font-semibold'>{title}</h2>
    
        <div
          className='mt-3.5 h-full w-full rounded-xl bg-gray-700/50 p-4'
        >
          <div className='flex flex-col gap-4'>
          <DropArea onDrop={() => onDrop(status, 0)} />
            {tasks.map(
        (task, index) =>
          task.status === status && (
              <>
              <TaskItem key={task.id} {...task} setActiveCard={setActiveCard} index={index} />
              <DropArea onDrop={() => onDrop(status, index+1)} />
              </>
            ))}
            {filteredTasks.length === 0 && status === 'TODO' && (
              <div className='mt-8 text-center text-sm text-gray-500'>
                <p>Create a new task</p>
              </div>
            )}
  
            {tasks.length && filteredTasks.length === 0 && status !== 'TODO' ? (
              <div className='mt-8 text-center text-sm text-gray-500'>
                <p>Drag your tasks here</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    )
}
