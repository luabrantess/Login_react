import styles from "../css/form.module.css"
import login from "../img/login.svg"
import register from "../img/register.svg"


export default function Login() {


    return (
    
        <div className={styles.container}>
            <div className={styles.formscontainer}>
                <div className={styles.signinsignup}>
                    <form className={styles.signinform}>
                        <h2 className={styles.title}>Login</h2>
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='Usuário' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.falock}></i>
                            <input type="password" placeholder='Senha' />
                        </div>
                        <input type="submit" value="Login" className={styles.btn} />
                        
                    </form>
                    <form className={styles.signupform}>
                        <h2 className={styles.title}>Cadastre-se</h2>
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.faenveloper}></i>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.falock}></i>
                            <input type="password" placeholder='Senha' />
                        </div>
                        <input type="submit" value="Cadastro" className={styles.btn} />
                        
                    </form>
                </div>
            </div>
            <link rel="stylesheet" href="../css/form.module.css" />
            <div className={styles.panelscontainer}>
                <div class={styles.leftpanel}>
                <div class={styles.content}>
                 <h3>Novo aqui?</h3>
                    <p>
                    Vamos se cadastrar
                    </p>
                    <button class={styles.btntransparente}id="sign-up-btn">
                    Cadastrar
                    </button>
                </div>
                <img src={login} class={styles.image} alt="" />
              </div>
              <div class={styles.rightpanel}>
                <div class={styles.content}>
                    <h3>Já é um de nós?</h3>
                    <p>
                    Faça o login
                    </p>
                    <button class={styles.btntransparente} id="sign-in-btn">
                    Sign in
                    </button>
                </div>
                <img src={register} class={styles.image} alt="" />
              </div> 
                </div> 
        </div>
    )
}