import "./home.scss";
import configIcon from "../../assets/Home/config.svg";
import helpIcon from "../../assets/Home/help.svg";
import notificationIcon from "../../assets/Home/notification.svg";
import perfilIcon from "../../assets/Home/imgPerfil.svg";
import lanchesIcon from "../../assets/Home/lanches.svg";
import bebidasIcon from "../../assets/Home/bebidas.svg";
import sobremesasIcon from "../../assets/Home/sobremesa.svg";
import marmitaIcon from "../../assets/Home/marmita.svg";
import saudavelIcon from "../../assets/Home/saudavel.svg";
import frutasIcon from "../../assets/Home/frutas.svg";


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
                <ul>
                    <li>
                        <img src={lanchesIcon} alt=""/>
                        <p>Lanches</p>
                    </li>

                    <li>
                        <img src={bebidasIcon} alt=""/>
                        <p>Bebidas</p>
                    </li>

                    <li>
                        <img src={sobremesasIcon} alt=""/>
                        <p>Sobremesas</p>
                    </li>

                    <li>
                        <img src={marmitaIcon} alt=""/>
                        <p>Marmita</p>
                    </li>

                    <li>
                        <img src={saudavelIcon} alt=""/>
                        <p>Saudável</p>
                    </li>

                    <li>
                        <img src={frutasIcon} alt=""/>
                        <p>Frutas</p>
                    </li>
                </ul>
            </nav>
        </div>
    );
}