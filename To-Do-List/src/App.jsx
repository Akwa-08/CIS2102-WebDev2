import { useState } from 'react'
import './App.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editedTask, setEditedTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const updateTodo = () => {
    if (editedTask.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = editedTask;
      setTodos(updatedTodos);
      setEditingIndex(null); 
      setEditedTask(''); 
    }
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)}/>
                <button onClick={updateTodo}>Update</button>
              </>
            ) : (
              <>
                <div className="itemtext">
                  {todo}
                </div>
                <button onClick={() => removeTodo(index)}>Remove</button>
                <button onClick={() => {
                  setEditingIndex(index);
                  setEditedTask(todo);
                }}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
