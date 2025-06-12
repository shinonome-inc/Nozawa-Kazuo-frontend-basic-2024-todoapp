// 例）isActive の Props に応じて文字色を変化させたい場合
import styled from "styled-components";
import { useAlertHandlerContext } from "../../contexts/alert_handler";
export const Alert = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  return (
    <StyledWrapper active={AlertHandlerContext.visible}>
      {AlertHandlerContext.errorText}
    </StyledWrapper>
  );
};

//ここにアニメーション機能と上に重なるように表示される機能を加える
const StyledWrapper = styled.div`
  dislay: flex;
  padding: 10px 20px;
  align-items: center;
  transform: ${(props) =>
    props.visible ? "translate(-50%,40%)" : "translate(-50%,0%)"};
  
`;
