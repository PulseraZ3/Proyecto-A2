import '../Estilos/Catalogo.css';

import Barra from './subcomponents/BarraHistorial'; // terminada
import Cards from './subcomponents/CardCategorias';
import Aside from './subcomponents/Aside-categorias';
import BarraPosicion from "./subcomponents/Barra-posicion";
import ElementosCatalogo from "./subcomponents/ElementosCatalogo";

function CatalogoPage() {
    return (
        <div className="contendor-catalogo">
            <Barra />
            <Cards />
            <div className="layout">
                <Aside className="contendor-aside" />
                <div className="barraPosicion-contendor">
                    <BarraPosicion />
                    <ElementosCatalogo />
                </div>
            </div>
        </div>
    );
}

export default CatalogoPage;
