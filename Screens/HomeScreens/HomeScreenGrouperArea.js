import React from 'react';
import { View, Animated } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import HomeScreenGrouperButton from './HomeScreenGrouperButton';

class HomeScreenGrouperArea extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Animated.View 
                style={{
                    ...this.props.style,
                    height: this.props.theme.homeHGrouperAreaHeight, 
                    justifyContent: "space-around",
                    alignItems: "stretch",
                    padding: 20
                }}>
                <HomeScreenGrouperButton
                    text="GIGA Limão"
                    iconName="business"
                />
                <HomeScreenGrouperButton
                    text="Atacado"
                    iconName="bookmark"
                />
                <HomeScreenGrouperButton
                    text="Todas Categorias"
                    iconName="shopping-cart"
                />
            </Animated.View>
        )
    }
}

export default withTheme(HomeScreenGrouperArea)