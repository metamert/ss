import * as React from 'react';
import {  Image, View,AsyncStorage ,StyleSheet,Text,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Button} from "galio-framework"
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {connect} from "react-redux"
import {additem} from "../redux/Card"


 class ImagePickerExample extends React.Component {
  constructor(p){
    super(p)
    this.state = {
    
      kategoriimage: null,
      ürünimage:null
    };
  }
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  _pickImage2 = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ ürünimage: result.uri });
     
 
      }

   
    } catch (E) {
      console.log(E);
    }
  };










  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ kategoriimage: result.uri });
      
 
      }

     
    } catch (E) {
      console.log(E);
    }
  };

  submit = async ()=>{
  
  const Array=[];

    const value= await AsyncStorage.getItem("mertyy121")
if(value !== null){
  console.log("12")
  console.log(value)
  console.log(JSON.parse(value))
  console.log("12")
const newAll=JSON.parse(value)
newAll.push(
  {
  id:Math.floor(Math.random() * 39000),
  kategoriimage:this.state.kategoriimage,
  ürünimage:this.state.ürünimage
  
  })


const eklenecek=JSON.stringify(newAll)
try {
  await AsyncStorage.setItem("mertyy121",eklenecek)
  Alert.alert("eklendi1")
  this.props.add(newAll)
} catch (error) {
// Error saving data
console.log("error 95")
Alert.alert("error")
}



}else{
Array.push({
  id:Math.floor(Math.random() * 39000),
  kategoriimage:this.state.kategoriimage,
  ürünimage:this.state.ürünimage
  
  })
const sArray = JSON.stringify(Array)

  try {

    const sonuc=await AsyncStorage.setItem("mertyy121",sArray)
    Alert.alert("eklendi11")
    this.props.add(Array)
  } catch (error) {
  // Error saving data
  Alert.alert("error")
  console.log("error 95")
  }
  


}




  }

  render() {
    let { image,getir } = this.state;

    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Button style={{margin:30}} onPress={this._pickImage} >Kategori resmi seç</Button>
        <Button   onPress={this._pickImage2} > Ürün resmi seç</Button>
      {this.state.ürünimage&&this.state.kategoriimage&& <Button style={{margin:30}} color="error"  onPress={this.submit} > Ekle</Button>}
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  
  but:{
    marginTop:20
  }
});

const d=(dispatch)=>({
  add:(item)=>dispatch(additem(item)),
 
  
  })
  
  const s=(state)=>(
    {
    obj1:state.cart.cartItems
    }
    )
  
    export default connect(s,d)(ImagePickerExample)