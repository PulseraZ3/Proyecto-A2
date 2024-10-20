import '../../Estilos/Catalogo.css'
import items from '../../../ElementosCatalogoProductos.json'
function ElementosCatalogo() {
    return (
        <div className="contendor-itemscatalogo">
            {items.map(item => (
                <div className="itemscatalogo">
                    <img src={item.img}></img>
                    <div className='infocatalogo'>
                        <a href="#" className="marca">{item.Marca}</a>
                        <a className="producto">{item.Nomprod}</a>
                        <p className="codigo-prod">Código {item.Codigo}</p>
                        <p className="precio-prod">{item.Precio}</p>
                        <button className="boton-comprar">AÑADIR AL CARRO</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ElementosCatalogo;