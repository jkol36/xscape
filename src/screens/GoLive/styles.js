import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const StreamButton = styled.TouchableOpacity`
  margin-vertical: 20px;
  width: 200px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  background-color: #764abc;
  margin-left: ${Dimensions.get('window').width / 4}
`;


export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;