import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'


import HeaderButton from '../components/HeaderButton'

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Filter Screen</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu' 
                    iconName='ios-menu' 
                    onPress={()=>{
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
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

export default FiltersScreen;