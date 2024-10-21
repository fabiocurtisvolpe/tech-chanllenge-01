import "./extrato.css"
import React from "react";

class Extrato extends React.Component {

    render() {
        return (
            <div className="panel panel-default">

                <div className="panel-body extrato">

                    <div className="row">
                        <div className="col-md-6">
                            <label className="labelExtrato">Extrato</label>
                        </div>

                        <div className="col-md-2">

                            <div className="divCirculo">
                                <span className="bi bi-pencil-fill btn"></span>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="divCirculo">
                                <span className="bi bi-trash3-fill btn"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row rowExtrato">

                        <div className="col-md-12">

                            <div className="row">
                                <div className="col-md-6">
                                    <label className="labelMes">Novembro</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label className="labelTipo">Deposito</label>
                                </div>
                                <div className="col-md-6">
                                    <label className="labelData">21/10/2024</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="labelValorExtrato">Valor</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <hr/>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Extrato;