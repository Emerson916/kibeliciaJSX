import Login_image from "../../assets/Login/imgLogin.svg";
import icon_google from "../../assets/Login/iconGoogle.png";
import icon_burguer from "../../assets/Login/icon_burguer.svg";
import { Button } from "../../Components/Button";
import "./styles.scss";

export function Login() {
    return (
        <div id="page-auth">
            <aside>
                <strong>Bem-vindo de volta!!</strong>
                <p>Olá, é bom vê-lo de volta acesse sua conta e veja as promoções.</p>
                <img src={Login_image} alt="login-image" />
            </aside>

            <main>
                <div className="main-content">
                    
                    <div className="container-logo">
                        <img src={icon_burguer} alt="logo"/>
                    </div>

                    <h2>Kibelicia</h2>

                    <form onSubmit="">
                        <input
                            type="text"
                            placeholder="Dígite seu E-mail"
                        />

                        <input
                            type="password"
                            placeholder="Dígite sua senha"
                        />

                        <Button type="submit">
                            Login
                        </Button>

                    </form>
                    <div className="separator"> ou </div>


                    <button onClick="" className="auth-google">
                        <img src={icon_google} alt="icon-google" />
                        Logar com o Google
                    </button>

                    <div className="container-cadaster">
                        <p  className="cadaster">Não tem cadastro ?
                            <a href="">CADASTRE-SE</a></p>
                    </div>
                </div>
            </main>
        </div>
    );
}