"use client"
import { useEffect, useState } from "react"
import { TaskInput } from "@/components/TaskInput"
import { TaskList } from "@/components/TaskList"
import { UndoRedoControls } from "@/components/UndoRedoControls"
import { Task } from "@/types/task"

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks")
    const data = await res.json()
    console.log("data:", data)
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleAdd = async (title: string) => {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
    })
    fetchTasks()
  }

  const handleUndo = async () => {
    await fetch("/api/tasks/undo", { method: "POST" })
    fetchTasks()
  }

  const handleRedo = async () => {
    await fetch("/api/tasks/redo", { method: "POST" })
    fetchTasks()
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center mx-auto p-4">
      <div className="max-w-md w-full bg-white rounded-lg px-6 py-8 space-y-3 text-gray-900 dark:bg-gray-800 dark:text-white">

      <h1 className="text-2xl font-bold mb-4">📝 Task Scheduler</h1>
      <TaskInput onAdd={handleAdd} />
      <UndoRedoControls onUndo={handleUndo} onRedo={handleRedo} />
      <TaskList tasks={tasks} />
      </div>
    </div>
  )
}
