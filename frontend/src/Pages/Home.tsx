import React from "react";
import { Navigation } from "../Components/Navbar";
import { styled } from "@linaria/react";
import { MainPanel } from "../Components/MainPanel";
import { MainMenu } from "../Components/MainMenu";


export const Home: React.FC = () => {



    return (
        <StyledDiv>
           <Navigation />
           <MainMenu />
           <MainPanel />
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    background-color: black
`
