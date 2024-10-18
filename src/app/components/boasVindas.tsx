import "./boasVindas.css";
import React from "react";

class BoasVindas extends React.Component {

    private exibirSaldo: boolean = false;

    private classExibirSaldo: string = "bi bi-eye-slash-fill";
    private classBorrado: string = "blurred-text";

    private saldo: number = 0;

    constructor(props: any) {
        super(props);
        this.onInit();
    }

    componentDidMount() {
        this.setState({});
    }

    render() {
        return (
            <div className="panel panel-default m-lg-4">

                <div className="panel-body boasVindas">

                    <div className="row">
                        <div className="col-md-6">
                            <label className="labelNome">Olá, Fábio! :)</label>
                            <label className="labelHoje">{this.hoje()}</label>
                        </div>

                        <div className="col-md-6">

                            <div className="row">

                                <div className="col-md-6">
                                    <label className="labelSaldo">Saldo</label>
                                </div>

                                <div className="col-md-6">
                                    <button type="button" className="btn btn-outline-secondary btn-sm m-lg-2"
                                            onClick={this.visualizarSaldo} title="Visualizar Saldo">
                                        <i className={this.classExibirSaldo}></i>
                                    </button>
                                </div>

                            </div>

                            <div className="row">

                            </div>

                            <div className="row">

                            </div>

                            <div className="row">

                            </div>

                        </div>
                    </div>


                </div>

            </div>
        )
    }

    private onInit = () => {
        this.exibirSaldo = false;
    }

    private visualizarSaldo = () => {
        this.exibirSaldo = !this.exibirSaldo;
        this.classExibirSaldo = this.exibirSaldo ? "bi bi-eye-fill" : "bi bi-eye-slash-fill";
        this.classBorrado = this.exibirSaldo ? (this.saldo >= 0 ? "text-success" : "text-danger") : "blurred-text";
        this.setState({});
    };

    private hoje = (): string => {
        let data: Date = new Date();

        const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const diaSemana = diasSemana[data.getDay()];
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        return `${diaSemana}, ${dia}/${mes}/${ano}`;
    };
}

export default BoasVindas;