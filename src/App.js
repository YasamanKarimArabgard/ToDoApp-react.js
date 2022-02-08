import ToDoApp from "./Components/ToDoApp/ToDoApp"

const App = () => {

  return (
    <div className="container-fluid d-flex align-items-center flex-column bg-light">
      <h1 className="pt-4">Todo app with Jasmine</h1>
      <ToDoApp />
    </div>
  );
}

export default App;
