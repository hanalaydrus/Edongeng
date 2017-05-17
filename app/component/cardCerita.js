import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import { Card, Button } from 'react-native-material-design';

export default class CardCerita extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={this.props.hideCard}>
          <Card style={this.props.cardStyle}>
            <Card.Body>
                <Text style={styles.tanggal}>{this.props.tanggal}</Text>
                <Text style={styles.judul}>{this.props.judul}</Text>
            </Card.Body>
              <Card.Media
                  image={this.props.gambar}
                  height={230}
              />
              <View>
                <Card.Actions position="right">
                  <View style={styles.buttonLikeShare}>
                    <View style={{marginRight: 10}}>
                      <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.Ripple('gray',true)}>
                        <View style={styles.like}>
                          <Image source={require('../img/heart.png')} style={styles.icon} />
                          <Text style={styles.tanggal}>100 suka</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                    <View>
                      <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.Ripple('gray',true)}>
                        <View style={styles.share}>
                          <Image source={require('../img/share.png')} style={styles.icon} />
                          <Text style={styles.tanggal}>100 berbagi</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                  </View>

                  <View style={styles.buttonUnduhBuka}>
                    <TouchableNativeFeedback
                      onPress={this.props.onBukaUnduhPress}
                      background={TouchableNativeFeedback.Ripple('gray',true)}>
                      <View>
                        <Text style={this.props.statusStyle}>{this.props.status}</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </Card.Actions>
              </View>
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tanggal: {
    fontSize: 12,
    opacity: 0.8,
  },
  judul: {
    fontSize: 20,
    color: 'black',
  },
  buttonLikeShare: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  like: {
    height: 20,
    margin: 5,
    flex: 1,
    flexDirection: 'row'
  },
  share: {
    height: 20,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    width: 18,
    height: 18,
    marginRight:10,
    opacity:0.4
  },
  buttonUnduhBuka: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
});
