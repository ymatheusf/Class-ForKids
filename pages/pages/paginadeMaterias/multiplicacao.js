import React from 'react';
import {
    KeyboardView,
    Container, 
    ButtonSubmit,
    TextButton,
} from './stylesMulti'
import {Text} from 'react-native';

export default function Preload(){
    return (
        <KeyboardView>
        <Container>
        <Text>
        Na matemática, a multiplicação é uma forma simples de se adicionar uma quantidade finita de números iguais.
         O resultado da multiplicação de dois números é chamado produto. Ao lado da adição, da divisão e da subtração
        , a multiplicação é uma das quatro operações fundamentais da aritmética.
        </Text>
        </Container>
        </KeyboardView>
    )
}
