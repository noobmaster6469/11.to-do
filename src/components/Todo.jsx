import { useState, useEffect } from "react";
import "../todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    // Initialize from local storage if available
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const clickHandler = () => {
    if (todo === "") return;
    setTodos([...todos, { text: todo, isCompleted: false }]);
    setTodo("");
  };

  const handleDone = (index) => {
    setTodos(
      todos.map((item, i) =>
        i === index - 1 ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index - 1));
  };

  const handleEdit = (index) => {
    setTodo(todos[index - 1].text);
    setTodos(todos.filter((_, i) => i !== index - 1));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="min-h-[calc(100vh-50px)] bg-[#697565] px-10 py-10">
        <div className="main h-[100%] w-full bg-[#3C3D37] px-4 py-4 rounded-xl">
          <div className="functionality flex gap-4">
            <input
              className="p-2 outline-none w-1/3 rounded"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  clickHandler();
                }
              }}
              type="text"
              name="todo"
              id="todo"
              value={todo}
              onChange={(e) => {
                changeHandler(e);
              }}
            />
            <button
              onClick={() => {
                clickHandler();
              }}
              className="button-27"
            >
              Add
            </button>
          </div>

          <div className="lists">
            {todos.map((todo, index) => {
              return (
                <div
                  key={index}
                  className="list bg-slate-300 rounded-xl px-4 py-2 text-black flex items-center mt-4"
                >
                  <h1 className="w-[50%]">
                    <span
                      className={`${
                        todo.isCompleted ? "line-through" : ""
                      } text-xl font-semibold`}
                    >
                      <span className="hidden">{index++}</span>
                      {index}.{todo.text}
                    </span>
                  </h1>
                  <div className="btns flex gap-8">
                    <button
                      onClick={() => {
                        handleDone(index);
                      }}
                      className="button-27"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => {
                        handleEdit(index);
                      }}
                      className="button-27"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(index);
                      }}
                      className="button-27"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
