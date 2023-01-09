import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import ListTodo from './Components/ListTodo';
import PendingTodos from './Components/PendingTodos';
import CompletedTodo from './Components/CompletedTodo';

function App() {
  return (
    <div className="App">
      <div><h2 className='title'>TODO LIST PROJECT</h2></div>
      <div className='todopanel'>
      <div><AddTodo></AddTodo></div>
      <div> <ListTodo></ListTodo></div>
     <div><PendingTodos></PendingTodos></div>
      <div> <CompletedTodo></CompletedTodo></div>
     
      </div>
    </div>
  );
}

export default App;
