import React from "react";
import { Easing, Animated, Dimensions, AsyncStorage } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Kar from "../components/kategoricard"
import { Block } from "galio-framework";
import {connect} from "react-redux"
import {additem,allow} from "../redux/Card"

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";
import kategoriekle from "../components/kategoriekle";
import { firestore } from "../components/firebase";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator  mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Admin"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Add1"
        component={kategoriekle}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
        <Stack.Screen
        name="Add2"
        component={Kar}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Ürün resmi değiştir"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />   
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    
    </Stack.Navigator>
  );
}
function myCards(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Sepetim"
      
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Sepetim"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      >
        {p=><Pro  props={props}></Pro>}


      </Stack.Screen>
    </Stack.Navigator>
  );
}












 function OnboardingStack(props) {
  React.useEffect(() => {
    
  





    const fetchData = async () => {


      


      const value= await AsyncStorage.getItem("count")
      if(!value){
      
        await AsyncStorage.setItem("count","1")
      
      
      }else{
      if(Number(value)>5){
        console.log("dogruuuuuuuuuuuuuuuu",Number(value)>4)
      console.log("byummmmmmmmmmmmmmmmmummmm",value)
      
      const values=await AsyncStorage.setItem("mertyy121","[]")
      
    }else{
      
        console.log("numberrrrrrrrrrrrrrrrrrrrrrrrr",Number(value))
        
        let s=Number(value)+1
        await AsyncStorage.setItem("count",`${s}`)
      props.allow(true)  
        }}






      const values=await AsyncStorage.getItem("mertyy121")
console.log("valuessssssssssssssssssssssssssssssss",values)
      if(values)
      props.add(JSON.parse(values))    
 
    };
 
    fetchData();
  }, []);

 


 

  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
const d=dispatch=>(
  {
    add:(p)=>dispatch(additem(p)),
    allow:(a)=>dispatch(allow(a))
  }
)
export default connect(null,d)(OnboardingStack)
function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
     
      <Drawer.Screen name="Home" component={HomeStack} />
      
     
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Login" component={Register} />
      <Drawer.Screen name="Sepetim" component={myCards} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
    </Drawer.Navigator>
  );
}

