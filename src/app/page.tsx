"use client";

import React from "react";
import HeaderBank from "@/app/components/headerBank";

class HomePage extends React.Component {

    constructor(props: any) {
        super(props);
        this.onInit();
    }

    componentDidMount() {
        this.setState({});
    }

    private onInit = () => {

    }

    render() {
        return (
            <div>
                <HeaderBank></HeaderBank>
            </div>
        );
    }
}

export default HomePage;