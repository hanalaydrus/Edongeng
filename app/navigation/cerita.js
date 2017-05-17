import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  Button
} from 'react-native';
const Orientation = require('../../node_modules/react-native-orientation');

export default class Cerita extends Component {
    constructor(props) {
      super(props);
    }

  _orientationDidChange = (orientation) => {
    if (orientation == 'LANDSCAPE') {

    } else {

    }
  }

  componentWillMount() {
    //The getOrientation method is async. It happens sometimes that
    //you need the orientation at the moment the js starts running on device.
    //getInitialOrientation returns directly because its a constant set at the
    //beginning of the js code.
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      //do stuff
    } else {
      //do other stuff
    }
  }

  componentDidMount() {
    Orientation.lockToLandscape(); //this will lock the view to Landscape
    Orientation.addOrientationListener(this._orientationDidChange);
  }

  componentWillUnmount() {
    Orientation.getOrientation((err,orientation)=> {
      console.log("Current Device Orientation: ", orientation);
    });
    Orientation.lockToPortrait(); //this will lock the view to Portrait
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="whitesmoke" barStyle="dark-content" />
        <ScrollView>
          <View style={{flex:1, flexDirection:'column',justifyContent:'flex-start'}}>
              <Image source={require('../img/TimunMas/TM1.png')} style={{width: 650,height: 460}}/>
              <Image source={require('../img/TimunMas/TM2.png')} style={{width: 640,height: 430}}/>
              <Image source={require('../img/TimunMas/TM3.png')} style={{width: 650,height: 460}}/>
              <Image source={require('../img/TimunMas/TM4.png')} style={{width: 650,height: 460}}/>
              <Image source={require('../img/TimunMas/TM5.png')} style={{width: 640,height: 420}}/>
              <Image source={require('../img/TimunMas/TM6.png')} style={{width: 640,height: 440}}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
