import { TodoListSchema } from '../schemas/todo';

const getTodoList = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/todos`);
  const todoList = await response.json();

  return TodoListSchema.parse(todoList);
};

export { getTodoList };
