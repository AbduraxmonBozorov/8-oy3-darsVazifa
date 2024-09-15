import { useRef, useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  function handleAdd() {
    if (inputRef.current && inputRef.current.value.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputRef.current.value,
      };

      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      inputRef.current.value = ""; 
    }
  }

  return (
    <div className="container mx-auto">
      <div className="todos mt-40 border w-11/12 mx-auto shadow-md sm:w-4/5 md:w-1/2 p-3 md:p-8">
        <div className="todos-header flex flex-row justify-between gap-5  rounded-2xl">
          <input
            ref={inputRef}
            type="text"
            className="w-full p-3 border"
            placeholder="Writing todo..."
          />
          <button onClick={handleAdd} className="btn btn-success">
            Add
          </button>
        </div>
        <div className="todos-main flex flex-col gap-5 mt-5">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <div key={todo.id} className="todo border p-3">
                <p>
                  {index+1}. {todo.text}
                </p>
              
              </div>
            ))
          ) : (
            <p>No todos available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
