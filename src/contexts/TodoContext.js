import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = React.createContext();

export const TodoStore = (props) => {
  const [todoTasks, setTodoTasks] = useState([
    { id: uuidv4(), text: 'Add tasks' },
  ]);

  return (
    <TodoContext.Provider value={{ todoTasks, setTodoTasks }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
