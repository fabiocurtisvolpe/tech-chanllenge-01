"use client";

import React from "react";
import HeaderBank from "@/app/components/headerBank";
import MenuLateral from "@/app/components/menuLateral";
import BoasVindas from "@/app/components/boasVindas";
import Extrato from "@/app/components/extrato";
import NovaTransacao from "@/app/components/novaTransacao";


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <HeaderBank></HeaderBank>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-md-2 mx-auto">
                            <MenuLateral></MenuLateral>
                        </div>

                        <div className="col-md-7 mx-auto">

                            <div className="row">
                                <BoasVindas></BoasVindas>
                            </div>

                            <div className="row">
                                <NovaTransacao></NovaTransacao>
                            </div>

                        </div>

                        <div className="col-md-3 mx-auto">
                            <Extrato></Extrato>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default HomePage;