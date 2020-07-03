import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import onbo from "../assets/back.png"
class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
       
        <StatusBar hidden />
        <Block flex center>
       
       
       
        </Block>
        <Image source={onbo} style={styles.logo}></Image> 
        <Block flex space="between" style={styles.padded}>
      
            <Block flex space="around" style={{ zIndex: 2}}>
           
              
              <Block center>
                <Button
                  style={styles.button}
                  color={"error"}
                  onPress={() => navigation.navigate("App")}
                  textStyle={{ color:"white" }}
                >
              SPEISEKARTE
                </Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    display:"absolute",
    bottom:50,
    width: "100%",
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: 'absolute',
   
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  },
  onbo:{
    width:200,
    height:200,
    zIndex: 3,
  }
});

export default Onboarding;
