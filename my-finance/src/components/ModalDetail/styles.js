import styled from "styled-components/native";



export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
`;

export const Content = styled.View`
  height: 50%;
  width: 90%;
  background-color: #ddd;
  border-width: 1px;
  border-color: #000;
  border-radius: 4px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;