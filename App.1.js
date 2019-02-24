// import React from 'react';
// import { StyleSheet, ScrollView, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer, SafeAreaView  } from "react-navigation";
// import { Appbar, Surface, Button, Title, DefaultTheme, Provider as PaperProvider, Card, Colors, IconButton, Subheading, Headline, Caption, TouchableRipple } from 'react-native-paper';
// import { StackedAreaChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
// import * as shape from 'd3-shape'
// import * as scale from 'd3-scale'

// export default class App1 extends React.Component {
//   render() {
//     return (
//       <AppContainer />
//     );
//   }
// }


// export const EasyTheme = {
//   ...DefaultTheme,
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: Colors.blue700,
//     accent: Colors.blue900,
//   }
// };

// class ButtomHeader extends React.Component {
//   render() {
//     return (
//       <TouchableRipple
//         onPress={() => console.log('Pressed')}
//         style={{
//           backgroundColor: EasyTheme.colors.primary,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center"
//           }}
//         >
//           <IconButton 
//             color={Colors.white}
//             icon="dashboard"
//           />
//           <Text
//             style={{
//               color: Colors.white
//             }}
//           >
//             {this.props.text}
//           </Text>
//         </View>

//       </TouchableRipple>
//     )
//   }
// }

// class HomeHeaderButtom extends React.Component{
//   render(){
//     return (
//       <View 
//         style={{
//           height: 250, 
//           justifyContent: "space-around",
//           alignItems: "stretch",
//           padding: 20
//         }}>
        
//         <ButtomHeader text="GIGA Limão" />
//         <ButtomHeader text="Varejo" />
//         <ButtomHeader text="Todas Categorias" />
//       </View>
//     )
//   }
// }



// class HomeBottomButtom extends React.Component{
//   render(){
//     return (
//       <Surface
//         style={{
//           elevation: 10,
//           position: "absolute",
//           borderTopLeftRadius: 15,
//           borderTopRightRadius: 15,
//           top: 660,
//           left: 0,
//           right: 0,
//           height: 1000,
//           padding: 10,
//           backgroundColor: EasyTheme.colors.accent,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//             alignItems: "flex-start"
//           }}
//         >
//           <ButtonBottom text="Vendas"/>
//           <ButtonBottom text="Produtos"/>
//           <ButtonBottom text="Asistente"/>
//           <ButtonBottom text="Mais"/>
//         </View>      
//       </Surface>
//     )
//   }
// }

// class ButtonBottom extends React.Component {
//   render() {
//     return (
//       <TouchableRipple
//             onPress={() => console.log('Pressed')}
//             style={{
//               width: 60
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "flex-start"
//               }}
//             >
//               <IconButton 
//                 color={Colors.white}
//                 icon="dashboard"
//                 style={{
//                   padding: 0,
//                   margin: 0
//                 }}
//               />
//               <Text
//                 style={{
//                   color: Colors.white,
//                   padding: 0,
//                   margin: 0
//                 }}
//               >
//                 {this.props.text}
//               </Text>
//             </View>

//           </TouchableRipple>
//     )
//   }
// }



// class StackedAreaExample extends React.PureComponent {

//   render() {

//       const data = [
//         {
//             month: 6,
//             a: 0,
//             b: 0,
//             c: 0,
//             d: 0,
//             z: 0,
//         },
//         {
//           month: 7,
//           a: 1342,
//           b: 435,
//           c: 1355,
//           d: 4123,
//           z: 0,
//         },
//         {
//           month: 8,
//           a: 4321,
//           b: 1253,
//           c: 2351,
//           d: 5742,
//           z: 0,
//         },
//         {
//           month: 9,
//           a: 5421,
//           b: 2355,
//           c: 3215,
//           d: 6544,
//           z: 0,
//         },
//         {
//           month: 10,
//           a: 6421,
//           b: 2453,
//           c: 3567,
//           d: 7542,
//           z: 0,
//         },
//         {
//           month: 11,
//           a: 6921,
//           b: 2953,
//           c: 3967,
//           d: 7942,
//           z: 0,
//         },
//         {
//           month: 12,
//           a: 7921,
//           b: 3953,
//           c: 4967,
//           d: 8942,
//           z: 0,
//         },
//         {
//           month: 12,
//           a: 9921,
//           b: 4953,
//           c: 5967,
//           d: 9942,
//           z: 0,
//         },
//         {
//           month: 12,
//           a: 0,
//           b: 0,
//           c: 0,
//           d: 0,
//           z: 9921 + 4953 + 1367 + 9942,
//         },
//         {
//           month: 15,
//           a: 0,
//           b: 0,
//           c: 0,
//           d: 0,
//           z: 50000,
//         },
//       ]

//       const colors = [ Colors.blue500, Colors.red500, Colors.green500, Colors.orange500, Colors.grey100 ]
//       const keys   = [ 'a', 'b', 'c', 'd', 'z' ]

//       return (
//         <View style={ { flexDirection: 'row', height: 200 } }>
//           <StackedAreaChart
//               style={ { flex: 1 } }
//               contentInset={ { top: 10, bottom: 10 } }
//               data={ data }
//               keys={ keys }
//               colors={ colors }
//               xAccessor={ ({ item }) => item.month }
//               curve={ shape.curveLinear }
//           >
//               <Grid/>
//           </StackedAreaChart>
//           <YAxis
//               style={ { position: 'absolute', top: 0, bottom: 0 }}
//               data={ StackedAreaChart.extractDataPoints(data, keys) }
//               contentInset={ { top: 10, bottom: 10 } }
//               svg={ {
//                   fontSize: 8,
//                   fill: 'white',
//                   stroke: 'black',
//                   strokeWidth: 0.1,
//                   alignmentBaseline: 'baseline',
//                   baselineShift: '3',
//               } }
//           />
//           {/* <XAxis
//             data={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
//             formatLabel={ (value, index) => index }
//             contentInset={{ left: 10, right: 10 }}
//             svg={{ fontSize: 10, fill: 'black' }}
            
//           /> */}
//         </View>
//       )
//   }
// }

// export class HomeScreen extends React.Component {

//   constructor(props){
//     super(props);
//   }

//   teste(){
    
//   }

//   render() {
//       return (
//         <PaperProvider theme={EasyTheme}>
//           <SafeAreaView>
//             <Surface style={{elevation: 0}}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   height: 80,
//                   paddingTop: 20,
//                   backgroundColor: EasyTheme.colors.accent,
//                   alignItems: "center",
//                   justifyContent: "space-between"
//                 }}
//               >
//                 <IconButton
//                   color = {Colors.white} 
//                   icon="dashboard"  
//                 />
//                 <Title
//                   style={{
//                     flex: 1,
//                     color: Colors.white
//                   }}
//                 >
//                   EasyStrategy
//                 </Title>
//                 <IconButton 
//                   color = {Colors.white}
//                   icon="dashboard"
//                 />
//               </View>
//             </Surface>
//             <ScrollView
//               style={{
//                 backgroundColor: EasyTheme.colors.accent,
//               }}
//             >
//               <HomeHeaderButtom/>
//               <View
//                 style={{
//                 }}
//               >
//                 <Surface
//                   style={{
//                     backgroundColor: EasyTheme.colors.surface,
//                     elevation: 1,
//                     borderTopLeftRadius: 15,
//                     borderTopRightRadius: 15,
//                     padding: 15,
            
//                   }}
//                 >
//                   <TouchableRipple                  
//                     onPress={() => console.log('Pressed')}
//                   >
//                     <View
//                       style={{
//                         flexDirection: "row"
//                       }}
//                     >
//                       <Title
//                         style={{
//                         }}
//                       >
//                         Resumo Vendas
//                       </Title>
                      
//                       <View
//                         style={{
//                           flexDirection: "row",
//                           flex: 1,
//                           alignItems: "center",
//                           justifyContent: "flex-end"
//                         }}
//                       >
//                         <Title
//                           style={{
//                             padding: 0,
//                             margin: 0
//                           }}
//                         >
//                           Hoje
//                         </Title>
//                         <IconButton                        
//                           icon="keyboard-arrow-down"
//                           style={{
//                             margin: 0
//                           }}
//                         />
//                       </View>
//                     </View>
//                   </TouchableRipple>  
//                 </Surface>
//               </View>
//               <View
//                 style={{
//                   backgroundColor: EasyTheme.colors.background,
//                   height:1000,
//                   padding: 10,
//                 }}
//               >
//                 <View
//                   style={{
//                     flexDirection: "row"
//                   }}
//                 >
//                   <Card
//                     style={{
//                       flex: 1,
//                       marginRight: 5
//                     }}
//                   >
//                     <Card.Content>
//                       <Text>Realizado</Text>
//                       <Headline>R$ 235.654</Headline>
//                     </Card.Content>
//                   </Card>
//                   <Card
//                     style={{
//                       flex: 1,
//                       marginLeft: 5
//                     }}
//                   >
//                     <Card.Content>
//                       <Text>Realizado</Text>
//                       <Headline>R$ 235.654</Headline>
//                     </Card.Content>
//                   </Card>
//                 </View>
                
//                 <Card
//                   style={{
//                     marginTop: 10
//                   }}
//                 >
//                   <Card.Content>
//                     <Title>Realizado X Categorias</Title>
//                     <StackedAreaExample/>
//                   </Card.Content>
//                 </Card>

//               </View>
//             </ScrollView>
//             <HomeBottomButtom/>
//           </SafeAreaView>
//         </PaperProvider>
//       )
//   }
// }


// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// }, {
//   headerMode: "none"
// });

// const AppContainer = createAppContainer(AppNavigator);