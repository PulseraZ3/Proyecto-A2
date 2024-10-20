import '../estilos/MainPrivacidad.css'


function MainDocumentacion(){
    return(
        <div className='comercioContent'>
            <div className='comercioContendor'>
                <div>
                <section className="privacidad-section">
                    <h1 className="privacidad-titulo">Política de Privacidad</h1>
                    <p>En <strong>Empresa Amarilla</strong>, valoramos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información cuando accedes a nuestro sitio web y utilizas nuestros servicios.</p>
                    <h2 className="privacidad-subtitulo">1. Información que Recopilamos</h2>
                    <p>Recopilamos información personal que nos proporcionas al registrarte, realizar un pedido o ponerte en contacto con nosotros. Esto puede incluir:</p>
                    <ul>
                        <li>Nombre</li>
                        <li>Email</li>
                        <li>Teléfono</li>
                        <li>Dirección</li>
                    </ul>
                    <h2 className="privacidad-subtitulo">2. Uso de la Información</h2>
                    <p>La información que recopilamos se utiliza para:</p>
                    <ul>
                        <li>Procesar tus pedidos y gestionar tu cuenta.</li>
                        <li>Mejorar nuestros productos y servicios.</li>
                        <li>Enviarte información y promociones relevantes.</li>
                        <li>Atender tus consultas y solicitudes.</li>
                    </ul>
                    <h2 className="privacidad-subtitulo">3. Compartición de la Información</h2>
                    <p>No compartimos tu información personal con terceros sin tu consentimiento, excepto en las siguientes circunstancias:</p>
                    <ul>
                        <li>Cuando sea necesario para procesar tu pedido (por ejemplo, con servicios de entrega).</li>
                        <li>Si estamos obligados a hacerlo por ley.</li>
                        <li>Para proteger nuestros derechos y los de otros usuarios.</li>
                    </ul>
                    <h2 className="privacidad-subtitulo">4. Seguridad de la Información</h2>
                    <p>Implementamos medidas de seguridad adecuadas para proteger tu información personal contra el acceso no autorizado, la divulgación o la destrucción. Sin embargo, ten en cuenta que ninguna transmisión de datos a través de Internet es completamente segura.</p>
                    <h2 className="privacidad-subtitulo">5. Tus Derechos</h2>
                    <p>Tienes derecho a acceder, corregir o eliminar tu información personal. Si deseas ejercer estos derechos, por favor contáctanos a través de los datos de contacto que se encuentran al final de esta política.</p>
                    <h2 className="privacidad-subtitulo">6. Cambios en Esta Política</h2>
                    <p>Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cualquier cambio publicando la nueva política en esta página. Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos tu información.</p>
                    <h2 className="privacidad-subtitulo">7. Contacto</h2>
                    <p>Si tienes preguntas o inquietudes sobre esta política de privacidad, por favor contáctanos:</p>
                    <ul className="privacidad-contacto">
                        <li><strong>Email:</strong> privacidad@empresaamarilla.com</li>
                        <li><strong>Teléfono:</strong> +1 800 456 7890</li>
                        <li><strong>Dirección:</strong> Calle 123, Ciudad Motociclista, País</li>
                    </ul>                   
                </section>
                </div>
            </div>
        </div>
    )
}
export default MainDocumentacion;