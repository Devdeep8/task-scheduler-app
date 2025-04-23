import { NextResponse } from "next/server"
import { undoTask } from "@/libs/taskManager"
export async function POST() {
  try {
    const result =  await undoTask()
    console.log(result)
    return NextResponse.json({ message: "Undo successful" })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
