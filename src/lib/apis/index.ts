import type { Todo } from './types';

const getTodoList = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/todos`);
  const todoList: Todo[] = await response.json();
  return todoList;
};

export { getTodoList };
