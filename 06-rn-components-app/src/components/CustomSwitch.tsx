import React, { useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useContext } from 'react';

interface Props {
  isOn: boolean
  onChange: (isEnable: boolean) => void
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

  const [isEnabled, setIsEnabled] = useState(isOn);

  const { theme: { colors } } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: "#D9D9DB", true: colors.primary }}
      thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}