import React from "react";
import styled from "styled-components";



export const Example = () => {
  return <StyledText>This is example.</StyledText>;
};

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.S}
`;
