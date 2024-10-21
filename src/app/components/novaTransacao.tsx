import "./novaTransacao.css";
import React from "react";

class NovaTransacao extends React.Component {

    render() {
        return (
            <div className="panel panel-default m-lg-4">

                <div className="panel-body novaTransacao">

                    <div className="row">
                        <div className="col-md-6">
                            <label className="labelNovaTransacao">Nova Transação</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 valor">
                            <label className="labelValorNovaTransacao" htmlFor="valor">Valor R$</label>
                            <input id="valor" name="valor" type="text" className="form-control"
                                   placeholder="R$ 0,00"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">

                            <button type="button" className="btn btnConcluirTransacao" title="Concluir transação">
                                Concluir transação
                            </button>

                        </div>
                    </div>

                </div>


            </div>
        )
    }

}

export default NovaTransacao;
