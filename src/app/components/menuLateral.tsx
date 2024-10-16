import "./menuLateral.css"
import React from "react";

class MenuLateral extends React.Component {

    render() {
        return (
            <div className="panel panel-default menu-lateral">

                <label className="labelInicio">Inicio</label>
                <hr className="hrInicio"/>

                <label className="labelMenu">Transferências</label>
                <hr/>

                <label className="labelMenu">Investimentos</label>
                <hr/>

                <label className="labelMenu">Outros Serviços</label>
            </div>
        )
    }

}

export default MenuLateral;