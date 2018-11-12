import React, { Component } from 'react';
import api from "../../services/api"

export default class CartList extends Component {

    handleRemove = async () => {

        const response = await api.get(`cart/${this.props.item._id}`)
        this.setState({ list: response.data })
    }


    render() {

        let valor = this.props.item.animal.valor
        let valorFormatado = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        return (
            <div>

                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        {this.props.animal}
                        <h6 className="my-0">{this.props.item.animal.raca}</h6>
                        <small className="text-muted">Macho</small><br />
                        <img className="image-animal" width="100px"
                            src={this.props.item.animal.image}
                            alt="dog" />

                    </div>
                    <span className="text-muted">{valorFormatado}</span>
                </li>


            </div>
        )
    }
}
