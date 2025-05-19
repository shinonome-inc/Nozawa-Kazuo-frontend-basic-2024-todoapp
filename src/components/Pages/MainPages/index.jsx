import React from "react";
import styled from "styled-components";
import TodoCard from "../../Organisms/TodoCard/index.jsx";
import {Title} from "../../Atoms/Title/index.jsx"

export default function MainPages() {
    return(
        <StyledWrapper>
            <TitleWrapper>
                <Title/>
            </TitleWrapper>
            <TodoCard/>
        </StyledWrapper>
        
    )

}

const StyledWrapper = styled.div`
    padding: 60px 20px 20px 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    @media (max-width: 320px) {
        padding: 20px;
    }

`;

const TitleWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    


`
    

