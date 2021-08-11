import AddTodo from './components/addTodo';
import ListTodo from './components/listTodo';
import './Todos.css';

function App(){
  return(
    <div className="Todos_App">
      <h1>Todo List</h1>
      <AddTodo />
      <ListTodo />
    </div>
  )
}

export default App;