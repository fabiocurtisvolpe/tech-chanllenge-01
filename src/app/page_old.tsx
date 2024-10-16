"use client";

import React from "react";
import { Transaction } from "./interfaces/transaction.interface";
import ListTransaction from "./components/list-transaction";


class HomePage extends React.Component {

    private transactions: Transaction[] = [];

    private classViewBalance: string = "bi bi-eye-slash-fill";
    private classBlurred: string = "blurred-text";

    private balance: number = 0;

    private viewBalance: boolean = false;

    constructor(props: any) {
        super(props);
        this.onInit();
    }

    componentDidMount() {
        this.setState({});
    }

    private onInit = () => {

        const tmp: Transaction[] = [
            { type: 'Depósito', amount: 500, date: new Date('2024-04-01 02:30:45'), dateFormated: this.formatDatePt(new Date('2024-04-01 02:30:45')), classAmount: 'text-success' },
            { type: 'Saque', amount: -200, date: new Date('2024-03-25 01:59:00'), dateFormated: this.formatDatePt(new Date('2024-03-25 01:59:00')), classAmount: 'text-danger' },
            { type: 'Transferência', amount: -100, date: new Date('2024-03-20 22:45:25'), dateFormated: this.formatDatePt(new Date('2024-03-20 22:45:25')), classAmount: 'text-danger' },
            { type: 'Depósito', amount: 200, date: new Date('2024-02-10 00:00:01'), dateFormated: this.formatDatePt(new Date('2024-02-10 00:00:01')), classAmount: 'text-success' },
            { type: 'Saque', amount: -50, date: new Date('2024-02-09 12:00:00'), dateFormated: this.formatDatePt(new Date('2024-02-09 12:00:00')), classAmount: 'text-danger' },
            { type: 'Depósito', amount: 2000, date: new Date('2024-01-08 12:15:00'), dateFormated: this.formatDatePt(new Date('2024-01-08 12:15:00')), classAmount: 'text-success' }
        ];

        tmp.sort((a, b) => b.date.getTime() - a.date.getTime());
        this.transactions = [...tmp]

        let sum: number = 0;
        this.transactions.forEach((t: Transaction) => {
            sum += t.amount;
        });

        this.balance = sum;
    }

    private handleViewBalance = () => {
        this.viewBalance = !this.viewBalance;

        this.classViewBalance = this.viewBalance ? "bi bi-eye-fill" : "bi bi-eye-slash-fill";

        const c: string = this.balance >= 0 ? "text-success" : "text-danger";
        this.classBlurred = this.viewBalance ? c : "blurred-text";

        this.setState({});
    };

    private formatDatePt = (dts: Date): string => {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).format(dts);
    };

    private refreshBalance = (value: number) => {
        if (value) {
            this.balance = value;

            const c: string = this.balance >= 0 ? "text-success" : "text-danger";
            this.classBlurred = this.viewBalance ? c : "blurred-text";

            this.setState({});
        }
    }

    render() {
        return (
            <div className="container mt-lg-3">

                <div className="panel panel-default rounded-lg shadow-lg">
                    <div className="panel-heading text-center mt-sm-3">
                        <h2>Bem-vindo ao seu Banco Online</h2>
                    </div>

                    <div className="panel-body m-lg-4 mt-lg-4">
                        <h3>Saldo: R$ <b className={this.classBlurred}>{this.balance.toFixed(2)}</b>
                            <button type="button" className="btn btn-outline-secondary btn-sm m-lg-2"
                                onClick={this.handleViewBalance} title="Visualizar Saldo">
                                <i className={this.classViewBalance}></i>
                            </button>
                        </h3>
                        <br />
                    </div>
                </div>

                <ListTransaction transations={this.transactions} refreshBalance={this.refreshBalance}></ListTransaction>
            </div>
        );
    }
}

export default HomePage;