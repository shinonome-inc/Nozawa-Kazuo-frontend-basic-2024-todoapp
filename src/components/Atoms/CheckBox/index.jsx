import styled from "styled-components";
import CHECK from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color.js";
import React from "react";

export const CheckBox = ({ onClick }) => {
  return (
    <StyledBox onClick={onClick}>
      <StyledImg src={CHECK} alt="check" />
    </StyledBox>
  );
};

const StyledBox = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${COLOR.LIGHT_GRAY};
`;
const StyledImg = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
