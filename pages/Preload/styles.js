import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #00BFFF;
`; 

export const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    padding-bottom:30px;
    width: 90%;
`;


export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #509bca;
    border-radius: 9px;
    width: 90%;
    padding: 20px;
    align-items:center;
    margin: 20px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size:20px;
    font-weight:bold;
`; 
 