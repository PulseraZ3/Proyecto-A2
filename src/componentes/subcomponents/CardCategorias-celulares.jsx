import '../../Estilos/Catalogo.css'
import InfoCards from '../../CardsItems-celulares.json'
function CardCategorias() {
    return (
        <div className="contendor-card">
            {InfoCards.map(card => (
                <div className="card-items" key={card.id}>
                    <img src={card.img}></img>
                    <h3>{card.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default CardCategorias;