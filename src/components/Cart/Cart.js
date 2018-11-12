import React, { Component } from 'react';
import { inject } from 'mobx-react';

import CardList from './CartList'
import CardAddress from './CartAddress'

import api from "../../services/api"

@inject('addressStore')
@inject('cardStore')
class Cart extends Component {

    state = {
        list: [],
        token: ''
    }

    handleFinalizar = async () => {

        if (this.props.addressStore.nome === '' || this.props.addressStore.cpf === 0 ||
            this.props.addressStore.email === '' || this.props.addressStore.cep === 0 ||
            this.props.addressStore.uf === '' || this.props.addressStore.logradouro === '' ||
            this.props.addressStore.numero === '' || this.props.addressStore.bairro === '' ||
            this.props.addressStore.localidade === ''
        ) {
            alert('Cadastro não finalizado');
            return
        }

        let token = localStorage.getItem('@CharlieDogs:token')
        //console.log('token: ', token)

        if (!token) {
            const response = await api.get("token")
            token = response.data
            localStorage.setItem('@CharlieDogs:token', response.data)
        }

        console.log(this.props.addressStore)

        await api.post(`address/${token}`, { address: this.props.addressStore, token: token })
        await api.post(`sales/${token}`, { animals: this.state.list, token: token })

        this.props.cardStore.setQuantity(0)
        this.props.history.push('/filhotes')

    }

    componentDidMount = async () => {

        let token = localStorage.getItem('@CharlieDogs:token')
        //console.log(token)
        if (!token) return

        await this.setState({ token: token })
        const response = await api.get(`cart/${token}`)
        this.setState({ list: response.data })
        console.log('list: ', this.state.list)
    }

    // handleSearch = async () => {

    //     let token = await localStorage.getItem('@CharlieDogs:token')
    //     if (!token) return

    //     await this.setState({ token: token })
    //     const response = await api.get(`cart/${this.state.token}`)
    //     this.setState({ list: response.data })

    // }

    render() {

        let total = this.state.list.reduce((sum, item) => {
            return sum + item.animal.valor;
        }, 0);

        let totalFormatado = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        return (

            <div className="py-3 container">

                <div className="row">
                    <div className="col-md-6 order-md-1 mb-4">
                        <CardAddress />
                    </div>
                    <div className="col-md-6 order-md-2">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Suas compras</span>
                            <span className="badge badge-secondary badge-pill">{this.state.list.length}</span>
                        </h4>

                        <ul className="list-group mb-3">

                            {this.state.list.map((item, index) => (
                                <CardList key={index} item={item} />
                            ))}


                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (BRL)</span>
                                <strong>{totalFormatado}</strong>
                            </li>

                        </ul>
                        <button className="btn btn-primary btn-lg btn-block"
                            onClick={this.handleFinalizar}
                            type="submit">Finalizar</button>

                    </div>

                </div>

            </div>
        );
    }
}

export default Cart
