import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='go to meal detail' onPress={()=> {
                props.navigation.navigate('MealDetail')
            }}/>
            <Button title='go back' onPress={()=> {
                props.navigation.goBack()
            }}/>
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CategoryMealsScreen;