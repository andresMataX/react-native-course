import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContex';
import { styles, colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsScreen = () => {

    // const insets = useSafeAreaInsets();

    const { authState } = useContext(AuthContext);

    return (
        <View style={{ paddingHorizontal: 20, flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={styles.title}>
                Settings
            </Text>

            <Text style={{ color: 'black' }}>
                {JSON.stringify(authState, null, 4)}
            </Text>

            {
                authState.favoriteIcon && (
                    <Icon
                        name={authState.favoriteIcon}
                        size={150}
                        color={colors.primary}
                    />
                )
            }
        </View>
    )
}