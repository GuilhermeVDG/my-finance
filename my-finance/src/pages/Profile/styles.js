import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #131313;
  align-items: center;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 25px;
`;

export const Email = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const New = styled.TouchableOpacity`
  background-color: #008037;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 7px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
  background-color: #c62c35;
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const LogoutText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;