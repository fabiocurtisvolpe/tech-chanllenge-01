"use client";

import React from "react";
import HeaderBank from "@/app/components/headerBank";
import MenuLateral from "@/app/components/menuLateral";


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <HeaderBank></HeaderBank>
                <MenuLateral></MenuLateral>
            </div>
        );
    }
}

export default HomePage;