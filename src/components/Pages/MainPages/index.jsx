import React from "react";
import styled from "styled-components";
import TodoCard from "../../Organisms/TodoCard/index";
import {Title} from "../../Atoms/Title/index"

export default function MainPages() {
    return(
        <StyledWrapper>
            <Title/>
            <TodoCardWrapper>
            <TodoCard/>
            </TodoCardWrapper>
        </StyledWrapper>
        
    )

}

const StyledWrapper = styled.div`
    padding: 60px 20px 20px 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 320px) {
        padding: 20px;
    }

;`
const TodoCardWrapper = styled.div`
    width: 500px;
    max-width: 100%;


`