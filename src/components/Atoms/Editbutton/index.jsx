import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import pencil from "../../../assets/svg/pencil.svg";

export const EditButton = (onClick) => {
  return (
    <StyledButton onClick={onClick}>{/*ここの{}にconstを使うときに処理を足すことで機能を付けられる*/}
      <img src={pencil} alt="image"/>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex; {/*イラストを枠の真ん中に置く*/}
  border: none;
  justify-content: center;
  align-items: center;
  background-color: transparent; {/* 透明にすることで背景が崩れないようにする */}
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 50%; {/* 正方形を円にすることが出来る */}
  }
`;
