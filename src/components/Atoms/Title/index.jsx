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
  ${TEXT.L}
  font-family: ${FONTFAMILY.ROBOTO};
  font-weight: 500;
  letter-spacing: 0;
  gap: 10px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
  ${TEXT.M} 
  font-family: ${FONTFAMILY.NOTO_SANS};
  }
`;