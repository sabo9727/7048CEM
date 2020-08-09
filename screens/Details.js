import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from "react-native";

const JustWatch = require('justwatch-api');
export default class Details extends Component {
  state = {
    imdbID: this.props.route.params.imdbID,
    movieDetails: {},
    platformName: {},
    movieLocation: {},
    loading: true,    
  };


  async Platform(name) {
  let jw = new JustWatch({locale: 'en_GB'});
  let search = await jw.search({query: name});
  let provider = await jw.getProviders();
  let result = await search.items[0];
  /*
  let i;
  let links = [];
  for(i = 0; i < result.offers.length; i++) {    
    links.push(result.offers[i].urls);
    //console.log(links);
    }
  */
    //console.log(provider[0])
    this.setState ({
      platformName: provider[0],      
    })
    this.setState ({
      movieLocation: result.offers[27].urls,
    })
  }


   fetchDetails() {
    const results = fetch(
      `https://www.omdbapi.com/?apikey=f96941dc&i=${this.state.imdbID}`
    )
      .then((response) => response.json())
      .then((data) =>
        data.Response === "True"
          ? this.setState({
              movieDetails: data,
              loading: false,
            })
          : console.log("No results")
      );
  }
  

  componentDidMount() {    
    this.fetchDetails();    
  }
  componentDidUpdate() {
    this.props.navigation.setOptions({ title: this.state.movieDetails.Title });
    this.Platform(`${this.state.movieDetails.Title}`);
  }

  render() {
    return (
      <ImageBackground
        style={styles.background}
      >
        <View style={styles.container}>
          <Image
            source={{
              uri:
                this.state.movieDetails.Poster !== "N/A"
                  ? this.state.movieDetails.Poster
                  : "https://img.freepik.com/free-vector/ycinema-auditorium-with-white-blank-bright-screen_43605-2975.jpg?size=626&ext=jpg",
            }}
            style={styles.poster}
          />
          <ScrollView>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>
                Title: {this.state.movieDetails.Title}
              </Text>
              <Text style={styles.detailsText}>
                Category: {this.state.movieDetails.Type}
              </Text>
              <Text style={styles.detailsText}>
                Released: {this.state.movieDetails.Released}
              </Text>     
              <Text style={styles.detailsText}>
                Language: {this.state.movieDetails.Language}
              </Text>
              <Text style={styles.detailsText}>
                Runtime: {this.state.movieDetails.Runtime}
              </Text> 
              <Text style={styles.detailsText}>
                Available to stream :{"\n"}
                  <a href={ this.state.movieLocation.standard_web }>
                    { this.state.platformName.clear_name }
                  </a>
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#0c151d",
  },
  poster: {
    width: 200,
    height: 200,
    marginTop: 25,
    marginBottom: 20,

    alignSelf: "center",
  },
  detailsContainer: {
    marginHorizontal: 10,
    backgroundColor: "#0c151d",
    alignSelf: "center",
  },
  detailsText: {
    color: "white",
    fontSize: 21,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
