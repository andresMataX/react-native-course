import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const { isActive, isHappy, isHungry } = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value
    })
  }

  return (
    <View>

      <HeaderTitle title="Switches" />

      <View style={{ ...styles.switchRow, backgroundColor: colors.background }}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(isEnable) => onChange(isEnable, 'isActive')} />
      </View>

      <View style={{ ...styles.switchRow, backgroundColor: colors.background }}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(isEnable) => onChange(isEnable, 'isHungry')} />
      </View>

      <View style={{ ...styles.switchRow, backgroundColor: colors.background }}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(isEnable) => onChange(isEnable, 'isHappy')} />
      </View>

      <Text style={{ ...styles.switchText, color: colors.text }}>
        {JSON.stringify(state, null, 5)}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});