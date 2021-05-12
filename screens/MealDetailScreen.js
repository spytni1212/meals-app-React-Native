import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    console.log(selectedMeal)

    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
            <Text>{selectedMeal.title}</Text>
            <Button title='go to main' onPress={()=> {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedMeal.title
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

export default MealDetailScreen;