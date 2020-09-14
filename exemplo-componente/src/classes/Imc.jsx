import React, {Component} from 'react'
//criando a classe
export default class Imc extends Component{

    //construtor
    constructor(props){
        super(props) //chama o contrutor de componente

        //criando as variáveis
        this.state = {
            imc:0,
            peso: 0,
            altura: 0

        }
    }

    setAltura(e){
        // e => evento ocorrido
        //vamos alterar a altura
        this.setState({
            altura: e.target.value //valor de caixa de texto da altura
        })
        }

    setPeso(e){
    // e => evento ocorrido
    //vamos alterar o peso
    this.setState({
        peso: e.target.value //valor de caixa de texto do peso
    })
    }

    //função que calcula o valor do imc
    calcular(){
        this.setState({
            imc: this.state.peso / this.state.altura * this.state.altura
        })
    }
    //renderizar - mostrar - desenhar no browser
    render(){
        
        return (
        <div>   
            <div>
            <label>Peso {this.state.peso} </label>
            <input type="number" value={this.state.peso} onChange={ e => this.setPeso(e)}></input>
            </div>
            <div>
            <label>Altura {this.state.altura} </label>
            <input type="number" value={this.state.altura} onChange={ e => this.setAltura(e)}></input>
            </div>
            <div>
            <button onClick={ () => this.calcular()}>Calcular IMC</button>
            </div>
            <div>
                <label>Total: {this.state.imc}</label>
            </div>
            
        </div>
        )
        if (this.state.imc < 18,5){
            <div>
                <label>
                    Seu peso está abaixo do normal!
                </label>
            </div>
        }
        if ((this.state.imc) > 18,5 && (this.state.imc < 24,9)) {
            <div>
                <label>
                    Seu peso está na média!
                </label>
            </div>
        }
        if ((this.state.imc >25) && (this.state.imc <29,9)){
            <div>
            <label>
                Seu peso está acima da média!
            </label>
        </div>
        }
        if ((this.state.imc >30) && (this.state.imc <34,9)){
            <div>
            <label>
                Obesidade grau 1!
            </label>
        </div>
    }
    if ((this.state.imc >35) && (this.state.imc <39  ,9)){
        <div>
        <label>
            Obesidade grau 2!
        </label>
        </div>
        }

    }   
        
}