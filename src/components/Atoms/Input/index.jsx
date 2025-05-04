import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";


export default function Inputcomponent({ onEditComplete, defaultValue }) {
  const inputRef = useRef();

  const handleBlur = () => {
    const value = inputRef.current.value;
    if (onEditComplete) {
      onEditComplete(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = inputRef.current.value;
      if (onEditComplete) {
        onEditComplete(value);
      }
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Styledwrapper>
      <Styledinput
        defaultValue={defaultValue}
        ref={inputRef}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </Styledwrapper>
  );
}
const Styledwrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 4px;
  border-radius: 2px;
  border: none;
  background-color: ${COLOR.BLACK};
`;
const Styledinput = styled.input`
  align-items: flex-start;
  height: 20px;
  width: 100%;
  background-color: transparent;
  border: none;
  ${TEXT.S}
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};

  &:focus {
    border: none;
    outline: none;
  }
`;