import React from 'react'
import { styled } from '@linaria/react';

export const MainMenu: React.FC = () => {

    return (
        <StyledDiv>
            Основной раздел
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    margin-top: 0.5rem;
    margin-left: 20rem;
    line-height: 100%
`