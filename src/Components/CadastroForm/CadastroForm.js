import Link from 'next/link'
import styles from './CadastroForm.module.css'

export default function CadastroForm() {
    return(
        <div className={styles.galeria}>
            
            <div className={styles.cardlogin}>
                <h1>Cadastro</h1>
                <div className={styles.textfield}>
                    <label for="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Usuário"></input>
                </div>
                <div className={styles.textfield}>
                    <label for="password">Senha</label>
                    <input type="password" name="password" placeholder="Senha"></input>
                </div>
                <div className={styles.textfield}>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" placeholder="E-mail"></input>
                </div>
                <button className={styles.btnlogin}>Cadastrar</button>
            </div>

        </div>
    )
}