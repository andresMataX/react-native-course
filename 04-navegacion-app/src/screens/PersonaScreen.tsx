import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContex';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

// interface RouteParams {
//     id: number
//     nombre: string
// }

export const PersonaScreen = ({ route, navigation }: Props) => {

    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {

        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    const { changeUsername } = useContext(AuthContext);

    useEffect(() => {
        changeUsername(params.nombre);
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}