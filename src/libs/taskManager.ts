import type { Task } from "@prisma/client"

import { prisma } from "./prisma"



let undoStack: Task[] = []
console.log(undoStack , "stack undo");
let redoStack: Task[] = []
console.log(redoStack , "redo stack");
export const addTask = async (task: Omit<Task, "id" | "createdAt">) => {
  const newTask = await prisma.task.create({
    data: task
  })
  undoStack.push(newTask)
  redoStack = []
  return newTask
}

export const undoTask = async () => {
  const last = undoStack.pop()
  if (last) {
    await prisma.task.delete({ where: { id: last.id } })
    redoStack.push(last)
  }
}

export const redoTask = async () => {
  const last = redoStack.pop()
  if (last) {
    const restored = await prisma.task.create({
      data: {
        title: last.title,
        completed: last.completed
      }
    })
    undoStack.push(restored)
  }
}

export const getTasks = async () => {
  return await prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  })
}
