import { useState } from "react";
import { Todo } from "../modal"
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


type Props = {
    todo: Todo,
    todos:Todo[],
    setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todos, todo, setTodos}) => {
    const [edit, setEdit]= useState<boolean>(false);
    const [editTodo, setEditTodo]= useState<string>(todo.todo);

    const handleDelete = (id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }

    const handleEdit = (e:React.FormEvent, id: number )=> {
    e.preventDefault();
    setTodos(todos.map((todo)=>todo.id ===id ? {...todo, todo:editTodo } : todo) )
    setEdit(false);
    }
    return (
        <form className="flex flex-row gap-28 items-center justify-center mt-10 bg-yellow-300 px-4 py-2 rounded-2xl" onSubmit={(e)=>handleEdit(e, todo.id)}>
                {
                        edit ? (<input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="focus:outline-none text-lg font-semibold"/>): todo.isDone? (
                            <span className="text-5xl">{todo.todo}</span>
                        ): (
                            <span className="text-5xl">{todo.todo}</span>
                        )
                }

            <div className="flex flex-row">
                <span onClick={()=>{if(!edit && !todo.isDone){setEdit(!edit)}}}><CiEdit size={50} /></span>
                <span><MdDeleteOutline size={50} onClick={()=> handleDelete(todo.id)}/></span>
            </div>
        </form>
    )
}

export default SingleTodo