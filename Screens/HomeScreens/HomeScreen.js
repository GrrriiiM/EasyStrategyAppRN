import React from 'react';
import { ScrollView, Dimensions, Animated, View } from 'react-native'
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
    }

    componentDidMount(){
        setTimeout(() => _scrollView.scrollTo({y: this.props.theme.homeHGrouperAreaHeight, animated: false}), 1);
    }

    theme = null;
    _scrollView = null;
    scrollPostionY = new Animated.Value(0);

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
                    // style={{
                    //     flex: 1,
                    //     height: 660
                    // }}
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
                    />
                </Animated.ScrollView>
                <HomeScreenMenuArea/>
            </SafeAreaView>
        )
    }
}

export default withTheme(HomeScreen)