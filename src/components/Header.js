import React, { Component } from 'react';
import api from "../services/api"
//import socket from 'socket.io-client'

import { inject, observer } from 'mobx-react';

@inject('cardStore')
@observer
class Header extends Component {

    state = {
        collapsed: true,
    };


    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        //this.subscribeToEvents()
        this.handleItemCart()
    }

    handleItemCart = async () =>{
        let token = localStorage.getItem('@CharlieDogs:token')
        //console.log(token)
        if (!token) return 
        const response = await api.get(`countCart/${token}`)
        console.log('qtd: ', response.data)
        //this.setState({ qtdItemCart: response.data })
        this.props.cardStore.qtdCart = response.data

    }

    // subscribeToEvents = () => {
    //     const io = socket('http://localhost:3000')
    //     io.on('qtdCart', data => console.log('qtdCont', data))
    // }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img style={{ maxWidth: '100px', marginRight: '10px', paddingLeft: '10px' }} src={require("../img/logo1.png")} alt="dogs" />Charlie & Dogs
            </a>
                <button onClick={this.toggleNavbar} className={`${classTwo}`} 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`${classOne}`} id="navbarResponsive">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/filhotes">Filhotes <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="btn" href="/cart"> 
                            <span className="text-muted"><img src={require("../img/goods.png")} alt="goods" />t</span>
                            <span className="cart badge badge-secondary badge-pill">{this.props.cardStore.qtdCart }</span>
                        </a>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Header;