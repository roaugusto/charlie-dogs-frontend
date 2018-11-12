import React, { Component } from 'react';
import api from "../../services/api"

import Animal from "./Animal";

class AnimalList extends Component {

    state = {
        filhotes: [],
        query: ''
    }

    componentDidMount = async () => {

        const response = await api.get("dogs")
        this.setState({ filhotes: response.data })        
        
    }


    handleSearchQuery = async () => {

        const response = await api.get(`dogs/${this.state.query}`)
        this.setState({ filhotes: response.data })
    }

    setQuery = e => {
        //debugger
        //console.log(e.target.value)
        this.setState({ query: e.target.value })
        console.log(this.state.query)
    }

    handleInsert = async () => {

        this.props.history.push('/insertAnimal')

    }

    render() {
        return (
            <div className="container">
                <div className="search">
                    <form className="form-inline mt-1 mt-md-0">
                        <input className="form-control mr-sm-2"
                            type="text"
                            name="search"
                            value={this.state.query}
                            onChange={this.setQuery}
                            placeholder="Busca"
                            aria-label="Busca"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0"
                            type="button"
                            onClick={this.handleSearchQuery}>Busca
                        </button>
                        <button className="btn btn-outline-success my-2 my-sm-0 custom-btn"
                            type="button"
                            onClick={this.handleInsert}>Incluir Filhote
                        </button>
                    </form>
                </div>

                <div className="row mt-5">

                    {this.state.filhotes.map((filhote, index) => (
                        <Animal key={index} filhote={filhote} search={this.handleSearchQuery} />
                    ))}

                </div>
            </div>
        )
    }
}

export default AnimalList;
