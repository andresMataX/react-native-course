import React from 'react';
import { FlatList, View } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {

    return (
        <View>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem item={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
                ItemSeparatorComponent={ItemSeparator} />
        </View>
    )
}