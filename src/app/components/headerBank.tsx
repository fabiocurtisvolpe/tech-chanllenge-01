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

                <button id="myButton" className="buttonMenu">
                    <i className="bi bi-list"></i>
                </button>

                <label className="labelHeader">Olá, Fabio Curtis Volpe</label>
                <i className="bi bi-person-circle iHeaderPerson"></i>

            </div>
        )
    }
}

export default HeaderBank;