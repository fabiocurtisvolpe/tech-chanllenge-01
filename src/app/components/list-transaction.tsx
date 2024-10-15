import "./list-transaction.css";
import React from "react";
import { Transaction } from "../interfaces/transaction.interface";
import NewTransaction from "./new-transaction";
import Dialog from "./dialog";

class ListTransaction extends React.Component<{ transations?: Transaction[], refreshBalance?: any }> {

    private tituloNewTransaction: string = "Nova Transação";

    private transation: Transaction | undefined;
    private transations: Transaction[] = [];

    private isViewAllTransaction: boolean = false;
    private viewAllTransaction: boolean = false;

    private indexTransation?: number = undefined;

    private classViewAllTransaction: string = "bi bi-arrow-bar-down";

    constructor(props: {}) {
        super(props);

        this.state = {
            isModalOpen: false,
            isModalDialogOpen: false
        }
    }

    componentDidMount() {
        this.onInit();
    }

    private onInit = () => {

        if (this.props.transations) {
            this.transations = this.props.transations;
            this.setState({});
        }
    }

    private addCollapse = (index: number): string => {
        return ((index > 2) && (!this.isViewAllTransaction)) ? "collapse" : "";
    }

    private formatAmount = (amount: number): string => {
        amount = amount >= 0 ? amount : (-1) * amount;
        return amount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    private handleViewAllTransaction = (): void => {
        this.isViewAllTransaction = !this.isViewAllTransaction;
        this.classViewAllTransaction = this.viewAllTransaction ? "bi bi-arrow-bar-down" : "bi bi-arrow-bar-up";
        this.setState({});
    }

    private handleNewTransaction = () => {
        this.tituloNewTransaction = "Nova Transação";
        this.transation = undefined;
        this.setState({
            isModalOpen: true,
            isModalDialogOpen: false
        });
    }

    private handleCloseTransaction = () => {
        this.setState({
            isModalOpen: false
        })
    };

    private handleDeteleTransaction = () => {

        if (this.indexTransation != undefined) {

            this.transations.splice(this.indexTransation, 1);
            this.transations.sort((a, b) => b.date.getTime() - a.date.getTime());

            let sum: number = 0;
            this.transations.forEach((t: Transaction) => {
                sum += t.amount;
            });

            this.props.refreshBalance(sum);

            this.handleCloseDeleteTransaction();
            this.setState({});
        }
    }

    private handleCloseDeleteTransaction = () => {
        this.setState({
            isModalDialogOpen: false
        })

        this.indexTransation = undefined;
    };

    private setNewTransation = (t: Transaction) => {

        if (t) {

            this.transations.push(t);
            this.transations.sort((a, b) => b.date.getTime() - a.date.getTime());

            let sum: number = 0;
            this.transations.forEach((t: Transaction) => {
                sum += t.amount;
            });

            this.props.refreshBalance(sum);
            this.setState({});
        }
    }

    private setEditTransation = (t: Transaction) => {

        this.handleDeteleTransaction();
        setTimeout(() => {
            this.setNewTransation(t);
        }, 250)
        
    }

    private editTransation = (t: Transaction, index: number) => {
        this.transation = t;
        this.indexTransation = index;
        this.tituloNewTransaction = "Editar Transação";
        this.setState({
            isModalOpen: true,
            isModalDialogOpen: false
        });
    }

    private deleteTransation = (index: number) => {

        this.indexTransation = index;
        this.setState({
            isModalOpen: false,
            isModalDialogOpen: true
        })
    }

    render() {

        return (
            <div className="panel panel-default rounded-lg shadow-lg panelList">

                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-info m-lg-4 text-end buttonNew" data-toggle="modal" data-target="#myModal" onClick={this.handleNewTransaction}
                    title="Nova Transação">
                        <i className="bi bi-cash-coin"></i>
                    </button>
                </div>

                <div className="panel-body m-lg-4">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <caption>
                                <button type="button" className="btn btn-outline-secondary btn-sm m-lg-2 buttonShowAll"
                                    data-toggle="collapse" data-target="#collapseTr" aria-controls="collapseTr"
                                    onClick={this.handleViewAllTransaction} title="Extrato das últimas transações">
                                    <i className={this.classViewAllTransaction}></i>
                                </button>
                            </caption>

                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Ação</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.transations.map((t, index) => (
                                    <tr key={index} className={this.addCollapse(index)} id="collapseTr">
                                        <td>{index + 1}</td>
                                        <td>{t.dateFormated}</td>
                                        <td className={t.classAmount} title={t.type}>
                                            {this.formatAmount(t.amount)}
                                        </td>
                                        <td>
                                            <button className="btn btn-success m-lg-1 buttonEdit" title="Editar Transação" onClick={() => this.editTransation(t, index)}>
                                                <i className="bi bi-vector-pen"></i>
                                            </button>
                                            <button className="btn btn-warning m-lg-1" title="Excluir Transação" onClick={() => this.deleteTransation(index)}>
                                                <i className="bi bi-trash-fill"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

                {this.state.isModalOpen ?
                    <NewTransaction
                        onClose={this.handleCloseTransaction}
                        setNewTransation={this.setNewTransation}
                        editTransation={this.setEditTransation}
                        title={this.tituloNewTransaction}
                        transation={this.transation}
                        footer={
                            <div>
                                <button className="btn btn-secondary m-lg-1" onClick={this.handleCloseTransaction}>Fechar</button>
                            </div>
                        }
                    /> : null
                }

                {this.state.isModalDialogOpen ?
                    <Dialog
                        onClose={this.handleCloseDeleteTransaction}
                        title="Apagar a Transação"
                        msg="Deseja apagar esta transação?"
                        footer={
                            <div>
                                <button className="btn btn-secondary m-lg-1" onClick={this.handleCloseDeleteTransaction}>Fechar</button>
                                <button className="btn btn-primary m-lg-1" onClick={this.handleDeteleTransaction}>Apagar</button>
                            </div>
                        }
                    /> : null
                }

            </div>
        );
    };
}

export default ListTransaction;