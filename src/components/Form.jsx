import { useState } from "react";
import styles from "./form.module.css"

export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name: "", done: false});

    function handleSubmit (e) {
        e.preventDefault();
        setTodos([...todos, todo])
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.formtodo}>
                <div className={styles.inputContainer}>
                    <input value={todo.name} 
                        onChange={(e) => setTodo({name: e.target.value, done: false})} 
                        type="text" 
                        className={styles.modernInput}
                        placeholder="Enter todo item ..."
                    >
                    </input>
                    <button type="submit" className={styles.modernButton}>Add</button>
                </div>
            </form>
        </div>
    )
}