
interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent)=> void
}



const Input:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className="flex items-center justify-center w-11/12 relative mt-10" onSubmit={(e)=>handleAdd(e)}>
        <input type="input" placeholder="Enter a task" className="  w-3/5 rounded-xl px-8 py-4 text-lg shadow-md focus:outline-none" value={todo} onChange={ (e) => setTodo(e.target.value) } />
        <button type="submit" className="px-8 py-4 bg-orange-600 rounded-xl absolute right-72 text-lg font-bold text-white">Add</button>
    </form>
  )
}

export default Input