import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoryMealiesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
        </View>
    )
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