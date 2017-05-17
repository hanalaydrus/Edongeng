import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import CardCerita from '../component/cardCerita';

export default class HomeTerbaru extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCard : true
    }
  }
  onButtonPress = () => {
    this.setState({hideCard: !this.state.hideCard});
  };
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#7A1EA1" barStyle="light-content" />
        <ScrollView>
          <CardCerita
            tanggal= '12 Februari 2017'
            judul= 'Timun Mas'
            gambar= {<Image source={require('../img/TimunMas.jpg')} />}
            status= 'BUKA'
            statusStyle= {styles.textUnduhBuka}
            onBukaUnduhPress={this.props.onBukaPress}
            hideCard = {this.state.hideCard ? styles.hide : styles.notHide}
          />
          <CardCerita
            tanggal= '14 Februari 2017'
            judul= 'Si Singa dan Si Tikus'
            gambar= {<Image source={require('../img/SingaTikus.png')} />}
            status= 'BUKA'
            statusStyle= {styles.textUnduhBuka}
            onBukaUnduhPress={this.onButtonPress}
            cardStyle= {this.state.hideCard ? null : styles.cardMargin}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textUnduhBuka: {
    marginLeft:10,
    marginRight:10,
    marginTop:4,
    marginBottom:5,
    fontSize:16,
    fontWeight:'bold',
    color: 'red'
  },
  cardMargin: {
    marginTop: 1
  },
  hide: {
    display: 'none'
  },
  notHide: {

  }
});
