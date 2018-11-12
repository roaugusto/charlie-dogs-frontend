import React from 'react';

// import { Container } from './styles';

const Footer = props => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <ul className="list-group lista-links">
                            <li className="list-group-item"><a href="/" title="mini">mini</a></li>
                            <li className="list-group-item"><a href="/" title="pequeno porte">pequeno porte</a></li>
                            <li className="list-group-item"><a href="/" title="médio porte">médio porte</a></li>
                            <li className="list-group-item"><a href="/" title="grande porte">grande porte</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <ul className="list-group lista-links">
                            <li className="list-group-item"><a href="/" title="até R$100">até R$100</a></li>
                            <li className="list-group-item"><a href="/" title="de R$100 a R$300">de R$100 a R$300</a></li>
                            <li className="list-group-item"><a href="/" title="de R$300 a R$500">de R$300 a R$500</a></li>
                            <li className="list-group-item"><a href="/" title="acima de R$500">acima de R$500</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 text-right">
                        <img src={require("../img/logo-rodape.png")} alt="Charlie & Dogs" />
                        <br />
                        <p className="telefone">11 0000.0000<br />
                            <a href="mailto:#" title="Entre em contato!">contato@charlieedog.com.br</a></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;

