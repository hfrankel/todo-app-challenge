import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import TodoContext from '../contexts/TodoContext';
import { v4 as uuidv4 } from 'uuid';


const TodoInput = () => {
  const [inputText, setInputText] = useState('');

  const handleInput = (event, context) => {
    if (event.which === 13 && inputText != '') {
      context.setTodoTasks([...context.todoTasks, {id: uuidv4(), text: event.target.value}]);
      event.target.value = '';
    } else {
      setInputText(event.target.value);
    }
  };

  return (
    <TodoContext.Consumer >
      {context => (
        <Input placeholder="Add To-Do" onKeyUp={(event) => handleInput(event, context)} />
      )}
    </TodoContext.Consumer>
  )
};

export default TodoInput;
