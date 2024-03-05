import React, { useContext } from "react";
import { Container, Massage, Name, NewLink, NewText, LogoutButton, LogoutText } from "./styles"

import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";

import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const { user, signOut } = useContext(AuthContext);
    const navigation = useNavigation();
    
    return (
        <Container>
            <Header title="Meu Perfil" />

            <Massage>
                Hey, bem vindo de Volta!
            </Massage>

            <Name numberOfLines={1}>
                {user && user.name}
            </Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButton onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </Container>
    )
}