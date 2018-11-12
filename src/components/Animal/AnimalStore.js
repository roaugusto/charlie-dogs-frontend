import React, { Component } from 'react';
import api from "../../services/api"

import NumberFormat from 'react-number-format';

export default class AnimalStore extends Component {

    state = {
        raca: '',
        image: '',
        dtNasc: '',
        sexo: 'Macho',
        valor: 0
    }

    handleInputRaca = e => this.setState({ raca: e.target.value })
    handleInputImage = e => this.setState({ image: e.target.value })
    handleInputDtNasc = e => this.setState({ dtNasc: e.target.value })
    handleInputSexo = e => this.setState({ sexo: e.target.value })
    handleInputValor = e => this.setState({ valor: e.target.value })

    createFilhote = async () => {

        const animal = {
            raca: this.state.raca,
            image: this.state.image,
            dtNasc: this.state.dtNasc,
            sexo: this.state.sexo,
            valor: this.state.valor,
            status: 'A'
        }

        console.log(animal)

        await api.post('/dogs', { animal })
        this.props.history.push('/filhotes')

    }


    render() {
        return (
            <div className="py-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <span className="anchor" id="formLogin"></span>

                        <div className="card rounded-0">
                            <div className="card-header">
                                <h3 className="mb-0">Incluir filhote</h3>
                            </div>
                            <div className="card-body">
                                <form className="form">
                                    <div className="form-group">
                                        <label>Raça</label>
                                        <input type="text"
                                            value={this.state.raca}
                                            onChange={this.handleInputRaca}
                                            name="raca" className="form-control rounded-0" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Imagem</label>
                                        <input type="text"
                                            value={this.state.image}
                                            onChange={this.handleInputImage}
                                            name="image" className="form-control rounded-0"
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <label>Nascido em</label>

                                        <NumberFormat style={{marginLeft:"10px"}} format="##/##/####"
                                            placeholder="DD/MM/YY"
                                            onChange={this.handleInputDtNasc}
                                            mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']} 
                                            />

                                    </div>
                                    <div className="form-group">
                                        <label>Sexo</label> 
                                        <select style={{marginLeft:"10px"}} name="sexo"
                                            value={this.state.sexo}
                                            onChange={this.handleInputSexo}>
                                            <option value="Macho">Macho</option>
                                            <option value="Femea">Femea</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Valor</label>                                        
                                        <input style={{marginLeft:"10px"}} type="number"
                                            value={this.state.valor}
                                            onChange={this.handleInputValor}
                                            name="valor"/>
                                    </div>

                                    <button type="button" onClick={this.createFilhote} className="btn btn-primary float-right">Incluir</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
