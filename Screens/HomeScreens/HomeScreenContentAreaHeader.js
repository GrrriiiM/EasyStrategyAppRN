import React from 'react';
import { View, Animated } from 'react-native';
import { withTheme, Surface, TouchableRipple, Title, IconButton } from 'react-native-paper';


class HomeScreenContentAreaHeader extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { theme } = this.props;

        return (
            <Animated.View
                style={{
                    backgroundColor: this.props.theme.colors.accent,
                    zIndex: 1,
                    transform: [
                        { 
                            translateY: this.props.scrollPostionY.interpolate(
                                {
                                    inputRange: [this.props.theme.homeHGrouperAreaHeight, 9999999],
                                    outputRange: [0, 9999999],
                                    extrapolate: "clamp"
                                }
                            ) 
                        }
                    ]
                }}
            >
                <Surface
                    style={{
                        backgroundColor: theme.colors.surface,
                        elevation: 1,
                        borderTopLeftRadius: theme.cornerRadius,
                        borderTopRightRadius: theme.cornerRadius,
                        padding: theme.cornerRadius
                    }}
                >
                    <TouchableRipple                  
                        onPress={() => console.log('Pressed')}
                    >
                        <View
                            style={{
                                flexDirection: "row"
                            }}
                        >
                            <Title>
                                { this.props.title }
                            </Title>

                            <View
                                style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Title
                                    style={{
                                        padding: 0,
                                        margin: 0
                                    }}
                                >
                                    {this.props.option}
                                </Title>
                                <IconButton                        
                                    icon={this.props.optionIconName}
                                    style={{
                                        margin: 0
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableRipple>  
                </Surface>
            </Animated.View>
        )
    }
}


export default withTheme(HomeScreenContentAreaHeader)