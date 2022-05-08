import ReactDom from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import Fundo from "./Fundo";

function Pagina() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <Fundo />
        </div>

    );
}

const htmlPagina = Pagina();
ReactDom.render(htmlPagina, document.querySelector(".root"));