import React from "react";

class ExtratoTablet extends React.Component {

    render() {
        return (
            <div className="panel panel-default extrato">

                <div className="panel-body extratoBody">

                    <div className="row">
                        <div className="col-md-6">
                            <label className="labelExtrato">Extrato</label>
                        </div>

                        <div className="col-md-2">

                            <div className="divCirculo">
                                <span className="bi bi-pencil-fill btnExtratoTablet"></span>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="divCirculo">
                                <span className="bi bi-trash3-fill btnExtratoTablet"></span>
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
                                    <hr className="hrExtrato" />
                                </div>
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
                                    <hr className="hrExtrato"/>
                                </div>
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
                                    <hr className="hrExtrato"/>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default ExtratoTablet;