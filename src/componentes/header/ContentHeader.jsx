import '../../estilos/Header.css'
function ContentHeader(){
    return(
        <div className='content-contenedor'>
            <h1 className='title-content'>todas las motos, aquí están</h1>
            <p className='p-content'>Conócela, cómprala o finánciala aquí.</p>
            <div className='box-contenedor'>
                <div className='cuestionario1-contendor'>
                    <h3>Encuentra tu moto ideal, completa los siguente filtros</h3>
                    <form className='form-range'>
                        <div className='form-range-contenedor'>
                            <div className='input-range-precio'>
                                <h3>Precio</h3>
                                <input type='range'/>
                            </div>
                            <div className='input-range-c'>
                                <h3>Cilindrada</h3>
                                <input type='range'/>
                            </div>
                        </div>
                        <div className='button-buscar'>
                            <a href='#'>                       
                                <p>Sin referencia</p>
                                <span className="material-symbols-outlined">arrow_drop_down</span>                            
                            </a>
                        </div>
                        <div className='button-moto'>
                            <a>                        
                                <input type='submit' value="buscar moto"/>
                            </a>
                        </div>
                    </form>
                </div>
                <div className='cuestionario2-contendor'>
                    <h3>¿Sabes que moto buscas? <span>Escribelo Acá</span></h3>
                    <form>
                        <div className='search'>
                            <span className="material-symbols-outlined">search</span>
                            <input type='search' className='input-buscador' placeholder='Escribe modelo, marca o tipo de moto'/>
                        </div>
                    </form>
                    <hr/>
                    <h3 className='title-catalogo'>Mira todos los modelos</h3>
                    <div className='button-catalogo'>
                        <a href='#'>                       
                            <p>ver catálogo completo</p>
                            <span className="material-symbols-outlined">expand_circle_right</span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default ContentHeader;