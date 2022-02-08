import lanchesIcon from "../../assets/Home/lanches.svg";
import bebidasIcon from "../../assets/Home/bebidas.svg";
import sobremesasIcon from "../../assets/Home/sobremesa.svg";
import marmitaIcon from "../../assets/Home/marmita.svg";
import saudavelIcon from "../../assets/Home/saudavel.svg";
import frutasIcon from "../../assets/Home/frutas.svg";
import "./styles.scss"

export function TypesFood() {
    return (

        <ul>
            <li className="verdeEscuro">
                <img src={lanchesIcon} alt="" />
                <p>Lanches</p>
            </li>

            <li>
                <img src={bebidasIcon} alt="" />
                <p>Bebidas</p>
            </li>

            <li className="verdeClaro">
                <img src={sobremesasIcon} alt="" />
                <p>Sobremesas</p>
            </li>

            <li className="verdeEscuro">
                <img src={marmitaIcon} alt="" />
                <p>Marmita</p>
            </li>

            <li>
                <img src={saudavelIcon} alt="" />
                <p>Saudável</p>
            </li>

            <li className="verdeClaro">
                <img src={frutasIcon} alt="" />
                <p>Frutas</p>
            </li>
        </ul>
    );
}