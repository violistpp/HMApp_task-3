import React from 'react';
import {View, StyleSheet,ScrollView,TouchableOpacity , TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdList = ({ ads, delAd, onChangeAd}) => (
    
    <ScrollView style={{ paddingTop: 5 }}>
        {ads.map(ad =>
            

            <View key={ad.id} style={styles.container} >
                <View style={styles.subContainer}>
                    <TextInput 
                        style={styles.textInputStyle}
                        onChangeText = {text =>onChangeAd(text, ad.data.price, ad)}
                        value={ad.data.text}
                    />
                    <TextInput 
                        style={styles.textInputStyle}
                        onChangeText = {text =>onChangeAd(ad.data.text, text, ad)}
                        value={ad.data.price}
                    />
                </View>
                
                <TouchableOpacity onPress={()=> delAd(ad.id)} style={styles.buttonDelete} >
                    <View style={{height:15, alignContent:'center',alignItems:'center'}}>
                        <Ionicons name="ios-close-circle-outline" size={30} style={{color: '#30d0fe', padding:10}}  />
                    </View>
                </TouchableOpacity>
            </View>
        )}
    </ScrollView>
)

export default AdList;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        borderWidth: 5, 
        borderRadius: 10,
        margin: 5
    },
    subContainer: {
        flex: 7,
        flexDirection: 'row',
    },
    buttonDelete: {
        // padding: 15,
        flex: 1,
    },
    textInputStyle: {
        flex: 1,
        padding:10,
        fontSize:20, 
        height: 40, 
        backgroundColor: "#30d0fe"
    }
});