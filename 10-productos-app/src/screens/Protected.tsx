import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../context/Auth/AuthContext';

export const Protected = () => {

  const { user, token, logOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected</Text>
      <Button
        title="Logout"
        color="#5856D6"
        onPress={logOut}
      />

      <Text style={styles.userInfo}>{JSON.stringify(user, null, 3)}</Text>
      <Text style={styles.userInfo}>{JSON.stringify(token, null, 3)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black'
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black'
  }
});