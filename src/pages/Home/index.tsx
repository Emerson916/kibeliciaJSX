import "./home.scss";
import configIcon from "../../assets/Home/config.svg";
import helpIcon from "../../assets/Home/help.svg";
import notificationIcon from "../../assets/Home/notification.svg";
import perfilIcon from "../../assets/Home/imgPerfil.svg";
import { TypesFood } from "../../Components/TypesFood";
import { Carrosel } from "../../Components/Carousel";

export function Home() {
    return (
        <div id="page-home">
            <header>
                <h2>Kibelicia</h2>

                <input
                    type="text"
                    placeholder="Pesquise por item ou loja"
                />

                <div>
                    <h3>ENTREGAR EM</h3>
                    <p>Rua tamarindos da silva, N°87</p>
                </div>

                <div className="container-icons">

                    <img src={helpIcon} />

                    <img src={configIcon} />

                    <img src={notificationIcon} />

                    <img id="icon_perfil" src={perfilIcon} alt="" />

                </div>
            </header>

            <nav className="perfil-user-navegation">
                <ul>
                    <li>Inicio</li>
                    <li>Pedidos</li>
                    <li>Carteira</li>
                </ul>
            </nav>

            <nav className="tipos-comidas">
                <TypesFood />
            </nav>

            <div>
                <Carrosel />
            </div>

            <div className="container-sliders">
                <p>O que você quer comer hoje ?</p>

            </div>
        </div>
    );
}