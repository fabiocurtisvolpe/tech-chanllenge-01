"use client";

import "./page.css"

import React from "react";
import HeaderBank from "@/app/components/headerBank";
import MenuLateral from "@/app/components/menuLateral";
import BoasVindas from "@/app/components/boasVindas";
import Extrato from "@/app/components/extrato";
import NovaTransacao from "@/app/components/novaTransacao";
import MenuTablet from "@/app/components/tablet/menuTablet";
import BoasVindasTablet from "@/app/components/tablet/boasVindasTablet";


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <HeaderBank></HeaderBank>
                <div className="container-fluid isDesk">

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

                <div className="container-fluid isTablet">

                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <MenuTablet></MenuTablet>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <BoasVindasTablet></BoasVindasTablet>
                        </div>
                    </div>

                    <div className="row">

                    </div>

                    <div className="row">

                    </div>

                </div>

                <div className="container-fluid isMobile">

                </div>

            </div>
        );
    }
}

export default HomePage;