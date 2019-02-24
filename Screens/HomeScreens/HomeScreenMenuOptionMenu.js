import React from 'react';
import { View } from 'react-native';
import { withTheme, Text, TouchableRipple, IconButton, Subheading, Paragraph } from 'react-native-paper';




class HomeScreenMenuOptionMenu extends React.Component {

    constructor(props){                
        super(props);
    }

    onPress(){
        this.props.onPress();
    }


    render() {
        const { theme } = this.props;
        let area = null;
        if (this.props.selected){
            area = 
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}
            >
                <IconButton 
                    color={theme.colors.white}
                    icon={this.props.iconName}
                    size={50}
                    style={{
                        padding: 0,
                        paddingTop: 20,
                        margin: 0,
                        width: 60
                    }}
                />
            </View>
        } else {
            area = 
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    opacity: 0.7
                }}
            >
                <IconButton 
                    color={theme.colors.white}
                    icon={this.props.iconName}
                    style={{
                        padding: 0,
                        margin: 0
                    }}
                />
                <Paragraph
                    style={{
                        color: theme.colors.white,
                        padding: 0,
                        margin: 0
                    }}
                >
                    {this.props.text}
                </Paragraph>
            </View>
        }
        return (
            <TouchableRipple
                onPress={this.onPress.bind(this)}
                style={{
                    ...this.props.style,
                    height: 60,
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}
            >
                {area}

            </TouchableRipple>
        )
    }
}




export default withTheme(HomeScreenMenuOptionMenu)