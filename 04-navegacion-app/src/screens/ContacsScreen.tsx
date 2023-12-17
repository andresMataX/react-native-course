import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';

export const ContacsScreen = () => {

    const { authState, signIn } = useContext(AuthContext);

    const { isLoggedIn } = authState;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                ContacsScreen
            </Text>

            {
                !isLoggedIn && <Button title="Sign In" onPress={signIn} />
            }
        </View>
    )
}