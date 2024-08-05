import styles from "./style.module.css"
export default function Card(props){
    return (

        <div className={styles.container}>
            <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzj6P1ccLIW1pHyPWIWpL_nwgS--86xF-RQ&s" alt="" />
            <div className={styles.text}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button className={styles.button}>Não deixar o samba morrer!</button>
            </div>
        </div>


    )
}