import "./menuLateral.css"
import React from "react";

class MenuLateral extends React.Component {

    render() {
        return (
            <div className="panel panel-default text-center m-lg-4 menuLateral">

                <div className="panel-body">

                    <div className="row">
                        <div className="col-md-12">
                            <label className="labelInicio">Início</label>
                            <hr className="hrInicio" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label className="labelMenu">Transferências</label>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label className="labelMenu">Investimentos</label>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label className="labelMenu">Outros Serviços</label>
                            <hr />
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default MenuLateral;