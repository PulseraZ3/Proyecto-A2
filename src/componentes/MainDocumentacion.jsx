import '../estilos/MainDocumentacion.css'


function MainDocumentacion(){
    return(
        <div className='comercioContent'>
            <h1><span>Empresa Amarilla</span> | Documentacion</h1>
            <div className='comercioContendor'>

                <div>
                    <section>
                        <h1>Documentación de Empresa Amarilla</h1>
                        <p>Bienvenido a la sección de documentación de <strong>Empresa Amarilla</strong>. Aquí encontrarás toda la información necesaria sobre cómo utilizar nuestra plataforma, realizar compras y acceder a nuestros servicios. Sigue las instrucciones detalladas a continuación para una experiencia fácil y rápida.</p>
                        
                        <h2>1. Registro de Cuenta</h2>
                        <p>Para acceder a todos nuestros servicios, primero debes registrarte en nuestra plataforma:</p>
                        <ul>
                            <li>Haz clic en el botón <strong>"Registrarse"</strong> en la esquina superior derecha de la página.</li>
                            <li>Rellena los campos obligatorios con tu <strong>nombre, correo electrónico</strong> y <strong>contraseña</strong>.</li>
                            <li>Recibirás un correo de confirmación. Haz clic en el enlace para activar tu cuenta.</li>
                            <li>¡Listo! Ya puedes iniciar sesión y comenzar a explorar.</li>
                        </ul>
                        
                        <h2>2. Cómo Realizar una Compra</h2>
                        <p>Sigue estos sencillos pasos para comprar una motocicleta o accesorios en nuestra tienda:</p>
                        <ul>
                            <li>Inicia sesión con tu cuenta.</li>
                            <li>Explora nuestro catálogo de <strong>motocicletas</strong> y <strong>accesorios</strong> en la sección "Productos".</li>
                            <li>Selecciona los artículos que deseas y haz clic en <strong>"Añadir al carrito"</strong>.</li>
                            <li>Cuando termines de seleccionar, ve a tu carrito y haz clic en <strong>"Finalizar compra"</strong>.</li>
                            <li>Rellena tus <strong>datos de envío</strong> y selecciona el método de pago.</li>
                            <li>Confirma la compra. Recibirás un correo con los detalles de tu pedido.</li>
                        </ul>
                        
                        <h2>3. Métodos de Pago</h2>
                        <p>En <strong>Empresa Amarilla</strong> aceptamos los siguientes métodos de pago:</p>
                        <ul>
                            <li><strong>Tarjetas de crédito y débito</strong> – Visa, MasterCard, American Express.</li>
                            <li><strong>Transferencias bancarias</strong> – Aceptamos transferencias desde los principales bancos del país.</li>
                            <li><strong>Pago en cuotas</strong> – Opción de financiar tu compra hasta 12 meses sin intereses.</li>
                        </ul>
                        
                        <h2>4. Envío y Entrega</h2>
                        <p>Ofrecemos envíos rápidos y seguros a todo el país. Ten en cuenta los siguientes detalles:</p>
                        <ul>
                            <li>El tiempo de entrega estimado es de 3 a 7 días hábiles, dependiendo de tu ubicación.</li>
                            <li>El costo del envío se calculará automáticamente al ingresar tu dirección en el proceso de compra.</li>
                            <li>Recibirás un número de seguimiento para monitorear el estado de tu envío.</li>
                        </ul>
                        
                        <h2>5. Atención al Cliente</h2>
                        <p>Si tienes alguna duda o necesitas asistencia, nuestro equipo de atención al cliente está disponible:</p>
                        <ul>
                            <li><strong>Email:</strong> soporte@empresaamarilla.com</li>
                            <li><strong>Teléfono:</strong> +1 800 123 4567</li>
                            <li><strong>Horario de atención:</strong> Lunes a viernes de 9:00 AM a 6:00 PM</li>
                        </ul>
                        
                        <h2>6. Políticas de Devoluciones</h2>
                        <p>En caso de que necesites devolver un producto, puedes hacerlo siguiendo nuestra política de devoluciones:</p>
                        <ul>
                            <li>Las devoluciones se aceptan dentro de los <strong>30 días</strong> posteriores a la compra.</li>
                            <li>El producto debe estar en su <strong>empaque original</strong> y en perfectas condiciones.</li>
                            <li>Para iniciar una devolución, contáctanos a través de <strong>soporte@empresaamarilla.com</strong> con tu número de pedido.</li>
                        </ul>     
                    </section>
                </div>
                <div>
                    <img src='../public/comprar.jpg'/>
                </div>
            </div>
        </div>
    )
}
export default MainDocumentacion;