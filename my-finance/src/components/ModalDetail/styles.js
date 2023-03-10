import styled from "styled-components/native";



export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
`;

export const Content = styled.View`
  height: 40%;
  width: 90%;
  background-color: #ddd;
  border-width: 1px;
  border-color: #000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonClose = styled.TouchableOpacity`
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: #ff3f4b;
  border-radius: 7px;
  width: 90%;
`;

export const ButtonCloseText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonDelete = styled.TouchableOpacity`
  margin-top: 10px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  width: 90%;
  background-color: #2d2d2e;
`;

export const ButtonDeleteText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;