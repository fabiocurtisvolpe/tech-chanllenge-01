import "./headerBank.css"
import React from "react";


class HeaderBank extends React.Component {

    componentDidMount() {
        this.onInit();
    }

    private onInit = () => {

        this.setState({});
    }

    render() {
        return (
            <div className="headerBank">

                <label>Olá, Fabio Curtis Volpe</label>
                <i className="bi bi-person-circle"></i>

            </div>
        )
    }
}

export default HeaderBank;