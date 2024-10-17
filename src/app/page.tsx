"use client";

import React from "react";
import HeaderBank from "@/app/components/headerBank";
import MenuLateral from "@/app/components/menuLateral";
import BoasVindas from "@/app/components/boasVindas";
import Extrado from "@/app/components/extrado";
import NovaTransacao from "@/app/components/novaTransacao";


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <HeaderBank></HeaderBank>
                <div className="container">

                    <div className="row">

                        <div className="col-sm-3 text-center">
                            <MenuLateral></MenuLateral>
                        </div>

                        <div className="col-sm-6 text-center">

                            <div className="row">
                                <BoasVindas></BoasVindas>
                            </div>

                            <div className="row">
                                <NovaTransacao></NovaTransacao>
                            </div>

                        </div>

                        <div className="col-sm-3 text-center">

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default HomePage;