import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

export const Loading = () => {

  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text style={{ color: 'black' }}>Cargando. . .</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});