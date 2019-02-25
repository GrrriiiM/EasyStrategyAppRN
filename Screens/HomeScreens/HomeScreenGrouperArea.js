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
                    padding: 20
                }}
            >

                <View
                    style={{
                        flex: 1,
                        justifyContent: "space-around",
                        alignItems: "stretch",
                    }}
                >
                    <HomeScreenGrouperButton
                        text="GIGA Limão"
                        iconName="business"
                        onPress={(() => {
                            this.props.openGrouperArea();
                        }).bind(this)}
                    />
                    <HomeScreenGrouperButton
                        text="Atacado"
                        iconName="bookmark"
                    />
                    <HomeScreenGrouperButton
                        text="Todas Categorias"
                        iconName="shopping-cart"
                    />
                </View>
            </Animated.View>
        )
    }
}

export default withTheme(HomeScreenGrouperArea)