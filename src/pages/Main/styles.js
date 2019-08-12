import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
export const Container = styled.View`
  flex:1;
  padding:30px;


`;
export const Form = styled.View`
  flex-direction : row;
  padding-bottom:20px;
  border-bottom-width:1px;
  border-color:#eee;

`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: "#999" })`
  flex:1;
  height:40px;
  background-color:#Eee;
  border-radius:4px;
  padding:0 15px;
  border:1px solid #Eee;
`;

export const SubmitButton = styled(RectButton)`

justify-content:center;
align-items:center;
background:#7159c1;
border-radius:4px;
margin-left:10px;
padding:0 12px;
opacity:${props => props.load ? 0.7 : 1}

`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
margin-top:20px;
`;


export const Users = styled.View`
align-items:center;
margin : 0 20px 20px;


`;

export const Avatar = styled.Image`
width:64px;
height:64px;
border-radius:32px;
background:#eee;

`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2
})`
font-size:13px;
color:#999;
font-weight:bold;
margin-top:4px;
text-align:center;
`;

export const ProfileButton = styled(RectButton)`
margin-top:10px;
align-self:stretch;
border-radius:4px;
background:#7159c1;
justify-content:center;
align-items:center;
height:36px;

`;

export const ProfileButtonTexto = styled.Text`
font-size:14px;
font-weight:bold;
color:#fff;
text-transform:uppercase
`;

export const Name = styled.Text`
font-size:24px;
color:#333;
font-weight:bold;
margin-top:4px;
text-align:center;
`;

