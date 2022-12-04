import { useEffect, useState } from 'react';
import { useErrorBoundary } from '@toss/error-boundary';

import './App.css';

import { getTodoList } from './lib/apis';
import { Todo } from './components';

import type { STodo } from './lib/schemas/todo';

const App = () => {
  const [todoList, setTodoList] = useState<STodo[]>([]);
  const throwError = useErrorBoundary();

  const fetchTodoList = async () => {
    const todoList = await getTodoList();
    setTodoList(todoList);
  };

  useEffect(() => {
    fetchTodoList().catch(throwError);
  }, []);

  return (
    <div className="App">
      <button className="RefetchButton" onClick={fetchTodoList}>
        refetch
      </button>
      {todoList.map((todo, index) => {
        return <Todo key={`${index}-${todo.userId}-${todo.title}`} {...todo} />;
      })}
    </div>
  );
};

export default App;
