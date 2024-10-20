import '../estilos/MainPrecios.css'
function MainComercio(){
    return(
        <div className='comercioContent'>
            <h1><span>Empresa Amarilla</span> | Precios</h1>
            <div className='comercioContendor'>
                <div>
                    <img src='../public/precios.jpeg'/>
                    <img src='../public/finan.jpg'/>
                </div>
                <div>
                    <h2>Precios</h2>
                    <section>
                        <h1>Nuestros Precios en Empresa Amarilla</h1>
                        <p>En <strong>Empresa Amarilla</strong>, te ofrecemos la mejor relación calidad-precio para que disfrutes de la moto de tus sueños sin comprometer tu presupuesto. Contamos con modelos para todos los gustos y necesidades. ¡Descubre nuestras opciones!</p>
                        
                        <h2>Motocicletas:</h2>
                        <ul>
                            <li><strong>Moto Urbana 125cc</strong> – <span>$1,800 USD</span><br/>
                            Ideal para desplazamientos rápidos y eficientes por la ciudad. Bajo consumo de combustible y gran maniobrabilidad.</li>
                            
                            <li><strong>Moto Deportiva 250cc</strong> – <span>$3,200 USD</span><br/>
                            Diseño aerodinámico y potente motor para quienes buscan adrenalina y velocidad en la carretera.</li>
                            
                            <li><strong>Moto Touring 600cc</strong> – <span>$6,500 USD</span><br/>
                            Perfecta para los amantes de los viajes largos. Confort y rendimiento inigualable para cualquier tipo de terreno.</li>
                        </ul>
                        
                        <h2>Accesorios y Equipamiento:</h2>
                        <ul>
                            <li><strong>Casco Integral</strong> – desde <span>$100 USD</span><br/>
                            Alta seguridad y confort para garantizar tu protección en cada viaje.</li>
                            
                            <li><strong>Chaquetas con Protecciones</strong> – desde <span>$120 USD</span><br/>
                            Diseños modernos con protecciones estratégicas para mayor seguridad en la conducción.</li>
                            
                            <li><strong>Guantes de Moto</strong> – desde <span>$40 USD</span><br/>
                            Resistentes y cómodos, perfectos para cualquier tipo de clima.</li>
                        </ul>
                        <h2>Financiamiento y Ofertas:</h2>
                        <ul>
                            <li>Ofrecemos facilidades de pago con financiamiento hasta 12 meses sin intereses.</li>
                            <li><strong>Descuentos especiales</strong> por compra de motos y accesorios combinados. ¡Pregunta por nuestras promociones!</li>
                        </ul>
                </section>
                </div>
            </div>
        </div>
    )
}
export default MainComercio;