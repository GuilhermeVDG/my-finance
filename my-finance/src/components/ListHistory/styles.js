import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: 2px 2px rgba(0,0,0,0.30);
  background-color: rgba(0,0,0,0.02);
`;

export const Type = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  background-color: ${props => props.type === 'receive' ? '#008037' : '#c62c35'};
  flex-direction: row;
  padding: 3px;
  padding-right: 8px;
  border-radius: 6px;
`;

export const TypeText = styled.Text`
  color: #fff;
  font-style: italic;
  font-size: 16px;
`;

export const ValueText = styled.Text`
  color: #000000;
  font-size: 22px;
  font-weight: bold;
`;