import React from 'react';
import { ScrollView, Dimensions, Animated, View, Easing } from 'react-native'
import { SafeAreaView  } from "react-navigation";
import { withTheme, Text } from 'react-native-paper';
import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenGrouperArea from './HomeScreenGrouperArea';
import HomeSalesScreen from './HomeSalesScreens/HomeSalesScreen';
import HomeScreenMenuArea from './HomeScreenMenuArea';


class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        theme = this.props.theme;
        this.state = {
            contentAreaAnimation: new Animated.Value(0),
            scrollEnabled: true
        } 
    }

    componentDidMount(){
        setTimeout(() => _scrollView.scrollTo({y: this.props.theme.homeHGrouperAreaHeight, animated: false}), 1);
    }

    theme = null;
    _scrollView = null;
    scrollPostionY = new Animated.Value(0);

    openGrouperArea() {
        Animated.timing(
            this.state.contentAreaAnimation,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }
        ).start(this.setState({ scrollEnabled: false }))
    }

    closeGrouperArea() {
        Animated.timing(
            this.state.contentAreaAnimation,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }
        ).start(this.setState({ scrollEnabled: true }))
    }

    onScrollEndSnapToEdge(ev) {
        const y = ev.nativeEvent.contentOffset.y;
        if (0 < y && y < this.props.theme.homeHGrouperAreaHeight / 2) {
            if (_scrollView) {
                _scrollView.scrollTo({y: 0});
            }
        } else if (this.props.theme.homeHGrouperAreaHeight / 2 <= y && y < this.props.theme.homeHGrouperAreaHeight) {
            if (_scrollView) {
                _scrollView.scrollTo({y: this.props.theme.homeHGrouperAreaHeight});
            }
        }
    };

    showGrouperFilter() {
        _scrollView.scrollTo({y: 0});
    }

    render() {
        let showGrouperFilter = this.showGrouperFilter;
        return (
            <SafeAreaView
                style={{
                    backgroundColor: this.props.theme.colors.accent
                }}
            >
                <HomeScreenHeader
                    showGrouperFilter={this.showGrouperFilter.bind(this)}
                    scrollPostionY={this.scrollPostionY}
                />
                <Animated.ScrollView
                    scrollEnabled={this.state.scrollEnabled}
                    ref={scrollView => {
                        _scrollView = scrollView ? scrollView._component : null;
                    }}
                    onScrollEndDrag={this.onScrollEndSnapToEdge.bind(this)}
                    onMomentumScrollEnd={this.onScrollEndSnapToEdge.bind(this)}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {contentOffset: {y: this.scrollPostionY}},
                            },
                        ],
                        {
                            useNativeDriver: true,
                        }
                    )}
                >
                    <HomeScreenGrouperArea
                        openGrouperArea={this.openGrouperArea.bind(this)}
                        closeGrouperArea={this.closeGrouperArea.bind(this)}
                        style={{
                            transform: [
                                {
                                    translateY: this.scrollPostionY
                                }
                            ]
                        }}
                    />
                    <HomeSalesScreen 
                        scrollPostionY={this.scrollPostionY}
                        style={{
                            transform: [
                                {
                                    translateY: this.state.contentAreaAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, (theme.screen.height - theme.homeHGrouperAreaHeight) - 150],
                                        extrapolate: "clamp"
                                    })
                                }
                            ]
                        }}
                    />
                </Animated.ScrollView>
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: this.state.contentAreaAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 150],
                                    extrapolate: "clamp"
                                })
                            }
                        ]
                    }}
                >
                    <HomeScreenMenuArea/>
                </Animated.View>
            </SafeAreaView>
        )
    }
}

export default withTheme(HomeScreen)