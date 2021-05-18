import * as React from 'react';
import { View,Text } from 'react-native';

import AppHeader from '../components/AppHeader'


export default class BuzzerScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <Text>Hello World</Text>
      </View>
    )
  }
}