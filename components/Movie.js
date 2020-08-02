import React, {Component} from "react";
import { 
  Text, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Image,
  FlatList,
} from "react-native";

export default class Movie extends Component {

  //Callback function 
  goToDetails = this.props.goToDetails

  render() {
    return (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => this.goToDetails(this.props.imdbID)}
        >
        <View style={styles.imageContainer}>
          <Image 
            style={styles.movieImage} 
            source={{uri: this.props.poster}}>        
          </Image>
          <View style={{ width: '60%', alignSelf: 'stretch' }}>
            <Text style={styles.movieTitle}> {this.props.title} </Text>
            <Text style={styles.movieYear}> { `Year: ${this.props.year}` } </Text>
            <Text style={styles.movieCategory}>{`Category: ${this.props.category}`}</Text>
          </View>
        </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  movieContainer: {
    backgroundColor: "black",
    margin: 15,
  },
  titles: {
    alignSelf: "stretch",
    textAlign: "center",
    marginTop: 55,
    fontSize: 28,
    fontWeight: "bold",
    color: "white",    
  },
  noResultsText: { fontSize: 16, textAlign: 'center' },
  movieList: { marginHorizontal: 12 },
  imageContainer: {
    borderRadius: 10,
    padding: 8,
    backgroundColor: 'rgba(200,200,200,0.25)',
    flexDirection: 'row',
    marginVertical: 12,
  },
  movieTitle: {
    color: "white",
    marginTop:4,
    fontSize:22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height:1},
    textShadowRadius: 10,

  },

  movieImage: {
    borderRadius: 10,
    backgroundColor: 'rgba(200,200,200,0.25)',
    width: 80,
    height: 120,
    marginRight: 16,
  },

  movieYear: { 
    color: 'white', 
    fontSize: 14, 
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height:1},
    textShadowRadius: 10,
  },

  movieCategory: { 
    color: 'white', 
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height:1},
    textShadowRadius: 10,
  },
});
