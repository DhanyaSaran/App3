
import React,{Component} from 'react';
import {
  View,
  StyleSheet,Text
  } from 'react-native';


  
export default class Asteroid extends Component {
  
   
render()
{
    return(
<View style={{flex:1}}>
    <Text style={styles.text}>NAME: {this.props.name1}</Text>
    <Text style={styles.text}>NASA JPL URL: {this.props.nasa_url}</Text>
    <Text style={styles.text}>Hazardness: {this.props.hazard?'Yes':'No'}</Text>
</View>
    )
}

}


const styles=StyleSheet.create({
    text:{
        fontSize:20,
        color:'orange',

    }
})
