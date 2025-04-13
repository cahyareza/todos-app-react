import styles from "./todoitem.module.css"

export default function TodoItem ({item, todos, setTodos}) {
    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo.name !== item))
    }

    function handleClick(name) {
        const newArray = todos.map((todo) => todo.name===name ? {...todo,done:!todo.done} : todo)
        setTodos(newArray)
    }

    const className = item.done ? styles.completed : ""
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span onClick={() => handleClick(item.name)} className={className}>
                    {item.name}
                </span>
                <span>
                    <button onClick={() => handleDelete(item.name)} className={styles.deleteButton}>X</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}
