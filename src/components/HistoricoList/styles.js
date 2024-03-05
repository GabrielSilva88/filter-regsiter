import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #F0F3FF;
    border-radius: 5px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 14px;
    padding: 15px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const TipoText = styled.Text`
    color: aliceblue;
    font-size: 15px;
    font-style: italic;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo ==='despesa' ? '#c62c36' : '#049301'};
    padding-bottom: 4px;
    padding-left: 4px;
    padding-top: 8px;
    padding-right: 8px;
    border-radius: 4px;
`;

export const ValorText = styled.Text`
    color: #121212;
    font-size: 22px;
`;