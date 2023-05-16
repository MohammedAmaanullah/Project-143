import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
   //create empty movieDetails empty JSON data
   article_data:{}
    };
  }

  componentDidMount() {
    this.getMovie()
  }

  timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs ${minutes} mins`;
  }

  getArticle = () => {
    const url = "http://localhost:5000/get-movie";
    axios
      .get(url)
      .then(response => {
        this.setState()
      })
      .catch(error => {
        console.log(error.message);
      });
  };

//create likedMovie function same as getMovie to get data from url :-http://localhost:5000/liked-movie

  likedArticle=()=>{
    const url = ""
    axios.get(url).then(response=>{
      this.getArticle()
      this.setState({articleDetails:details});
    })
    .catch(error =>{
      console.log(error.message);
    });
  };
//create unlikedMovie function same as getMovie to get data from url :-http://localhost:5000/unliked-movie
  unlikedArticle =()=>{
    const url = ""
    axios.get(url).then(response=>{
      this.getArticle()
    })
  .catch(error =>{
    console.log(error.message)
  });
  };

//create notWatched function same as getMovie to get data from url :-http://localhost:5000/did-not-watch
  /*notWatched=()=>{

    const url = ""
    axios.get(url).then(response=>{
      this.getMovie()
    })
    .catch(error=>{
      console.log(error.message)
    });
  };*/

  render() {
    const { movieDetails } = this.state;
    if (movieDetails.poster_link) {
      const {
        poster_link,
        title,
        release_date,
        duration,
        overview,
        rating
      } = movieDetails;

      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header
              centerComponent={{
                text: "Movie Recommended",
                style: styles.headerTitle
              }}
              rightComponent={{ icon: "search", color: "#fff" }}
              backgroundColor={"#d500f9"}
              containerStyle={{ flex: 1 }}
            />
          </View>
          <View style={styles.subContainer}>
            <View style={styles.subTopContainer}>
            //add Image component with uri :poster_link
            <Image style={styles.posterImage}source = {{uri:poster_link}}>

            </Image>


            </View>
            <View style={styles.subBottomContainer}>
              <View style={styles.upperBottomContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{`${
                  release_date.split("-")[0]
                } | ${duration}`}</Text>
              </View>
              <View style={styles.middleBottomContainer}>
                <View style={{ flex: 0.3 }}>
                  <AirbnbRating
                    count={10}
                    reviews={["", "", "", "", ""]}
                    defaultRating={rating}
                    isDisabled={true}
                    size={RFValue(25)}
                    starContainerStyle={{ marginTop: -30 }}
                  />
                </View>

                <View style={{ flex: 0.7, padding: 15 }}>
                  <Text style={styles.overview}>{overview}</Text>
                </View>
              </View>
              <View style={styles.lowerBottomContainer}>
                <View style={styles.iconButtonContainer}>
                //add touchable opacity for Icon to click like button
             <TouchableOpacity onPress = {this.likedArticle}>
              <Icon reverse name = {"check"} type = {entypo} size={RFValue(30) }color = {"red"}>
              </Icon>
             </TouchableOpacity>
                  //add Icon Component


 //add touchable opacity for Icon to click unlike button
             <TouchableOpacity onPress = {this.unlikedArticle}>
             <Icon reverse name={"cross"} type={entypo} size={RFValue(30)} color={"blue"}>
             </Icon>
             </TouchableOpacity>
                  //add Icon Component

             

                </View>
                <View style={styles.buttonCotainer}>
                
 //add touchable opacity for Icon to click not watched button
             /*<TouchableOpacity onPress = {this.notWatched}>
            <Icon reverse name={"cross"} type={entypo} size={RFValue(30)} color={"yellow"}>
            </Icon> 
             </TouchableOpacity>
                  //add Icon Component*/

                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 0.1
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(18)
  },
  subContainer: {
    flex: 0.9
  },
  subTopContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  posterImage: {
    width: "60%",
    height: "90%",
    resizeMode: "stretch",
    borderRadius: RFValue(30),
    marginHorizontal: RFValue(10)
  },
  subBottomContainer: {
    flex: 0.6
  },
  upperBottomContainer: {
    flex: 0.2,
    alignItems: "center"
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    fontSize: RFValue(14),
    fontWeight: "300"
  },
  middleBottomContainer: {
    flex: 0.35
  },
  overview: {
    fontSize: RFValue(13),
    textAlign: "center",
    fontWeight: "300",
    color: "gray"
  },
  lowerBottomContainer: {
    flex: 0.45
  },
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonCotainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: RFValue(160),
    height: RFValue(50),
    borderRadius: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginTop: RFValue(15)
  },
  buttonText: {
    fontSize: RFValue(15),
    fontWeight: "bold"
  }
});
