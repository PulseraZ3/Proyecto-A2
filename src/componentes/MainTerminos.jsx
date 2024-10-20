import '../estilos/MainTerminos.css'


function MainDocumentacion(){
    return(
        <div className='comercioContent'>
            <div className='comercioContendor'>
                <div>
                <section className="terminos-section">
                    <h1 className="terminos-titulo">Términos y Condiciones</h1>
                    <p>Bienvenido a <strong>Empresa Amarilla</strong>. Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones. Te recomendamos leer atentamente esta sección antes de continuar utilizando nuestros servicios.</p>
                    <h2 className="terminos-subtitulo">1. Uso del Sitio Web</h2>
                    <p>El acceso y uso de nuestro sitio web está sujeto a las leyes aplicables. No puedes usar nuestro sitio de manera que cause o pueda causar daño a la página o interferir con el acceso de otros usuarios.</p>
                    <h2 className="terminos-subtitulo">2. Propiedad Intelectual</h2>
                    <p>Todo el contenido de este sitio web, incluidos los textos, imágenes, logotipos y diseño, es propiedad de <strong>Empresa Amarilla</strong> o está licenciado para su uso. Queda prohibida su reproducción, distribución o modificación sin nuestro consentimiento previo por escrito.</p>
                    <h2 className="terminos-subtitulo">3. Políticas de Privacidad</h2>
                    <p>Tu privacidad es muy importante para nosotros. Consulta nuestra <a href="#">Política de Privacidad</a> para obtener más información sobre cómo recopilamos, utilizamos y protegemos tu información personal.</p>
                    <h2 className="terminos-subtitulo">4. Modificaciones</h2>
                    <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Es tu responsabilidad revisar esta página periódicamente para estar al tanto de cualquier cambio.</p>       
                    <h2 className="terminos-subtitulo">5. Ley Aplicable</h2>
                    <p>Estos términos y condiciones se rigen por las leyes aplicables del país. Cualquier disputa relacionada con el uso de nuestro sitio web será resuelta en los tribunales competentes.</p>
                    <h2 className="terminos-subtitulo">6. Contacto</h2>
                    <p>Si tienes alguna pregunta o inquietud sobre estos términos, por favor ponte en contacto con nosotros:</p>
                    <ul className="terminos-contacto">
                        <li><strong>Email:</strong> legal@empresaamarilla.com</li>
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