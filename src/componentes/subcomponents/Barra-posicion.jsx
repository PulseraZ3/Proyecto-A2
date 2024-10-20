import '../../Estilos/Catalogo.css'
import ItemsCantidad from '../../../ElementosCatalogoProductos.json'
function BarraPosicion(){
    const cantidad = Object.keys(ItemsCantidad).length;
    return (
        <div className="contenedor-BarraPosicion">
            <p>Resultados ({cantidad}) Ordenar por</p>
            <select>
                <option value="">Posición</option>
                <option value="option1">Nombre del Producto</option>
                <option value="option2">Precio</option>
                <option value="option3">Marca</option>
                <option value="option4">Tipo</option>
            </select>
            <div className="Barra-historial-navegacion">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">></a>
            </div>
        </div>
    )
}

export default BarraPosicion;