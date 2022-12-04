import { TodoListSchema } from '../schemas/todo';

const getTodoList = async () => {
  // schema 에러
  if (import.meta.env.VITE_ENABLE_FETCH_ERROR === 'true') {
    return TodoListSchema.parse([{ x: 1 }]);
  }

  // 네트워크/요청 에러
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/todos`);
    const todoList = await response.json();
    return TodoListSchema.parse(todoList);
  } catch (error) {
    throw new TypeError('Server Error');
  }
};

export { getTodoList };
