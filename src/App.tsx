import { useState } from "react";
import "./App.css";
type Ttodos = {
  title: String;
  id: number;
  isDone: Boolean;
};
function App() {
  const deleteTodo = (id: number): void => {
    const deleteIndex = todos.findIndex(item => item.id === id); 
    if (deleteIndex !== -1) { 
      const updatedTodos = [...todos]; 
      updatedTodos.splice(deleteIndex, 1); 
      setTodos(updatedTodos); 
    }
  };
  
  const [todos, setTodos] = useState<Ttodos[]>([]);
  const addTodos = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const htmlElement = event.target as HTMLInputElement;
    if (event.key == "Enter" && htmlElement.value.trim() !== "") {
      setTodos([
        ...todos,
        { title: htmlElement.value, id: Math.random(), isDone: false },
      ]);
      htmlElement.value = "";
    }
  };
  return (
    <>
      <input type="text" placeholder="enter todo" onKeyDown={addTodos} />
      <ul>
        {todos.map((item: Ttodos) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
