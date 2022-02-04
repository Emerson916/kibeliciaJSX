import register_image from "../../assets/Register/registerImg.svg";
import { Button } from "../../Components/Button";
import "./register.scss";

export function Register() {
    return (
        <div id="page-register">
            <aside>
                <strong>Falta pouco para matar sua fome!</strong>
                <p>Estamos quase la, registre-se para logar no App</p>

                <img src={register_image} alt="login-image" />
            </aside>

            <main>
                <div className="main-content">
                    <h2>Preencha os campos abaixos</h2>

                    <form onSubmit="">
                        <input
                            type="text"
                            placeholder="Dígite seu E-mail"
                        />

                        <input
                            type="password"
                            placeholder="Dígite sua senha"
                        />

                        <input
                            type="password"
                            placeholder="Cep da rua"
                        />

                        <div className="container-input">

                            <input

                                type="text"
                                placeholder="Nome da Rua"
                            />

                            <input
                                className="input-number"
                                type="text"
                                placeholder="N° da casa"
                            />

                        </div>
                        <input
                            type="text"
                            placeholder="Estado"
                        />

                        <div className=" buttons-container">
                            <button>
                                Confirmar
                            </button>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    );
}