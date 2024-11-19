import { useState } from "react"
import Input from "./components/Input"
import {Todo} from './modal'
import TodoList from "./components/TodoList";


const App: React.FC = () => {
  const [todo, setTodo]= useState<string>('');
  const [todos, setTodos]= useState<Todo[]>([]);


  const handleAdd = (e:React.FormEvent )=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo: todo, isDone: false}]);
      setTodo('');
    }
  }


  return (
<div className="bg-cyan-200 h-screen">
  <div className="flex flex-col items-center justify-center">
    <span className="font-semibold text-5xl text-blue-600 mt-6">Task Management</span>
    <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
   <TodoList todos={todos} setTodos={setTodos}/>
  </div>
</div>
  )
}

export default App