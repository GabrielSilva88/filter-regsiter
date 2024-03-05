/**
 *  # Installing styled-components biblioteca
 *      npm install styled-components
 * 
 */


import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background-color:'#F0F4FF';
`;
// Background, AreaInput, Conteiner, Input 
export const Conteiner = styled.KeyboardAvoidingView`
flex: 1;
justify-content: center;
align-items: center;
`;

export const Logo = styled.Image`
margin-bottom: 25px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: #FFF;
width: 90%;
font-size: 17px;
padding: 10px;
border-radius: 10px;
color: #121212;
margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
width: 90%;
height: 45px;
border-radius: 8px;
background-color: #3b3bdf;
margin-top: 10px;
justify-content: center;
align-items: center;
`;

export const SubmitText = styled.Text`
font-size: 20px;
color: #FFF;
`;

export const Link = styled.TouchableOpacity`
margin-top: 10px;
margin-bottom: 10px;
`;
export const LinkText = styled.Text`
color: #121212;
`;