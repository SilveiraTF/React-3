import React from 'react' // biblioteca padrão
import ReactDOM from 'react-dom' //classe para renderizar ao usuário da biblioteca React-dom

//importa o componente criado
import Jogo from './componentes/Jogo'
import Estadio from './componentes/Estadio'

// quando usamos 2 ou mais componentes, precisamos de um alemento pai, ou melhor o componente root
//caso não queiramos um componente html como pai, podemos utilizar React.Fragment
/*ReactDOM.render(
    <div>
        <Jogo/>
        <Estadio/>
    </div>
    , document.getElementById("root"))*/
import {BomDia, BoaTarde, BoaNoite} from './componentes/Saudacoes'
import Saudacoes from './componentes/Saudacoes'
import Produto from './classes/Produto'
import Imc from './classes/Imc'

ReactDOM.render(    
    <React.Fragment>
        <Jogo timeA="Sesi Franca" timeB="Flamengo"/>
        <Estadio nome="Pedrocão"/>
        <BomDia timeA="Sesi Franca"/>
        <BoaTarde timeB="Flamengo"/>
        <BoaNoite nome="Pedrocão"/>
        <Saudacoes.BoaNoite nome="pedrocão"/>
        <Saudacoes.BomDia timeA="Sesi"/>
        <Saudacoes.BoaTarde timeB="Flamengo"/>
        <Produto/>
        <Imc/>
    </React.Fragment>
    , document.getElementById("root")
)