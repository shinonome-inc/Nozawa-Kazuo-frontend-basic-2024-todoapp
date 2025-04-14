import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";
import pencil from "../../../assets/svg/pencil.svg";

export const EditButton = () => {
    return (
        <StyledButton onClick= {() => console.log('click')}>
            <img src={pencil}/>
        </StyledButton>)
        }

const StyledButton = styled.button`
    width: 20px;
    height: 20px;
    display: flex; /*イラストを枠の真ん中に置く*/
    border: none;
    justify-content: center;
    align-items: center;
    background-color: transparent;/* 透明にすることで背景が崩れないようにする */  
    &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 50%;/* 正方形を円にすることが出来る */
    }

`;