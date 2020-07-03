import React from "react";
import { Image,View,Text,AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {firestore} from "./components/firebase"
import { store, persistor } from './redux/store';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";
import { Images, articles, argonTheme } from "./constants";

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    izin:false,
    allowed:""
  };

fun=async ()=>{

  let cityRef = firestore.collection('giriş').doc('5i5Ipk4uCG9yhytlYYri');
  let getDoc = cityRef.get()
    .then(async doc => {
      if (!doc.exists) {
        console.log('No such document!');
      
   
   
      } else {
        console.log('Document data:', doc.data());

     await AsyncStorage.setItem("allow",doc.data().allow)  
   const a=  await AsyncStorage.getItem("allow")  
console.log("aaaaaaaaaaaaaa",a)
this.setState({allowed:a})

        AsyncStorage.setItem("ss",doc.data().şifre).then(console.log("degisti"))    
  if(!doc.data().izin){
   AsyncStorage.setItem("mertyy121","[]").then(console.log("SİLİNDİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİ"))

  }
       
      }
    })
    .catch(async err => {
      console.log('Error getting document', err);
      const a=  await AsyncStorage.getItem("allow")  
      console.log("aaaaaaaaaaaaaa",a)
      this.setState({allowed:a})
    });
}


componentDidMount() {
 try {
  this.fun() 
 } catch (error) {
   console.log(error)
 }
  
}


  render() {
    console.log(this.state.allowed)
    if (!this.state.isLoadingComplete) {
      console.log("dow")
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {

if(this.state.allowed==="yok"){
  return (

    <Provider store={store}>
    <NavigationContainer>
    <PersistGate persistor={persistor}>
      <GalioProvider theme={argonTheme}>
      
        <Block flex>
          <Screens />
        </Block>
      </GalioProvider>
      </PersistGate>
    </NavigationContainer>
    </Provider>
  );

}else{


  return(  <View><Text style={{margin:50,fontSize:50}}>{this.state.allowed}</Text></View>)





}

     
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
