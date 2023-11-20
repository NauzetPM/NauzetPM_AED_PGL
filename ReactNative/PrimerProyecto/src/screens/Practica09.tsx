import { Button, GestureResponderEvent, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


type Props = {
}
type aling = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
type justify = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';
const Practica09 = (props: Props) => {
    const [alignItems, setalignItems] = useState<aling>("center");
    const [justifyContent, setjustifyContent] = useState<justify>("center");
    return (
            <View style={{ flex:1,backgroundColor:"white"}}>
                <TextInput onChangeText={(text) => {
                    if (text == 'center' || text == 'flex-end' || text == 'flex-start' || text == 'space-around' || text == 'space-between' || text == 'space-evenly') {
                        setjustifyContent(text);
                    }
                }} />
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Button title="center" onPress={() => { setalignItems("center") }} />
                    <Button title="flex-end" onPress={() => { setalignItems("flex-end") }} />
                    <Button title="flex-start" onPress={() => { setalignItems("flex-start") }} />
                    <Button title="stretch" onPress={() => { setalignItems("stretch") }} />
                </View>
                <View style={{ flexDirection: 'column', flex: 1,margin:5 }}>
                    <View style={{ alignItems: alignItems, flexDirection: 'column', justifyContent: justifyContent, flex: 1, backgroundColor: "lightgrey" }}>
                        <Image
                            source={{
                                uri: 'https://img.freepik.com/vector-premium/logotipo-estrella-simple-moderno_535345-2471.jpg?w=740',
                            }}
                            style={{ width: 50, height: 50 }} />
                        <Image
                            source={{
                                uri: 'https://img.freepik.com/vector-gratis/vector-forma-geometrica-pentagono-azul_53876-175075.jpg?w=740&t=st=1692203592~exp=1692204192~hmac=b6f63c07a79e2ff41719578b178e004f851718b3b467bf1976878d8b800b9201',
                            }}
                            style={{ width: 50, height: 50 }} />
                        <Image
                            source={{
                                uri: 'https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?w=1060&t=st=1692203785~exp=1692204385~hmac=ce41256e62eb2af8e8e813b44cbfb4bed697c698b2902ffdb0cb8f502df86d1d',
                            }}
                            style={{ width: 50, height: 50 }} />
                    </View>
                </View>
            </View>
    )
}

export default Practica09
