import React from 'react';
import {StyleSheet , View, Text} from 'react-native';
import {connect} from 'react-redux';
import {displayAds} from '../actions/index'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

class FetchAdsButton extends React.Component {
  fetchAds = ( ) =>
  {
    this.props.dispatch(displayAds());
  }
  render() {
    return (
      <TouchableOpacity >
        <View style={styles.buttonStyle}>
            <Ionicons name={"ios-refresh"} size={50} onPress={() => this.fetchAds()}/>
        </View>
      </TouchableOpacity>
    );
  }
}
export default connect()(FetchAdsButton);

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#30d0fe',
    height: 70,
    width: 70,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
});