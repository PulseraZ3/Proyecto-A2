import '../estilos/MainBlog.css'
function MainDocumentacion(){
    return(
        <div className='comercioContent'>
            <div className='comercioContendor'>
                <div>
                    <section className="blog-section">
                    <h1 className="blog-title">Blog de Empresa Amarilla</h1>
                    <div className="blog-container">
                        <article className="blog-post">
                            <h2 className="post-title">Las Mejores Motos del 2024</h2>
                            <p className="post-date">Publicado el 20 de Octubre de 2024</p>
                            <p className="post-excerpt">Descubre las mejores motos que llegan este año al mercado, con análisis y comparativas que te ayudarán a elegir la moto perfecta para ti.</p>
                            <a href="mejores-motos.html" className="read-more">Leer Más</a>
                        </article>
                        <article className="blog-post">
                            <h2 className="post-title">Mantenimiento Básico de Motos</h2>
                            <p className="post-date">Publicado el 15 de Octubre de 2024</p>
                            <p className="post-excerpt">Aprende los conceptos básicos del mantenimiento de motos para mantener tu vehículo en óptimas condiciones y alargar su vida útil.</p>
                            <a href="mantenimiento.html" className="read-more">Leer Más</a>
                        </article>
                        <article className="blog-post">
                            <h2 className="post-title">Consejos para Nuevos Motociclistas</h2>
                            <p className="post-date">Publicado el 10 de Octubre de 2024</p>
                            <p className="post-excerpt">Si eres nuevo en el mundo de las motos, aquí tienes algunos consejos esenciales que te ayudarán a empezar de la mejor manera.</p>
                            <a href="consejos-nuevos.html" className="read-more">Leer Más</a>
                        </article>
                        <article className="blog-post">
                            <h2 className="post-title">Consejos para Nuevos Motociclistas</h2>
                            <p className="post-date">Publicado el 10 de Octubre de 2024</p>
                            <p className="post-excerpt">Si eres nuevo en el mundo de las motos, aquí tienes algunos consejos esenciales que te ayudarán a empezar de la mejor manera.</p>
                            <a href="consejos-nuevos.html" className="read-more">Leer Más</a>
                        </article>
                    </div>
                </section>
                </div>  
            </div>
        </div>
    )
}
export default MainDocumentacion;