import React from 'react';
import { StyleSheet, View, Platform, ActivityIndicator } from 'react-native';
import { Toolbar, ThemeProvider, COLOR,  } from 'react-native-material-ui';

import LockList from './locklist';
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      locks: [],
      loading: true
    }
    
  }
  componentDidMount(){
    getLocks()
  }
  
  getLocks() {
    this.setState({loading:true});
    return fetch('http://192.168.1.72:3000/door')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ locks: responseJson, loading: false })
      })
      .catch((error) => {
        this.setState({ error: error })
      })
  }
  render() {
    console.log(Platform)
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View>
          <Toolbar
            leftElement="menu"
            centerElement="Locked Up"
            rightElement="refresh"
            onRightElementPress={() => this.getLocks()}
          />
          {this.state.loading?<ActivityIndicator/>:<LockList locks={this.state.locks}/>}
        </View>
      </ThemeProvider >
    );
  }
}




const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      paddingTop: Platform.Version === 22 ? 25 : 15,
      height: Platform.Version === 22 ? 75 : 65,
    },
  },
};