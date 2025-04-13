import styles from "./footer.module.css"

export default function Footer({todosCompleted, totalTodos}) {
    return ( 
        <div className={styles.footer}>
           <span className={styles.item}>Completed Todos : {todosCompleted}</span>
           <span className={styles.item}>Total Todos : {totalTodos}</span>
        </div>
    )
}