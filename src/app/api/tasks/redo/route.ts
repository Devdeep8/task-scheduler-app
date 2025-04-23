import { redoTask } from "@/libs/taskManager"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    const result = await redoTask()
    console.log(result)
    return NextResponse.json({ message: "Redo successful" })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
