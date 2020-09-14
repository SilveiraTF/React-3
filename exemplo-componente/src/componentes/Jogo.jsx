// componente baseado em funções

// export - função pode ser utilizada em outro arquivo
// defeault - não tem nome - é como se fosse o construtor
//JSX - extenção de arquivos React -> são transpilados (transformados em JS)

import React from 'react' //função retorna um componente HTML
/*export default function (){
    return <h2>Jogo de Basquete</h2>
}*/

//arrow function
 export default (props) => <h2> Jogo de Basquete: {props.timeA} X {props.timeB}</h2>