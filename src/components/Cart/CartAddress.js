import React, { Component } from 'react';
import { inject } from 'mobx-react';

import NumberFormat from 'react-number-format';
import apiCep from '../../services/apiCep';

@inject('addressStore')
class CartAddress extends Component {

    state = {
        nome: '',
        email: '',
        cpf: 0,
        cep: 0,
        bairro: '',
        localidade: '',
        logradouro: '',
        estado: '',
        numero: '',
        estados: ["", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    }


    handleCep = async e => {

        let cep = this.state.cep
        if (!cep) return

        if (this.state.cep.length !== 8) return

        const response = await apiCep.get(this.state.cep + '/json')
        let { erro } = response.data
        console.log(response.data)
        if (erro) return

        this.setState({ bairro: response.data.bairro })
        this.setState({ localidade: response.data.localidade })
        this.setState({ logradouro: response.data.logradouro })
        this.setState({ estado: response.data.uf })

        this.props.addressStore.cep = this.state.cep
        this.props.addressStore.bairro = this.state.bairro
        this.props.addressStore.localidade = this.state.localidade
        this.props.addressStore.logradouro = this.state.logradouro
        this.props.addressStore.estado = this.state.estado

        //console.log('storeAddress:', this.props.addressStore)
    }

    handleNome = e => {
        this.setState({ nome: e.target.value })
        this.props.addressStore.nome = e.target.value
    }

    handleEmail = e => {
        this.setState({ email: e.target.value })
        this.props.addressStore.email = e.target.value
    }

    handleCpf = e => {
        this.setState({ cpf: e.target.value })
        this.props.addressStore.cpf = e.target.value
    }

    handleLocalidade = e => {
        this.setState({ localidade: e.target.value })
        this.props.addressStore.localidade = e.target.value
    }
    handleLogradouro = e => {
        this.setState({ logradouro: e.target.value })
        this.props.addressStore.logradouro = e.target.value
    }

    handleEstado = e => {
        this.setState({ estado: e.target.value })
        this.props.addressStore.estado = e.target.value
    }

    handleBairro = e => {
        this.setState({ bairro: e.target.value })
        this.props.addressStore.bairro = e.target.value
    }
    handleNumero = e => {
        this.setState({ numero: e.target.value })
        this.props.addressStore.numero = e.target.value
    }

    render() {
        return (
            <div>
                <h4 className="mb-2">Endereço</h4>
                <form className="needs-validation">
                    <div className="row">
                        <div className="col-md-7 mb-2">
                            <label htmlFor="firstName">Nome</label>
                            <input type="text" className="form-control"
                                id="firstName"
                                placeholder="Nome" required
                                onChange={this.handleNome}
                            />
                            <div className="invalid-feedback">
                                Favor informa seu nome.
    </div>
                        </div>
                        <div className="col-md-5 mb-2">
                            <label htmlFor="lastName">CPF</label> <br />

                            <NumberFormat onBlur={this.handleCpf} className="form-control" format="###.###.###-##"
                                onChange={this.handleCpf}
                                placeholder="999.999.999-99" onValueChange={(values) => {
                                    const { value } = values;
                                    this.setState({ cpf: value })
                                }}
                            />

                            <div className="invalid-feedback">
                                Informe seu CPF.
    </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleEmail}
                            placeholder="seu@email.com" />
                        <div className="invalid-feedback">
                            Por favor entre com um e-mail válido.
  </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <label htmlFor="zip">CEP</label>
                            <NumberFormat onBlur={this.handleCep} className="form-control" format="#####-###"
                                placeholder="99999-999" onValueChange={(values) => {
                                    const { value } = values;
                                    this.setState({ cep: value })
                                }}
                            />
                        </div>
                        <div className="col-md-4 mb-2">
                            <label htmlFor="state">Estado</label>
                            <select className="custom-select d-block w-100"
                                id="state"
                                value={this.state.estado}
                                onChange={this.handleEstado}
                                required>
                                {this.state.estados.map((x, y) => <option key={y}>{x}</option>)};
                            </select>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-9 mb-2">
                            <label htmlFor="address">Endereço</label>
                            <input type="text" className="form-control"
                                id="address"
                                placeholder="Rua."
                                value={this.state.logradouro}
                                onChange={this.handleLogradouro}
                                required />
                            <div className="invalid-feedback">
                                Por favor entre com seu endereço.
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <label htmlFor="address">Número</label>
                            <input type="text" className="form-control"
                                id="address"
                                value={this.state.numero}
                                onChange={this.handleNumero}
                                required />
                            <div className="invalid-feedback">
                                Por favor entre com seu endereço.
                            </div>

                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" className="form-control"
                            id="bairro"
                            value={this.state.bairro}
                            onChange={this.handleBairro}
                            placeholder="Bairro" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" className="form-control"
                            id="cidade"
                            value={this.state.localidade}
                            onChange={this.handleLocalidade}
                            placeholder="Cidade" />
                    </div>

                </form>

            </div>
        )
    }
}

export default CartAddress