import { createContext, useState } from "react";
import "./App.css";
import Test from "./components/test";
import TodoList from "./components/todoListView";

export const Context = createContext(null);

function App() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [useName, setName] = useState<string>("KK");
  return (
    <div>
      {/* <button
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => setOpen(!isOpen)}
      >
        {(isOpen && "close") || "open"}
      </button>
      {isOpen && <TodoList />} */}
      <Context.Provider value={{ useName, setName }}>
        <TodoList />
        <Test />
      </Context.Provider>
    </div>
  );
}

export default App;
