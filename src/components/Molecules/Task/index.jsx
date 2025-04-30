import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";
import {CheckBox} from "../../../components/Atoms/CheckBox/index.jsx"
import Input from "../../../components/Atoms/Input/index.jsx"
import {EditButton} from "../../../components/Atoms/Editbutton/index.jsx"
export default function Task({onTasknameChanege,onTaskComplete,taskName,defaultEditing}){
  const [isEditing,setIsEditing] = useState(defaultEditing);

  const onEditComplete = (value) =>{
    setIsEditing(false)
    onTaskNameChange(value)
  }
  const onEditButtonClick = () =>{
    setIsEditing(true)
  }


  return(
    <StyledWrapper>
        <StyledCheckbox>
          <CheckBox onClick={onTaskComplete}/>
        </StyledCheckbox>
        { isEditing
        ?(<Input onEditComplete = {onEditComplete} defaultValue = {taskName}/>)
        :
        (<StyledNameAndButtonWrapper>
          <Styledtaskname>
            {taskName}
          </Styledtaskname>
          <StyledEditButtonWrapper>
            <EditButton onClick = {onEditButtonClick}/>
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>)
        }
    </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  gap: 10px;
  width: 100%;

`
const StyledCheckbox = styled.div`
  flex-shrink: 0;

`
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  flex: 1 1 0;
  gap: 10px;
`
const Styledtaskname = styled.div`
  
  width: 100%;
  ${TEXT.S}
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};

`
const StyledEditButtonWrapper = styled.div`
  flex-shrink: 0;
  
 
`