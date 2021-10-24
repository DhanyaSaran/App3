import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Asteroid from "./Asteroid";

let val;
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      ast_id:'',
      details: [],
      alldetails:[]
    };
  }

  
  getdetails = (id) => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=OVtH6erpPs8Ma2E1kZMyMHXJEs8hp1i5rlBxQ15b`
    )
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          details: data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount()
  {
    fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    .then((result) => result.json())
    .then((data) => {
      this.setState({
        alldetails: data.near_earth_objects,
      });
    })
    .catch((error) => console.log(error));
  }


  getrandomdetails=()=>{
        let arr=[]  
       for( var x of (this.state.alldetails))
       {
         arr.push(x.id)
       }
       let total=arr.length
       var rand=Math.round(Math.random()*total)
       val=String(arr[rand-1])
      this.getdetails(val)
     
  }

  //sample ID  2000719

  render() {
    if (this.state.details.length === 0) {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.formTextInput}
            placeholder={"Enter asteroid ID"}
            onChangeText={(text) => {
              this.setState({
                ast_id: text,
              });
            }}
            value={this.state.ast_id}
          />

          <TouchableOpacity
           
            onPress={() => this.getdetails(this.state.ast_id)}
            style={styles.button}
          >
            <Text>Get asteroid Details</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => this.getrandomdetails()}
            style={styles.button}
          >
            <Text>Get a random asteroid Details</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (

        <Asteroid
          name1={this.state.details.name}
          nasa_url={this.state.details.nasa_jpl_url}
          hazard={this.state.details.is_potentially_hazardous_asteroid}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: "70%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});
