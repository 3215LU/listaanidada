import React, {useState}from 'react';
import Categorias  from "./../Categorias";

function Menu() {
    const [idPaises, setIdPaises ]= useState(-1);
    const handleCargarPaises =function (e){
        const opcion =e.target.value;
        console.log(opcion);
        setIdPaises(opcion);
    }
  return (
    <div className='row'>
        <div className='col-6'>
            <h3>
                Continente
            </h3>
            <select name="Categorias" id="selCategorias" onClick={handleCargarPaises}>
            <option value={-1}> Seleccione una opción</option>
                {
                    Categorias.map((item, i)=>(
                        <option key={"Categoria"+i} 
                            value={i} >
                            {item.continente}
                        </option>
                    ))
                }
            </select>
        </div>

        <div className='col-6'>
            <h3>Países</h3>
                <select name="Paises" id="selpais">
                {    
                          idPaises  > -1 &&
                          (
                            Categorias[idPaises].paises.map((item,i)=>(
                                <option key={"pais"+i} value="">{item}</option>
                            ))
                          )
                }
            
            </select>
        </div>
    </div>
  )};
export default Menu;