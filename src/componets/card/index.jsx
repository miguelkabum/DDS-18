import styles from "./style.module.css"
export default function Card(){
    return (

        <div className={styles.container}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzj6P1ccLIW1pHyPWIWpL_nwgS--86xF-RQ&s" alt="" />
            <div>
                <h2>Marrom bombom</h2>
                <p>Não deixe o samba morrer...</p>
                <button>Não deixar o samba morrer!</button>
            </div>
        </div>


    )
}