import React from 'react';
import styled from 'styled-components';
import { Container, H3 } from '../GlobalStyles';

const HeaderContainer = styled(Container)`
        background-color: #1D1F27;
        ${Container}
    `;

    const HeaderText = styled(H3)`
        color: white;
        ${H3}
    `;

export default function Header() {

    


    return (
        <HeaderContainer>
            <HeaderText>COIN DEV</HeaderText>
        </HeaderContainer>
    )
}
