import { TodoListSchema } from '../schemas/todo';

const getTodoList = async () => {
  if (import.meta.env.VITE_ENABLE_FETCH_ERROR === 'true') {
    return TodoListSchema.parse([{ x: 1 }]);
  }

  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/todos`);
  const todoList = await response.json();

  return TodoListSchema.parse(todoList);
};

export { getTodoList };
