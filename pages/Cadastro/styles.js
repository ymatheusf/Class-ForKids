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


export const Title = styled.Text`
    color: #FFF;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
`;

export const Input = styled.TextInput`
    border: 2px solid #12E6C8;
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #000;
    font-size: 20px;
    border-radius:9px;
    width: 90%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #509bca;
    border-radius: 9px;
    width: 90%;
    padding: 10px;
    align-items:center;
    margin: 20px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size:20px;
    font-weight:bold;
`; 
 