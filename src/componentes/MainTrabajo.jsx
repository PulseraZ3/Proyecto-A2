import '../estilos/MainTrabajo.css'
function MainDocumentacion(){
    return(
        <div className='comercioContent'>
            <div className='comercioContendor'>
                <div>
                <section className="trabajos-section">
                    <h1 className="trabajos-title">Ofertas de Trabajo en Empresa Amarilla</h1>
                    <ul className="trabajos-lista">
                        <li className="trabajo-item">
                        <h2 className="puesto-titulo">Vendedor de Motos</h2>
                        <p className="puesto-fecha">Publicado el 20 de Octubre de 2024</p>
                        <p className="puesto-descripcion">Buscamos un vendedor apasionado por las motos que tenga experiencia en ventas y un enfoque al cliente excepcional.</p>
                        <p className="puesto-requisitos">Requisitos: Experiencia en ventas, conocimiento del sector de las motos, habilidades de comunicación.</p>
                        <a href="aplicar-vendedor.html" className="aplicar-btn">Aplicar</a>
                        </li>
                        <li className="trabajo-item">
                        <h2 className="puesto-titulo">Técnico de Mantenimiento de Motos</h2>
                        <p className="puesto-fecha">Publicado el 15 de Octubre de 2024</p>
                        <p className="puesto-descripcion">Estamos en búsqueda de un técnico especializado en el mantenimiento y reparación de motos con al menos 2 años de experiencia.</p>
                        <p className="puesto-requisitos">Requisitos: Título técnico, experiencia en reparaciones, habilidades para trabajar en equipo.</p>
                        <a href="aplicar-tecnico.html" className="aplicar-btn">Aplicar</a>
                        </li>
                        <li className="trabajo-item">
                        <h2 className="puesto-titulo">Community Manager</h2>
                        <p className="puesto-fecha">Publicado el 10 de Octubre de 2024</p>
                        <p className="puesto-descripcion">Buscamos un community manager creativo que gestione nuestras redes sociales y promocione nuestras motos y eventos.</p>
                        <p className="puesto-requisitos">Requisitos: Experiencia en redes sociales, habilidades de redacción y marketing digital.</p>
                        <a href="aplicar-community-manager.html" className="aplicar-btn">Aplicar</a>
                        </li>
                    </ul>
                </section>
                </div>  
            </div>
        </div>
    )
}
export default MainDocumentacion;