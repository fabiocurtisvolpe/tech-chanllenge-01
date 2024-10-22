import "./menuTablet.css"
import React from "react";

class MenuTablet extends React.Component {

    render() {
        return (
            <div className="panel panel-default menuTablet">

                <div className="panel-body">

                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <label className="labelInicio">Início</label>
                            <hr className="hrInicio"/>
                        </div>

                        <div className="col-md-3 text-center">
                            <label className="labelMenu">Transferências</label>
                        </div>

                        <div className="col-md-2 text-center">
                            <label className="labelMenu">Investimentos</label>
                        </div>

                        <div className="col-md-4 text-center">
                            <label className="labelMenu">Outros Serviços</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MenuTablet;