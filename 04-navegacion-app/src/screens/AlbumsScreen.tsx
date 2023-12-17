import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';

export const AlbumsScreen = () => {

    const { authState, logOut } = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                AlbumsScreen
            </Text>

            {
                isLoggedIn && <Button title="Sign Out" onPress={logOut} />
            }
        </View>
    )
}