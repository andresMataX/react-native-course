import React from 'react';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: (width > 769) ? 'permanent' : 'front'
            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" options={{ headerShown: false }} component={Tabs} />
            <Drawer.Screen name="SettingScreen" options={{ headerShown: false }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>

            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menú */}
            <View
                style={styles.menuContainer}
            >
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Icon
                        name="compass-outline"
                        size={30}
                        color='black'
                    />
                    <Text
                        style={{
                            ...styles.menuText,
                            marginStart: 10
                        }}>
                        Navegación
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('SettingScreen')}
                >
                    <Icon
                        name="settings-outline"
                        size={30}
                        color='black'
                    />
                    <Text
                        style={{
                            ...styles.menuText,
                            marginStart: 10
                        }}>
                        Ajustes
                    </Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}