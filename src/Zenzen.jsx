import { useState } from "react";
const Zenzen = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([{ value: "essen kaufen", id: 1 }]);

  return (
    <div>
      enter new todo:
      <input
        type={"text"}
        value={name}
        onInput={(evt) => setName(evt.currentTarget.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { value: name, id: todos.length + 1 }]);
          setName("");
        }}
      >
        enter
      </button>
      {todos.map((val, index) => (
        <div>
          {val.value}
          <button
            onClick={() => {
              const result = todos.filter(
                (todos, todoIndex) => todoIndex != index
              );
              setTodos(result);
            }}
          >
            done
          </button>
        </div>
      ))}
    </div>
  );
};

export default Zenzen;
