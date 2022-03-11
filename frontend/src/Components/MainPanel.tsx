import React from "react";
import { styled } from "@linaria/react";
import Card from "react-bootstrap/esm/Card";
import BigPanelMod from "../Pictures/BigPanelMod.png";

export const MainPanel: React.FC = () => {

    return (
        <div>
            <Card className="bg-transparent text-white">
                <Card.Img src={BigPanelMod} alt="Card image" style={{  width: "750px",  height: "450px", marginLeft: "30%", borderRadius: "25px" }}/>
                <Card.ImgOverlay>
                    <Card.Title style={{ marginLeft: "32%", fontSize: "42px", marginTop: "210px"}}>
                        Vinyl Alliance
                        <p style={{ fontSize: "34px" }}>Let's turn up the volume</p>
                    </Card.Title>
                    <Card.Text style={{ width: "400px", marginLeft: "32.2%" }}>
                    Наша миссия - укрепить позиции виниловых пластинок в цифровом мире. Мы хотим сделать громче и продвигать виниловые пластинки как современный способ потребления музыки.
                    </Card.Text>
                </Card.ImgOverlay>
                </Card>
        </div>
    );
};


// const BigPanel = styled.div`
//     position: flex;
//     width: 1000px;
//     height: 500px;
//     margin-left: 25%;
//     border-radius: 25px;
//     background-image: url(../Pictures/BigPanel.jpg)
    
// `;

// const PanelText = styled.h1`
//     top: 30px;
//     margin-left: 25px;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 42px;
//     line-height: 108px;
// `;