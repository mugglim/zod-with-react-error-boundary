import { useEffect, useState } from 'react';

import './App.css';

import { getTodoList } from './lib/apis';
import { Todo } from './components';

import type { STodo } from './lib/schemas/todo';

const App = () => {
  const [todoList, setTodoList] = useState<STodo[]>([]);

  const fetchTodoList = async () => {
    const todoList = await getTodoList();
    setTodoList(todoList);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className="App">
      {todoList.map((todo, index) => {
        return <Todo key={`${index}-${todo.userId}-${todo.title}`} {...todo} />;
      })}
    </div>
  );
};

export default App;
