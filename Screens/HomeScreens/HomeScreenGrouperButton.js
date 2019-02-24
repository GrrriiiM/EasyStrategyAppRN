import React from 'react';
import { View } from 'react-native'
import { TouchableRipple, IconButton, Text, withTheme } from "react-native-paper";


class HomeScreenGrouperButton extends React.Component {
    render() {
        const { theme } = this.props;
        return (
            <TouchableRipple
                onPress={() => console.log('Pressed')}
                style={{
                    backgroundColor: theme.colors.primary,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <IconButton 
                        color={theme.colors.white}
                        icon={this.props.iconName}
                    />
                    <Text
                        style={{
                            color: theme.colors.white
                        }}
                    >
                        {this.props.text}
                    </Text>
                </View>
            </TouchableRipple>
        )
    }
}

export default withTheme(HomeScreenGrouperButton)