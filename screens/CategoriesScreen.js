import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', 
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return (
       <FlatList 
        keyExtractor={item => item.id}
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})

export default CategoriesScreen;