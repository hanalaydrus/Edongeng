import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  Alert
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
    Alert.alert(
      'UNDUH',
      'Cerita berhasil diunduh.\nUntuk membaca silahkan buka koleksi.',
      [ {text: 'OK', onPress: () => this.setState({hideCard: !this.state.hideCard}) } ]
    );
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
            status= 'UNDUH'
            statusStyle= {styles.textUnduhBuka}
            onBukaUnduhPress={this.onButtonPress}
            hideCard = {this.state.hideCard ? styles.notHide : styles.hide}
          />
          <CardCerita
            tanggal= '11 Februari 2017'
            judul= 'Telaga Biru'
            gambar= {<Image source={require('../img/TelagaBiru.jpg')} />}
            status= 'UNDUH'
            statusStyle= {styles.textUnduhBuka}
            cardStyle= {this.state.hideCard ? styles.cardMargin : null}
          />
          <CardCerita
            tanggal= '10 Februari 2017'
            judul= 'Sangkuriang'
            gambar= {<Image source={require('../img/Sangkuriang.jpg')} />}
            status= 'UNDUH'
            statusStyle= {styles.textUnduhBuka}
            cardStyle= {styles.cardMargin}
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
    color: '#9B26AF'
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
