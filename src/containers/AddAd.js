import React from 'react';
import {StyleSheet , View,TextInput,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addAd} from '../actions/index'

class AddAd extends React.Component {
  state = {
    text: '',
    price: ''
  }
  addAd = ( text,price ) =>
  {
    this.props.dispatch(addAd(text,price));
    this.setState({ text:'',price:''});
  }
  
  render() {
    return (
        <View style={ styles.container}>
            <TextInput
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                placeholder="title"
                style={styles.inputTextStyle}
            />
            <TextInput
                onChangeText={(price) => this.setState({ price })}
                value={this.state.price}
                placeholder="price"
                style={styles.inputTextStyle}
            />

            <TouchableOpacity onPress={()=> this.addAd(this.state.text,this.state.price)} >
                <View style={styles.uploadButton}>
                    <Ionicons name="ios-checkmark-circle-outline" size={30} style={{color: '#30d0fe', padding:10}}  />
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}
export default connect()(AddAd);

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  inputTextStyle: {
    flex:1,
    borderWidth:1, 
    borderColor:'#30d0fe', 
    backgroundColor: 'white', 
    height: 50, 
    padding:5
  },
  uploadButton: {
    height:50,
    backgroundColor:'white', 
    alignContent:'center',
    alignItems:'center'
  }
});