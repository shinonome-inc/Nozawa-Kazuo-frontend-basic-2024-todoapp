// 例）isActive の Props に応じて文字色を変化させたい場合
import styled from "styled-components";

export const Alert = () => {
  return (
    <StyledWrapper>
        <AlertWrapper isActive={true}> hogehoge </AlertWrapper>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  opacity: ${(props) => props.isActive ? 0 : 1}
  padding: 10px 20px;
  
`
const AlertWrapper = styled.div`

`