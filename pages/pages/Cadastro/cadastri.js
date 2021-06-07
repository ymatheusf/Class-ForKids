import React from 'react';
import {
    KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit,
    TextButton
} from './styles';



export default function Cadastro(){
    return (
        <KeyboardView>
        <Container>
        <Title>Cadastro</Title>
        <Input 
            placeholderTextColor='#000'
            placeholder='Nome'
        />
        <Input 
            placeholder='Email'
            placeholderTextColor='#000'
            secureTextEntry
        />
        <Input 
            placeholder='Senha'
            placeholderTextColor='#000'
            secureTextEntry
        />
        <ButtonSubmit>
        <TextButton>
            Cadastrar
        </TextButton>
        </ButtonSubmit>
        </Container>
        </KeyboardView>
    )
}