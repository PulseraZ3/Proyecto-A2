import '../../Estilos/Catalogo.css'
import Items from '../../../Historial.json'
//terminado
function Historialbarra(){
    return (
        <div className="contendor-barra">
            <div className="items-barra">
                <a href="../../../catalogoLaptops.html"></a>
                {Items.map(item => (
                    <a href={item.here}>{item.title}</a>
                ))}
            </div>
        </div>
    )
}
export default Historialbarra;
