import React, { Component } from 'react';
import api from "../../services/api"

import { inject, observer } from 'mobx-react';

@inject('cardStore')
@observer
class Animal extends Component {

    handleBuy = async () => {

        let token = localStorage.getItem('@CharlieDogs:token')
        console.log('token: ', token)

        if (!token) {
            const response = await api.get("token")
            token = response.data
            localStorage.setItem('@CharlieDogs:token', response.data)
        }

        //console.log('filhote: ', this.props.filhote)

        await api.post('/cart', { animal: this.props.filhote, token: token })

        const response = await api.get(`countCart/${token}`)
        console.log('qtd: ', response.data)
        this.props.cardStore.setQuantity(response.data)

        this.props.search()

    }

    render() {

        let valor = this.props.filhote.valor
        let valorFormatado = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        return (
            <div className="col-md-4 mb-3">
                <div className="card text-center">

                    <div className="card-body">
                        <div className="card-title">
                            <img className="image-animal" src={this.props.filhote.image} alt="dog" />
                        </div>
                        <p className="card-text">
                            <b>{this.props.filhote.raca}</b>
                        </p>
                        <p className="card-text">
                            {valorFormatado} <br />
                        </p>

                        <button type="button" onClick={this.handleBuy} className="btn btn-primary">Comprar</button>
                    </div>

                    <div className="card-footer text-muted">
                        Nascido em: {this.props.filhote.dtNasc}
                    </div>
                </div>
            </div>
        )
    }
}

export default Animal
