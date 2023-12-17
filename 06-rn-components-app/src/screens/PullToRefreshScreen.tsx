import React, { useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState(false);

  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');

      setRefreshing(false);

      setData('Hola Mundo');
    }, 3000);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={30}
          progressBackgroundColor={colors.primary}
          colors={['white', 'red', 'orange']} />
      } >
      <View>
        <HeaderTitle title="Pull To Refresh" />

        {
          data && <HeaderTitle title={data} />
        }
      </View>
    </ScrollView>
  )
}