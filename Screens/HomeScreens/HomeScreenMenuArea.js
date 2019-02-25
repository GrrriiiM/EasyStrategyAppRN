import React from 'react';
import { View, Animated, Easing, ScrollView } from 'react-native';
import { withTheme, Card, Text, Headline, Surface, TouchableRipple, IconButton } from 'react-native-paper';
import HomeScreenMenuOptionMenu from './HomeScreenMenuOptionMenu';


class HomeScreenMenuArea extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            button1Selected: true,
            button2Selected: false,
            button3Selected: false,
            button4Selected: false,
            showAnimation: new Animated.Value(0)
        }
    }
    
    maxTopPosition = (this.props.theme.screen.height * -1) - 50;
    minTopPosition = -150;

    openMenu() {
        Animated.timing(
            this.state.showAnimation,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }
        ).start()
    }

    closeMenu() {
        Animated.timing(
            this.state.showAnimation,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
                delay: 0
            }
        ).start()
    }

    render() {
        const { theme } = this.props;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    transform: [
                        { translateY: this.state.showAnimation.interpolate({
                            inputRange: [0.2, 0.8],
                            outputRange: [this.minTopPosition, this.maxTopPosition],
                            extrapolate: "clamp"
                        }) }
                    ]
                }}
            >
                <Animated.View
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: this.props.theme.screen.height + 60,
                        backgroundColor: "#000000",
                        transform: [
                            {
                                translateY: this.state.showAnimation.interpolate({
                                    inputRange: [0, 0.1],
                                    outputRange: [0, this.maxTopPosition],
                                    extrapolate: "clamp"
                                })
                            }
                        ],
                        opacity: this.state.showAnimation.interpolate({
                            inputRange: [0, 0.6],
                            outputRange: [0, 0.8],
                            extrapolate: "clamp"
                        })
                    }}
                />
                <Surface
                    style={{
                        zIndex: 1,
                        elevation: 1,
                        borderTopLeftRadius: theme.cornerRadius,
                        borderTopRightRadius: theme.cornerRadius,
                        backgroundColor: theme.colors.accent,
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-start"
                        }}
                    >
                        <HomeScreenMenuOptionMenu
                            style={{
                                flex:1
                            }}
                            selected={this.state.button1Selected}
                            text="Vendas"
                            iconName="local-atm"
                            onPress={(() => {
                                this.closeMenu();
                                this.setState({
                                    button1Selected: true,
                                    button2Selected: false,
                                    button3Selected: false,
                                    button4Selected: false,
                                })
                            }).bind(this)}
                        />
                        <HomeScreenMenuOptionMenu
                            style={{
                                flex:1
                            }}
                            selected={this.state.button2Selected}
                            text="Produtos"
                            iconName="shopping-basket"
                        />
                        <HomeScreenMenuOptionMenu
                            style={{
                                flex:1
                            }}
                            selected={this.state.button3Selected}
                            text="Assistente"
                            iconName="forum"
                        />
                        <HomeScreenMenuOptionMenu
                            style={{
                                flex:1
                            }}
                            text="Menu"
                            iconName="view-headline"
                            selected={this.state.button4Selected}
                            onPress={(() => {
                                this.openMenu();
                                this.setState({
                                    button1Selected: false,
                                    button2Selected: false,
                                    button3Selected: false,
                                    button4Selected: true,
                                })
                            }).bind(this)}
                        />
                    </View> 
                    <Animated.View
                        style={{
                            height: this.props.theme.screen.height,
                            transform: [
                                {
                                    translateY: this.state.showAnimation.interpolate({
                                        inputRange: [0.4, 1],
                                        outputRange: [700, 0],
                                        extrapolate: "clamp"
                                    })
                                }
                            ],
                            opacity: this.state.showAnimation.interpolate({
                                inputRange: [0.4, 1],
                                outputRange: [0, 1],
                                extrapolate: "clamp"
                            })
                        }}
                    >
                        <View 
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <IconButton
                                color = {this.props.theme.colors.white}
                                size = {40}
                                icon="dashboard"
                                style={{
                                    width: 40
                                }}
                            />
                            <Headline
                                    style = {{
                                        color: this.props.theme.colors.white,
                                        flex: 1
                                    }}
                                >
                                    EasyStrategy
                            </Headline>
                        </View>
                        <ScrollView>
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                {
                                    [...Array(20).keys()].map((index) => 
                                        <Headline 
                                            key={index}
                                            style={{
                                                color: "#FFFFFF", 
                                                paddingTop: 10
                                            }}
                                        >
                                            Menu Opcao EasyStrategy
                                        </Headline>
                                    )
                                }
                            </View>
                        </ScrollView>
                    </Animated.View>     
                </Surface>
            </Animated.View>
        )
    }
}


export default withTheme(HomeScreenMenuArea)