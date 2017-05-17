/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import HomeTerbaru from './app/navigation/homeTerbaru';
import HomeKoleksi from './app/navigation/homeKoleksi';
import Cerita from './app/navigation/cerita';

const PlayAudio = require('./app/component/playAudio');
const playAudio = new PlayAudio();

const volumeMusik = true;
const volumeNarasi = true;

const setVolMusik = (x) => {
  volumeMusik = x;
}
const setVolNarasi = (x) => {
  volumeNarasi = x;
}

class CeritaScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    playAudio.playMusik();
    playAudio.playNarasi();
  }
  componentWillUnmount() {
    playAudio.stop();
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Timun Mas',
    headerRight : (
      <View style={{flex:1, flexDirection:'row'}}>
        <TouchableNativeFeedback
          onPress={navigation.state.params.onButtonMusikPress}
          background={TouchableNativeFeedback.Ripple('gray',true)}>
          <View style={{ height: 60 }}>
            <Image source={require('./app/img/music.png')} style={{width: 22, height: 23, marginTop:17, marginRight:20, marginLeft:20}} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={navigation.state.params.onButtonNarasiPress}
          background={TouchableNativeFeedback.Ripple('gray',true)}>
          <View style={{ height: 60 }}>
            <Image source={require('./app/img/speaker.png')} style={{width: 24, height: 24, marginTop:16, marginRight:20, marginLeft:15}} />
          </View>
        </TouchableNativeFeedback>
      </View>
    ),
  });

  render() {
    return <Cerita />
  }
}

class HomeTerbaruScreen extends Component {

  render() {
    return <HomeTerbaru/>
  }
}

class HomeKoleksiScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const onBukaPressProps = () => {
      navigate('Cerita',{
        onButtonNarasiPress : () => {
          playAudio.setVolumeNarasi(volumeNarasi == true ? 0 : 1);
          volumeNarasi == false ? setVolNarasi(true) : setVolNarasi(false);
        },
        onButtonMusikPress : () => {
          playAudio.setVolumeMusik(volumeMusik == true ? 0 : 0.3);
          volumeMusik == false ? setVolMusik(true) : setVolMusik(false);
        }
      });
    };
    return <HomeKoleksi onBukaPress={onBukaPressProps}/>
  }
}

const MainScreenNavigator = TabNavigator({
  Terbaru: { screen: HomeTerbaruScreen },
  Koleksi: { screen: HomeKoleksiScreen },
}, {
  tabBarOptions: {
    labelStyle: {
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: '#9B26AF',
    },
    activeBackgroundColor: 'white',
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'E-Dongeng',
  headerStyle: {
    backgroundColor: '#9B26AF',
    elevation: 0,
  },
  headerTintColor: 'white',
  headerRight : (
    <TouchableNativeFeedback
      onPress={this._onPressButton}
      background={TouchableNativeFeedback.Ripple('white',true)}>
      <View style={{ height: 60 }}>
        <Image source={require('./app/img/search.png')} style={{width: 20, height: 20,marginTop:20, marginRight:15, marginLeft:15}} />
      </View>
    </TouchableNativeFeedback>
  ),
};


const Edongeng = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Cerita: { screen: CeritaScreen },
});

AppRegistry.registerComponent('Edongeng', () => Edongeng);
