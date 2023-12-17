import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles, colors } from '../theme/appTheme';
// import { StackScreenProps } from '@react-navigation/stack';
// import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    // Botón para menú hamburguesa
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Button
    //                 title='Menú'
    //                 onPress={() => navigation.toggleDrawer()}
    //             />
    //         )
    //     })
    // }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                <Icon name="document-outline" size={30} color='black' />
                Página 1
            </Text>

            <Button
                title="Página siguiente"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            {/* <Button
                title="Ir Persona"
                onPress={() => navigation.navigate('PersonaScreen')}
            /> */}

            {/* <Text style={{
                color: 'black',
                marginVertical: 20,
                fontSize: 20,
                textAlign: 'center'
            }}>Navegar con argumentos</Text> */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6',
                        flexDirection: 'column'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Icon
                        name="man-outline"
                        size={40}
                        color='white'
                    />
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427',
                        flexDirection: 'column'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Karen'
                    })}
                >
                    <Icon
                        name="woman-outline"
                        size={40}
                        color='white'
                    />
                    <Text style={styles.botonGrandeTexto}>Karen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}