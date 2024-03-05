import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';

import {
    Background,
    AreaInput,
    Conteiner,
    Input,
    Logo,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from './styles';

export default function SignIn() {

    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        signIn(email, password);
    }

    return (
        <Background>
            <Conteiner
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />
                <AreaInput>
                    <Input
                        placeholder='Seu E-mail'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Seu Senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.9} onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color={"#FFF"} />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }

                </SubmitButton>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma Conta</LinkText>
                </Link>
            </Conteiner>
        </Background>
    );
}