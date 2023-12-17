import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> { }

export const Pagina3Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                <Icon name="document-outline" size={30} color='black' />
                Página 3
            </Text>

            <Button
                title="Regresar"
                onPress={() => navigation.pop()}
            />

            <Button
                title="Ir al Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}