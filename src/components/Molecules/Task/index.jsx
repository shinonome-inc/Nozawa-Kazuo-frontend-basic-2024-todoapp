import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";
import { CheckBox } from "../../../components/Atoms/CheckBox/index.jsx";
import Input from "../../../components/Atoms/Input/index.jsx";
import { EditButton } from "../../../components/Atoms/Editbutton/index.jsx";
export default function Task({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultEditing = false,
}) {
  const [isEditing, setIsEditing] = useState(defaultEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
        <CheckBox onClick={onTaskComplete} />
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <EditButton onClick={onEditButtonClick} />
        
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  gap: 10px;
  width: 100%;
  

`;


const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
`;



const StyledTaskName = styled.div`
  
  width: 100%;
  ${TEXT.S}
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
`;