import React, {useState}from 'react';
import Categorias  from "./../Categorias";


function Menu() {
    const [idArtculos, setIdArticulos ]= useState(-1);
    const handleCargarArticulos =function (e){
        const opcion =e.target.value;
        console.log(opcion);
        setIdArticulos(opcion);
    }
  return (
    <div className='row'>
        <div className='col-6'>
            <h3>
                Categoría
            </h3>
            <select name="Categorias" id="selCategorias" onClick={handleCargarArticulos}>
            <option value={-1}> Seleccione una opción</option>
                {
                    Categorias.map((item, i)=>(
                        <option key={"Categoria"+i} 
                            value={i} >
                            {item.nombre}
                        </option>
                    ))
                }
            </select>
        </div>

        <div className='col-6'>
            <h3>Artículos</h3>
                <select name="articulos" id="selarticulo">
                {    
                          idArtculos  > -1 &&
                          (
                            Categorias[idArtculos].articulos.map((item,i)=>(
                                <option key={"articulo"+i} value="">{item}</option>
                            ))
                          )
                }
            
            </select>
        </div>
    </div>
  )};
export default Menu;