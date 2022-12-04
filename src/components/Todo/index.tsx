import './Todo.css';

import type { STodo } from '../../lib/schemas/todo';

const Todo = ({ id, userId, title, completed }: STodo) => {
  return (
    <div className="todo">
      <div>id : {id}</div>
      <div>userId : {userId}</div>
      <div>title : {title}</div>
      <div>completed : {completed.toString()}</div>
    </div>
  );
};

export default Todo;
