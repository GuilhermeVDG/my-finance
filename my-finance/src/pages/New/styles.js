import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #131313;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000000'
})`
  background-color: #ddd;
  width: 90%;
  font-size: 17px;
  margin-bottom: 17px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 7px;
`;

export const ButtonSelect = styled.TouchableOpacity`
  background-color: #ddd;
  width: 90%;
  margin-top: 10px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  margin-bottom: 17px;
`;

export const TextSelect = styled.Text`
  color: #000000;
  font-size: 17px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: ${props => props.type === 'expense' ? '#c62c35' : '#008037'};
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  height: 45px;
  margin-top: 10px;
  width: 90%;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;