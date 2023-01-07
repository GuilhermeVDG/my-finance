import styled from "styled-components/native";



export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
`;

export const Content = styled.View`
  height: 125px;
  width: 90%;
  background-color: #ddd;
  border-width: 1px;
  border-color: #000;
  border-radius: 4px;
`;

export const Option = styled.TouchableOpacity`
  align-items: flex-start;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: #000;
`;

export const OptionText = styled.Text`
  font-size: 17px;
  margin: 18px;
  height: 25px;
  font-weight: bold;
  color: #000;
`;