import TodoProvider from "./Components/context/TodoProvider/TodoProvider";
import ToDoApp from "./Components/ToDoApp/ToDoApp"

const App = () => {

  return (
    <TodoProvider>
      <div className="container-fluid d-flex align-items-center flex-column bg-light">
        <h1 className="pt-4 font-weight-bold">ToDo App by Jasmine</h1>
        <ToDoApp />
      </div>
    </TodoProvider>
  );
}

export default App;
