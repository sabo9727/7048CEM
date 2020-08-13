import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, FlatList } from "react-native";

const JustWatch = require('justwatch-api');
export default class Details extends Component {
  state = {
    imdbID: this.props.route.params.imdbID,
    search: this.props.route.params.search,
    movieDetails: {},
    platformName: {},
    movieLocation: [],
    loading: true,    
  };


  async Platform(name) {
  let jw = new JustWatch({locale: 'en_GB'});
  let search = await jw.search({query: name});
  let result = await search.items[0];
  let i;
  let x = result.offers.length;
  const links = [];
  console.log(x);
  for(i = 0; i < x; i++) {    
    links.push(result.offers[i].urls.standard_web);
    this.setState({
      movieLocation: links,
     })            
    }   
    console.log(this.state.movieLocation)   
    const names = this.state.movieLocation;
    let unique = [...new Set(names)];
    console.log(unique);
    this.setState({
      movieLocation: unique,
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



  componentDidUpdate() {
    this.props.navigation.setOptions({ title: this.state.movieDetails.Title });
    
  }

  componentDidMount() {    
    this.fetchDetails();    
    this.Platform(`${this.state.search}`);
    console.log(this.state)
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
              </Text>                   
              <Text style={styles.detailsText}>     
                  <a href={ this.state.movieLocation[0] }>
                    { this.state.movieLocation[0] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[1] }>
                    { this.state.movieLocation[1] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[2] }>
                    { this.state.movieLocation[2] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[3] }>
                    { this.state.movieLocation[3] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[4] }>
                    { this.state.movieLocation[4] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[5] }>
                    { this.state.movieLocation[5] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[6] }>
                    { this.state.movieLocation[6] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[7] }>
                    { this.state.movieLocation[7] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[8] }>
                    { this.state.movieLocation[8] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[9] }>
                    { this.state.movieLocation[9] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[10] }>
                    { this.state.movieLocation[10] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[11] }>
                    { this.state.movieLocation[11] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[12] }>
                    { this.state.movieLocation[12] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[13] }>
                    { this.state.movieLocation[13] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[14] }>
                    { this.state.movieLocation[14] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[15] }>
                    { this.state.movieLocation[15] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[16] }>
                    { this.state.movieLocation[16] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[17] }>
                    { this.state.movieLocation[17] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[18] }>
                    { this.state.movieLocation[18] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[19] }>
                    { this.state.movieLocation[19] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[20] }>
                    { this.state.movieLocation[20] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[21] }>
                    { this.state.movieLocation[21] }
                  </a> {"\n"}
                  <a href={ this.state.movieLocation[22] }>
                    { this.state.movieLocation[22] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[23] }>
                    { this.state.movieLocation[23] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[24] }>
                    { this.state.movieLocation[24] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[25] }>
                    { this.state.movieLocation[25] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[26] }>
                    { this.state.movieLocation[26] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[27] }>
                    { this.state.movieLocation[27] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[28] }>
                    { this.state.movieLocation[28] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[29] }>
                    { this.state.movieLocation[29] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[30] }>
                    { this.state.movieLocation[30] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[31] }>
                    { this.state.movieLocation[31] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[32] }>
                    { this.state.movieLocation[32] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[33] }>
                    { this.state.movieLocation[33] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[34] }>
                    { this.state.movieLocation[34] }
                  </a> {"\n"}  
                  <a href={ this.state.movieLocation[35] }>
                    { this.state.movieLocation[35] }
                  </a> {"\n"}                  
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

  linksText: {
    color: "white",
    fontSize: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

});
