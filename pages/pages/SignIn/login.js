import React from 'react';
import {
    KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit,
    TextButton
} from './styles';




export default function SignIn(){
    return (
        <KeyboardView>
        <Container>
        <Title>Login</Title>
        <Input 
            placeholderTextColor='#000'
            placeholder='E-mail'
        />
        <Input 
            placeholder='Senha'
            placeholderTextColor='#000'
            secureTextEntry
        />
        <ButtonSubmit>
        <TextButton>
            Entrar
        </TextButton>
        </ButtonSubmit>
        <ButtonSubmit>
        <TextButton>
            Cadastrar
        </TextButton>
        </ButtonSubmit>
        </Container>
        </KeyboardView>
    )
}