import React from "react";
import styled from "styled-components/native";

import W from "../../components/Wrapper";

const HomeTitle = styled.Text``;

export default function HomeScreen(props) {
  return (
    <W>
      <HomeTitle>Hej</HomeTitle>
      <HomeTitle onPress={() => props.navigation.navigate("Settings")}>
        To settings
      </HomeTitle>
    </W>
  );
}
