import React from "react";
import { TransactionType } from "../enum/transaction.enum";
import { Transaction } from "../interfaces/transaction.interface";

class NewTransaction extends React.Component<{ title?: string, onClose?: any, footer?: any, setNewTransation?: any, transation?: Transaction, editTransation?: any }> {

    private transation: Transaction | undefined;

    private textButton: string = "";
    private title: string = "";
    private msgErrorAmount: string = "";

    private selectedOption?: string = undefined;
    private typeOptions: any;

    private types = {
        DEPOSITO: 'Depósito',
        SAQUE: 'Saque',
        TRANSFERENCIA: 'Transferência'
    };

    private type: TransactionType = "Depósito";
    private amount?: number;
    private date?: Date;

    private errorAmount: boolean = false;
    private errorDate: boolean = false;

    constructor(props: {}) {
        super(props);
        this.onInit();
    }

    componentDidMount() {

        if (this.props.transation?.date) {
            this.date = this.props.transation.date;
            const datePicker = document.getElementById("datePicker") as HTMLInputElement; 
            datePicker.value = this.props.transation.date.toISOString().slice(0, 16); // Format as YYYY-MM-DD
        }

        this.setState({});
    }

    private onInit = () => {

        this.typeOptions = Object.entries(this.types).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
        ));

        if (this.props.title) {
            this.title = this.props.title;
        }

        if (this.props.transation) {
            this.transation = this.props.transation;

            this.amount = (this.props.transation.amount < 0) ? (-1) * this.props.transation.amount : this.props.transation.amount

            if (this.props.transation.type) {
                this.type = this.props.transation.type;

                switch (this.props.transation.type) {
                    case "Depósito":
                        this.selectedOption = "DEPOSITO";
                        break;
                    case "Saque":
                        this.selectedOption = "SAQUE";
                        break;
                    case "Transferência":
                        this.selectedOption = "TRANSFERENCIA";
                        break;
                }
            }

            this.textButton = "Alterar"
        }
        else {
            this.textButton = "Adicionar"
        }
    }

    private handleChange = (event: any) => {

        switch (event.target.name) {
            case "datePicker":
                this.date = new Date(event.target.value);
                this.errorDate = false;
                break;
            case "amount":
                if (isNaN(event.target.value)) {
                    this.errorAmount = true;
                    this.msgErrorAmount = "Somente Número";
                }
                else {
                    this.amount = Number(event.target.value);
                    this.errorAmount = false;
                }
                break;
                
            case "typeSelect":

                this.selectedOption = event.target.value;
                switch (event.target.value) {
                    case "DEPOSITO":
                        this.type = "Depósito";
                        break;
                    case "SAQUE":
                        this.type = "Saque";
                        break;
                    case "TRANSFERENCIA":
                        this.type = "Transferência";
                        break;
                }

                break;
        }

        this.setState({});
    }

    private handleSaveTransaction = (event: any) => {
        event.preventDefault();

        this.errorDate = false;
        this.errorAmount = false;

        let formValid: boolean = true;
        if (this.date == undefined) {
            formValid = false;
            this.errorDate = true;
        }

        if (this.amount == undefined) {
            formValid = false;
            this.msgErrorAmount = "Campo Obrigatório"
            this.errorAmount = true;
        }

        if (formValid) {
            switch (this.type) {
                case "Saque":
                case "Transferência":
                    if (this.amount) {
                        this.amount = (-1) * this.amount;
                    }
                    break;
                case "Depósito":
                    break;
            }

            let t: Transaction = {
                type: this.type,
                amount: this.amount || 0,
                date: this.date || new Date(),
                dateFormated: this.formatDatePt(this.date || new Date()),
                classAmount: (this.amount || 0) > 0 ? 'text-success' : 'text-danger'
            }

            if (this.props.transation) {
                this.props.editTransation(t);
            }
            else {
                this.props.setNewTransation(t);
            }
            
            this.props.onClose();
        }
        else {
            this.setState({})
        }
    }

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

    render() {
        return (
            <div className="modal fade show" style={{ display: 'block' }} role="dialog" aria-labelledby="newTransactionModal"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newTransactionModal">{this.title}</h5>

                            <button type="button" className="close" onClick={this.props.onClose} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>

                        </div>
                        <form onSubmit={this.handleSaveTransaction}>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="datePicker">Data</label>
                                    <input id="datePicker" name="datePicker" type="datetime-local" className="form-control"
                                        placeholder="dd/mm/yyyy HH:mm" onChange={this.handleChange}  />
                                    {this.errorDate && <span className="error">Campo Obrigatório</span>}
                                </div>

                                <div className="form-group mt-lg-2">
                                    <label htmlFor="amount">Valor R$</label>
                                    <input id="amount" name="amount" type="text" className="form-control"
                                        placeholder="R$ 0,00"
                                        onChange={this.handleChange} value={this.amount} />
                                    {this.errorAmount && <span className="error">{this.msgErrorAmount}</span>}
                                </div>

                                <div className="form-group mt-lg-2">
                                    <label htmlFor="typeSelect">Tipo</label>
                                    <select id="typeSelect" name="typeSelect" className="form-control"
                                        onChange={this.handleChange} value={this.selectedOption}>
                                        {this.typeOptions}
                                    </select>
                                </div>

                            </div>
                            <div className="modal-footer">
                                {this.props.footer}
                                <button type="submit" className="btn btn-primary">{this.textButton}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default NewTransaction;