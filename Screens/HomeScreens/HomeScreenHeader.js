import React from 'react';
import { StyleSheet, ScrollView, View, Text, Animated } from 'react-native';
import { withTheme, Title, Surface, IconButton, TouchableRipple, Subheading, Paragraph, Headline } from "react-native-paper";



class HomeScreenHeader extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let {showGrouperFilter} = this.props;
        return (
            <Surface style={{elevation: 0}}>
                <View
                    style={{
                        flexDirection: "row",
                        height: 80,
                        paddingTop: 20,
                        backgroundColor: this.props.theme.colors.accent,
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Animated.View
                        style={{
                            flex: 1,
                            top:30,
                            color: this.props.theme.colors.white,
                            position: "absolute",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: this.props.scrollPostionY.interpolate(
                                {
                                    inputRange: [0, this.props.theme.homeHGrouperAreaHeight * 0.75],
                                    outputRange: [1, 0],
                                    extrapolate: "clamp"
                                }
                            ),
                            transform: [
                                {
                                    translateY: this.props.scrollPostionY.interpolate(
                                        {
                                            inputRange: [0, this.props.theme.homeHGrouperAreaHeight * 0.75],
                                            outputRange: [0, -30],
                                            extrapolate: "clamp"
                                        }
                                    )
                                }
                            ]
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
                    </Animated.View>
                    <Animated.View
                        style={{
                            flex: 1,
                            opacity: this.props.scrollPostionY.interpolate(
                                {
                                    inputRange: [this.props.theme.homeHGrouperAreaHeight * 0.75, this.props.theme.homeHGrouperAreaHeight],
                                    outputRange: [0, 1],
                                    extrapolate: "clamp"
                                }
                            ),
                            transform: [
                                {
                                    translateY: this.props.scrollPostionY.interpolate(
                                        {
                                            inputRange: [this.props.theme.homeHGrouperAreaHeight * 0.75, this.props.theme.homeHGrouperAreaHeight],
                                            outputRange: [40, 0],
                                            extrapolate: "clamp"
                                        }
                                    )
                                }
                            ] 
                        }}
                    >
                        <TouchableRipple
                            onPress={this.props.showGrouperFilter}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <IconButton
                                    color = {this.props.theme.colors.white}
                                    icon="filter-list"
                                />
                                <View
                                    style={{
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <Title
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            color: this.props.theme.colors.white
                                        }}
                                    >
                                        GIGA Limão
                                    </Title>
                                    <View
                                        style={{
                                            margin: 0,
                                            padding: 0,
                                            flexDirection: "row"
                                        }}
                                    >
                                        <Paragraph
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                color: this.props.theme.colors.white
                                            }}
                                        >
                                            Atacado
                                        </Paragraph>
                                        <Paragraph
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                color: this.props.theme.colors.white
                                            }}
                                        >
                                            Todas Categorias
                                        </Paragraph>
                                    </View>
                                </View>
                            </View> 
                        </TouchableRipple>
                    </Animated.View>
                    <TouchableRipple
                        onPress={() => console.log("Pressed")}
                    >
                        <IconButton 
                            color = {this.props.theme.colors.white}
                            icon="account-circle"
                        />
                    </TouchableRipple>
                </View>
            </Surface>
        );
    }
}


export default withTheme(HomeScreenHeader)