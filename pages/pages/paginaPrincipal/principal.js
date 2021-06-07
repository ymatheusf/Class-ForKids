import React from 'react';
import { _Text, Title } from 'react-native';
import {
    KeyboardView,
    Container, 
    ButtonSubmit,
    TextButton,
} from './styles'


export default function Home(props){
    return (
        <KeyboardView>
        <Container>
        <TextButton>Class For kids</TextButton>
        <TextButton>Matematica</TextButton>
        <ButtonSubmit  title='multiplicacao' onPress={() => props.navigation.navigate('multipicacao', {})}/>

        <TextButton>Portugues</TextButton>
        <ButtonSubmit title='virgula' onPress={() => props.navigation.navigate('virgula', {})}/>

        
        </Container>
        </KeyboardView>
    )
}

