import React from 'react';
// import { useNavigation } from '@react-navigation/core';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> { }

export const Pagina2Screen = ({ navigation }: Props) => {

    // const navigator = useNavigation();

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                <Icon name="document-outline" size={30} color='black' />
                Página 2
            </Text>

            <Button
                title="Ir página 3"
                // onPress={() => navigator.navigate('Pagina3Screen')}
                onPress={() => navigation.navigate('Pagina3Screen')}
            />
        </View>
    )
}