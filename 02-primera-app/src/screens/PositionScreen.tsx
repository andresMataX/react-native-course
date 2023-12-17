import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const PositionScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaMorada} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 10,
        top: 10
    },
    cajaNaranja: {
        // width: 100,
        // height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        ...StyleSheet.absoluteFillObject
        // position: 'absolute',
        // bottom: 10,
        // right: 10
    }
});