import React from "react";

class NovaTransacaoTablet extends React.Component {

    render() {
        return (
            <div className="panel panel-default m-lg-4 novaTransacao">

                <div className="panel-body">

                    <div className="row">
                        <div className="col-md-6">
                            <label className="labelNovaTransacao">Nova Transação</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <select className="form-select dropTipoTransacao" aria-label="Selecione o Tipo de Transação" defaultValue={'0'}>
                                <option value="O">Selecione o Tipo de Transação</option>
                                <option value="D">Depósito</option>
                                <option value="P">Pagamento</option>
                                <option value="S">Saque</option>
                                <option value="T">Transferência</option>
                            </select>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 valor">
                            <label className="labelValorNovaTransacao" htmlFor="valor">Valor R$</label>
                            <input id="valor" name="valor" type="text" className="form-control"
                                placeholder="R$ 0,00" />
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

export default NovaTransacaoTablet;
