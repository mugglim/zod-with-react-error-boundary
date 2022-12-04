import { z } from 'zod';

export const TodoSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export const TodoListSchema = z.array(TodoSchema);

export type STodo = z.infer<typeof TodoSchema>;
export type STodoList = z.infer<typeof TodoListSchema>;
