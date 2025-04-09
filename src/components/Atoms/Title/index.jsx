import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint.js";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";

export const Title = ()=>{
    return (
    <StyledText>SIMPLE TODO APP</StyledText>
    );
};


const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.M}
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: ${FONTFAMILY.ROBOTO};
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
  ${TEXT.L} 
  }
`;