import "./menuLateral.css"
import React from "react";

class MenuLateral extends React.Component {

    render() {
        return (
            <div className="panel panel-default">

                <div className="panel-body menuLateral">

                    <div className="row">
                        <div className="col-md-12">
                            <label className="text-center labelInicio">Início</label>
                            <hr className="hrInicio"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label className="text-center labelMenu">Transferências</label>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label className="text-center labelMenu">Investimentos</label>
                            <hr/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label className="text-center labelMenu">Outros Serviços</label>
                            <hr/>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default MenuLateral;