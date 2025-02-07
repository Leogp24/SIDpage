import Home from '../views/home/home'
import Somos from '../views/somos/somos'
import Animacion from '../views/animacion/animacion'

const content =  document.getElementById('root');


const router =  (route) => { //esto se llama funcion flecha, lo que esta en parentesis es el parametro
    console.log(route);
    //voy a validar en que ruta esta para saber que debo mostrar

    content.innerHTML = '';
    switch (route){
        case '#/' : 
            {
               content.appendChild( Home());
            } 
        case '#/somos' : 
            {
                content.appendChild( Somos());
            }
        case '#/animacion' : 
            {
                content.appendChild( Animacion());
            }
        default: 
            return console.log('not found - 404')
    }
}

export {router}; //esta linea exporta la funcion router para usarla en index.js