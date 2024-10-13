import React from "react";

class Dialog extends React.Component<{ title?: string, msg?: string, onClose?: any, footer?: any }> {

    private title: string = "";
    private msg: string = "";


    constructor(props: {}) {
        super(props);
        this.onInit();
    }

    componentDidMount() {
        this.setState({});
    }

    private onInit = () => {

        if (this.props.title) {
            this.title = this.props.title;
        }

        if (this.props.msg) {
            this.msg = this.props.msg;
        }
    }

    render() {
        return (
            <div className="modal fade show" style={{ display: 'block' }} role="dialog" aria-labelledby="dialogModal"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="dialogModal">{this.title}</h5>

                            <button type="button" className="close" onClick={this.props.onClose} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            {this.msg}
                        </div>

                        <div className="modal-footer">
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Dialog;