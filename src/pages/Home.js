import React, {useState} from "react";

import {Alert, View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';

//Função Home
export default function Home(){
    const [valor1, setValor1] = useState(Number);
    const [valor2, setValor2] = useState(Number);
    const [resultado, setResultado] = useState('');

    function CalcularTotal(){
        const v1 = parseFloat(valor1);
        const v2 = parseFloat(valor2);

        setResultado((v1 + v2).toString());
    }

    return(
        <View style={styles.container}>
            <Image style={{width: 100, height: 100, borderRadius:50, resizeMode: 'stretch'}} source={{uri: 'https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844_960_720.png'}}/>
            <Text style={styles.titulo}>Projeto Soma</Text>

            <TextInput 
            style={styles.campo}
            placeholder="Digite um valor"
            onChangeText={setValor1}
            value={valor1}
            />
            <TextInput 
            style={styles.campo} 
            placeholder="Digite um outro valor"
            onChangeText={setValor2}
            value={valor2}/>

            <TextInput 
            style={styles.campo}
            placeholder="Resultado"
            readOnly
            value={resultado}
            />

            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5196A6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 40
    },

    campo: {
        backgroundColor: '#F2F0EB',
        fontSize: 18,
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },

    botao: {
        backgroundColor: '#A63C3C',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },

    botaoTexto: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },

    subTitle: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 40
    }
})