import React, { Component } from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import Movie from "../components/Movie";
import apikey from "../Key";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Results extends Component {
  state = {
    page: 1,
    loading: true,
  };

  // api f96941dc
  data = {
    API_Adress: `http://www.omdbapi.com/?apikey=f96941dc&s=${this.props.route.params.search}`,
    movies: [],
    totalResults: 0,
  };

  // Navigate to Details
  goToDetails = (imdbID) => {
    this.props.navigation.navigate("Details", {
      imdbID: imdbID,
      navigation: this.props.navigation,
    });
  };

  // Request API Data
  fetchResults(page = this.state.page) {
    const results = fetch(this.data.API_Adress + `&page=${this.state.page}`)
      .then((response) => response.json())
      .then((data) =>
        data.Response === "True"
          ? ((this.data.totalResults = data.totalResults),
            (this.data.movies = [...this.data.movies, ...data.Search]),
            this.setState({
              page: this.state.page + 1,
              loading: false,
            }))
          : data.Error && this.state.page === 1
          ? (alert(data.Error), this.props.navigation.goBack())
          : console.log("No results remaining")
      );
  }

  componentDidMount() {
    this.fetchResults();
  }
  componentDidUpdate() {
    if (this.data.totalResults !== 0) {
      this.props.navigation.setOptions({
        title: `Total Results: ${this.data.totalResults}`,
      });
    }
  }

  render() {
    const movies = this.data.movies;
    return (
      <ImageBackground
        style={styles.background}
      >
        <View style={styles.container}>
          <FlatList
            style={styles.movieList}
            data={movies}    
            keyExtractor={(item, index) => String(index)}        
            renderItem={({ item }) => (
              <Movie
                imdbID={item.imdbID}
                title={item.Title}
                year={item.Year}
                category={item.Type}
                poster={item.Poster}
                goToDetails={this.goToDetails}
              />               
            )}   
            onEndReached={() => this.fetchResults()}
            onEndReachedThreshold={0.5}
          />
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
  resultsContainer: {
    margin: 20,
  },
  container: {
    flex: 1,    
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 55,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 16,
  },
  input: {
    paddingStart: 8,
    paddingVertical: 4,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    borderRadius: 2,
    alignSelf: 'stretch',
    maxWidth: 600,
    color: 'white',
    fontSize: 18,
  },
  noResultsText: { fontSize: 20, textAlign: 'center' },
  movieList: { marginHorizontal: 12 },
  movieContainer: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: 'rgba(200,200,200,0.25)',
    flexDirection: 'row',
    marginVertical: 12,
  },
  movieTitle: {
    color: 'white',
    marginTop: 4,
    fontSize: 22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  movieImage: {
    borderRadius: 10,
    backgroundColor: 'rgba(200,200,200,0.25)',
    width: 80,
    height: 120,
    marginRight: 16,
  },
  movieYear: { color: 'white', fontSize: 14 },
  movieCategory: { color: 'white', fontSize: 14 },
});
