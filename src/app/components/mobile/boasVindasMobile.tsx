import React from "react";

class BoasVindasMobile extends React.Component {

    private exibirSaldo: boolean = false;

    private classExibirSaldo: string = "bi bi-eye-slash-fill btnSaldo";
    private classBorrado: string = "blurred-text labelValor";

    private saldo: number = 2500;
    private textSaldo: string = "";

    constructor(props: any) {
        super(props);
        this.onInit();
    }

    componentDidMount() {
        this.setState({});
    }

    render() {
        return (
            <div className="panel panel-default boasVindas">

                <div className="panel-body">

                    <div className="row">
                        <div className="col-md-12">
                            <label className="labelNome">Olá, Fábio! :)</label>
                            <label className="labelHoje">{this.hoje()}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 divSaldo">
                            <label className="labelSaldo">Saldo</label>
                            <span className={this.classExibirSaldo} onClick={this.visualizarSaldo}
                                  title="Visualizar Saldo"></span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <hr className="hrSaldo"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 divContaCorrente">
                            <label className="labelContaCorrente">Conta Corrente</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 divTextSaldo">
                            <label className={this.classBorrado}>{this.textSaldo}</label>
                        </div>
                    </div>

                    <div className="ilustracao"></div>


                </div>

            </div>
        )
    }

    private onInit = () => {
        this.exibirSaldo = false;

        this.textSaldo = this.formatSaldo(this.saldo);
    }

    private visualizarSaldo = () => {
        this.exibirSaldo = !this.exibirSaldo;
        this.classExibirSaldo = this.exibirSaldo ? "bi bi-eye-fill btnSaldo" : "bi bi-eye-slash-fill btnSaldo";
        this.classBorrado = this.exibirSaldo ? "labelValor" : "blurred-text labelValor";
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

    private formatSaldo = (amount: number): string => {
        amount = amount >= 0 ? amount : (-1) * amount;
        return amount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };
}

export default BoasVindasMobile;