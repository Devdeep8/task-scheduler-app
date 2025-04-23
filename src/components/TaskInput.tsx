"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTransition } from "react"

const FormSchema = z.object({
  Task: z.string().min(2, {
    message: "Task must be at least 2 characters.",
  }),
})

type InputFormProps = {
  onAdd: (title: string) => void | Promise<void>
}

export function TaskInput({ onAdd }: InputFormProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Task: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      await onAdd(data.Task)
      form.reset()
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="Task"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Finish report"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                Add a task to your schedule.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add Task"}
        </Button>
      </form>
    </Form>
  )
}
