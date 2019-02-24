import React from 'react';
import { View, Animated } from 'react-native';
import { withTheme } from 'react-native-paper';
import HomeScreenContentAreaHeader from './HomeScreenContentAreaHeader';
import { AnimatedRegion } from 'react-native-maps';

class HomeScreenContentArea extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { theme } = this.props;

        return (
            <View>
                <HomeScreenContentAreaHeader
                    title={this.props.title}
                    option={this.props.option}
                    optionIconName={this.props.optionIconName}
                    scrollPostionY={this.props.scrollPostionY }
                />
                <View
                    style={{
                        backgroundColor: theme.colors.background,
                        flex: 1,
                        minHeight: 1000,
                        padding: 10,
                    }}
                >
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default withTheme(HomeScreenContentArea)