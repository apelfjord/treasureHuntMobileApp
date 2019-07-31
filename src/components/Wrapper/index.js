import React from "react";
import styled from "styled-components/native";

const WrapperContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Wrapper(props) {
    return <WrapperContainer>{props.children}</WrapperContainer>;
}
