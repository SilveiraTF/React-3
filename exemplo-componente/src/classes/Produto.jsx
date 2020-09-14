import React, {Component} from 'react'
//criando uma classe
export default class Produto extends Component{

    //construtor
    constructor(props){
        super(props) //chama o contrutor de componente

        this.state = {
            nome: "Vacina para Covid-19",
            qntde: 0,
            preco: 0,
            total: 0

        }
    }


    setNome(e){
    // e => evento ocorrido
    //vamos alterar o nome
    this.setState({
        nome: e.target.value //valor de caixa de texto do nome
    })
    }

    setQntde(e){
    // e => evento ocorrido
    //vamos alterar a qntde
    this.setState({
        qntde: e.target.value //valor de caixa de texto do qntde
    })
    }

    setPreco(e){
    // e => evento ocorrido
    //vamos alterar o preco
    this.setState({
        preco: e.target.value //valor de caixa de texto do preco
    })
    }

    //função que calcula o valor total
    calcular(){
        this.setState({
            total: this.state.preco * this.state.qntde
        })
    }
    //renderizar - mostrar - desenhar no browser
    render(){
        
        const nome = this.state.nome
        const preco  = this.state.preco // acesso a variável pelo state // atribui valor
        return (
        <div>   
            <div>
            <label>Nome do produto {nome} </label>
            <input type="text" value={nome} onChange={ e => this.setNome(e)}></input>
            </div>
            <div>
            <label>Qntde do produto {this.state.qntde} </label>
            <input type="number" value={this.state.qntde} onChange={ e => this.setQntde(e)}></input>
            </div>
            <div>
            <label>Preço do produto {preco} </label>
            <input type="number" value={preco} onChange={ e => this.setPreco(e)}></input>
            </div>
            <div>
            <button onClick={ () => this.calcular()}>Calcular</button>
            </div>
            <div>
                <label>Total: {this.state.total}</label>
            </div>
            
        </div>
        )
    }
}