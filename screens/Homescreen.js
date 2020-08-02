import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";

export default class Homescreen extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <ImageBackground
        style={styles.background}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.searchBox}
            placeholder="Type movies or TV shows"
            value={this.state.search}
            onChangeText={(text) =>
              this.setState({
                search: text,
              })
            }
          />
          <TouchableOpacity
            onPress={
              this.state.search.length > 2
                ? () =>
                    this.props.navigation.navigate("Results", {
                      search: this.state.search.trim(),
                      navigation: this.props.navigation,
                    })
                : null
            }
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#0c151d"
  },
  container: {
    justifyContent: "center", 
    flex: 1,
  },

  searchBox: {
    ...Platform.select({
      web: {

      }
    }),
    backgroundColor: "white",
    width: "70%",
    height: "10%",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    borderRadius: 25,
  },

  searchButtonText: {
    ...Platform.select({
      web: {
        width: '10%',
        alignSelf: "center",
      }
    }),
    marginVertical: 20,
    marginHorizontal: 120,
    padding: 10,
    backgroundColor: "#003772",
    color: "white",
    fontSize: 16,
    textAlign: "center",
    borderRadius: 25,
  },
});
