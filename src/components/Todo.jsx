import { useState } from "react"

export default function Todo () {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleSubmit (e) {
        e.preventDefault();
        setTodos([...todos, todo])
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text"></input>
                <button type="submit">Add</button>
            </form>
            {console.log(todos)}
        </div>
    )
}