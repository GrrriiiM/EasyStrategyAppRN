import React from 'react';
import { View } from 'react-native';
import { withTheme, Card, Text, Headline } from 'react-native-paper';
import HomeScreenContentArea from '../HomeScreenContentArea';

class HomeSalesScreen extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { theme } = this.props;

        return (
            <HomeScreenContentArea
                title="Vendas"
                option="Hoje"
                optionIconName="keyboard-arrow-down"
                scrollPostionY={this.props.scrollPostionY}
                style={{
                    ...this.props.style
                }}
            >
                <View
                    style={{
                        flexDirection: "row"
                    }}
                    >
                    <Card
                        style={{
                            flex: 1,
                            marginRight: 5
                        }}
                    >
                        <Card.Content>
                            <Text>Realizado</Text>
                            <Headline>R$ 235.654</Headline>
                        </Card.Content>
                    </Card>
                    <Card
                        style={{
                            flex: 1,
                            marginLeft: 5
                        }}
                    >
                        <Card.Content>
                            <Text>Meta</Text>
                            <Headline>R$ 250.000</Headline>
                        </Card.Content>
                    </Card>
                </View>
            </HomeScreenContentArea>
        )
    }
}

export default withTheme(HomeSalesScreen)