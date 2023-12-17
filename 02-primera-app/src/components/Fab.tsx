import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                ]}
                activeOpacity={0.8}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={
                // (position === 'bl')
                //     ? styles.fabLocationBL
                //     : styles.fabLocationBR
                [
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                ]
            }>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}> {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'android') ? android() : ios()
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
