import Link from 'next/link'
import styles from './LoginForm.module.css'

export default function LoginForm() {
    return(
        <div className={styles.galeria}>
            
            <div className={styles.cardlogin}>
                <h1>LOGIN</h1>
                <div className={styles.textfield}>
                <label for="usuario">Usuário</label>
                <input type="text" name="usuario" placeholder="Usuário"></input>
                </div>
                <div className={styles.textfield}>
                <label for="password">Senha</label>
                <input type="password" name="password" placeholder="Senha"></input>
                </div>
                <button className={styles.btnlogin}>Login</button>
            </div>

        </div>
    )
}