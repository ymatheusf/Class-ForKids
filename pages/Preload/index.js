import React from 'react';
import {
    KeyboardView,
    Container, 
    ButtonSubmit,
    TextButton,
} from './styles'


export default function Preload(){
    return (
        <KeyboardView>
        <Container>
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
