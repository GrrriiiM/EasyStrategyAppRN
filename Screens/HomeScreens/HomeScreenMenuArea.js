import React from 'react';
import { View, Animated, Easing } from 'react-native';
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
            topPostion: new Animated.Value(-150)
        }
    }
    
    maxTopPosition = (this.props.theme.screen.height * -1) - 50;
    minTopPosition = -150;

    openMenu() {
        Animated.timing(
            this.state.topPostion,
            {
                toValue: this.maxTopPosition,
                duration: 350,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }
        ).start();
    }

    closeMenu() {
        Animated.timing(
            this.state.topPostion,
            {
                toValue: this.minTopPosition,
                duration: 350,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }
        ).start();
    }

    render() {
        const { theme } = this.props;

        return (
            <Animated.View
                style={{
                    transform: [
                        { translateY: this.state.topPostion }
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
                                translateY: this.state.topPostion.interpolate({
                                    inputRange: [this.minTopPosition - 1, this.minTopPosition],
                                    outputRange: [this.maxTopPosition, 0],
                                    extrapolate: "clamp"
                                })
                            }
                        ],
                        opacity: this.state.topPostion.interpolate({
                            inputRange: [this.maxTopPosition, this.minTopPosition],
                            outputRange: [0.8, 0],
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
                                    translateY: this.state.topPostion.interpolate({
                                        inputRange: [this.maxTopPosition, this.maxTopPosition/3],
                                        outputRange: [0, 500],
                                        extrapolate: "clamp"
                                    })
                                }
                            ],
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
                    </Animated.View>     
                </Surface>
            </Animated.View>
        )
    }
}


export default withTheme(HomeScreenMenuArea)