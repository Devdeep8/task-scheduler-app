import { NextResponse } from "next/server"
import { addTask , getTasks } from "@/libs/taskManager"
export async function POST(req: Request) {
  try {
    const { title } = await req.json()
    if (!title || typeof title !== "string" || title.trim().length < 2) {
      return NextResponse.json({ error: "Invalid task title" }, { status: 400 })
    }

    const newTask = await addTask({ title, completed: false })
    return NextResponse.json(newTask, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const tasks = await getTasks()
    return NextResponse.json(tasks)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
