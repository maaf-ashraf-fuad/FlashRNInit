import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar} from 'react-native';


export default class SearchText extends React.Component {

  render() {
    return (
        <View 
        style={styles.container}>
        <StatusBar barStyle = 'dark-content'>
        </StatusBar>
        <TextInput
        placeholder='FRAME ID / SHELF ID / CORE ID'
        placeholderTextColor='rgba(255,0,0,0.8)'
        returnKeyType='go'
        style={styles.searchinput} 
        autoCapitalize = "none"
        autoCorrect={false}
        />
        <TouchableOpacity style={styles.buttonsearch}
        >
            <Text style={styles.searchText}>SEARCH</Text>
        </TouchableOpacity>
        </View>
    );
}}

const styles = StyleSheet.create({
    container: {
    padding:20
      },
      searchinput:{
          height:40,
          backgroundColor:'rgba(255,0,0,0.2)',
          marginBottom:10,
          color:'white',
          paddingHorizontal:25,
          fontSize:15,
          textAlign:'center',
          borderRadius:10
      },
      searchText:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
        color:'#FFFF',
      },
      buttonsearch:{
        backgroundColor:'#0652DD',
        paddingVertical:10,
        borderRadius:50
      },
    });