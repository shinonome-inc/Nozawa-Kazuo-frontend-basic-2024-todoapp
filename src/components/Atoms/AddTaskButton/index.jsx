import Plus from "../../../assets/svg/plus.svg"
import styled from "styled-components"
import TEXT from "../../../variables/texts.js"
import FONTFAMILY from "../../../variables/font_family.js"
import COLOR from "../../../variables/color.js"

export const AddTaskButton = () =>{
    return(
        <StyledButton>
            <StyledImage src={Plus}/>
            <StyledText>タスクを追加</StyledText>
        </StyledButton>
    )

}

const StyledButton = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    ${TEXT.S}
    font-family: ${FONTFAMILY.NOTO_SANS};
    color: ${COLOR.GREEN};

`
const StyledImage = styled.img`
    width: 20px;
    height: 20px;


`
const StyledText = styled.p`
    margin: 0;

`
