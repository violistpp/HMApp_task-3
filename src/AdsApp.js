import React from 'react';
import { StyleSheet,View } from 'react-native';


import AddAd from './containers/AddAd';
import VisibleAds from './containers/VisibleAds';
import FetchAdsButton from './containers/FetchAdsButton';
import { ScrollView } from 'react-native-gesture-handler';

class AdsApp extends React.Component {

  state = {
    ads: [],
  }

  render() {
    return (
      <View style={styles.container}>
        <AddAd/>

        <ScrollView>
          <View>
            <VisibleAds/>
          </View>

          <View style={{ alignSelf: "center", marginVertical: 20 }}>
            <FetchAdsButton/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AdsApp;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});