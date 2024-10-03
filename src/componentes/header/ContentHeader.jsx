import '../../estilos/Header.css'
function ContentHeader(){
    return(
        <div className='content-contenedor'>
            <h1 className='title-content'>todas las motos, aquí están</h1>
            <p className='p-content'>Conócela, cómprala o finánciala aquí.</p>
            <div className='box-contenedor'>
                <div className='cuestionario1-contendor'>
                    <h3>Encuentra tu moto ideal, completa los siguente filtros <br/><span>¡Disfruta tu Moto!</span></h3>
                </div>
                <div className='cuestionario2-contendor'>
                    <h3>¿Sabes el nombre de la moto? Buscala Aquí</h3>
                </div>
            </div>
        </div>
    );
}
export default ContentHeader;