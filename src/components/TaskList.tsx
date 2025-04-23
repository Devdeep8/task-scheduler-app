import { Task } from "@/types/task"

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="space-y-2 mt-4">
      {tasks.map((task) => (
        <div key={task.id} className="p-3 bg-gray-100 rounded-xl">
          {task.title}
        </div>
      ))}
    </div>
  )
}
