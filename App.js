import React from 'react';
import { Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer  } from "react-navigation";
import { DefaultTheme, Provider as PaperProvider, Colors} from 'react-native-paper';
import HomeScreen from './easy-strategy';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


const EasyTheme = {
  ...DefaultTheme,
  dark: true,
  cornerRadius: 15,
  homeHGrouperAreaHeight: 250,
  screen: {
    height: Dimensions.get("screen").height
  },
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue800,
    accent: Colors.blue900,
    white: Colors.white
  }
};


const AppNavigator = createStackNavigator({
  Home: {
    screen: () => <PaperProvider theme={EasyTheme}><HomeScreen/></PaperProvider>
  }
}, {
  headerMode: "none"
});

const AppContainer = createAppContainer(AppNavigator);