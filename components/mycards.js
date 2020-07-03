import React from 'react'
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View,Text ,Alert,AsyncStorage} from 'react-native';
import {Card} from 'native-base';
import {connect} from "react-redux"
import {additem,removefull,removeitem,success} from "../redux/Card"
import Icon from 'react-native-vector-icons/Feather';
 function Mycards(props) {

  function additem() {

    
  }  
  const removeitem= async ()=> {
    
const Array=props.obj1

const newArray=Array.filter(item=>item.id!==props.id)
const sArray = JSON.stringify(newArray)
try {

  const sonuc=await AsyncStorage.setItem("mertyy121",sArray)
  Alert.alert("deleted")
  props.remove(newArray)
} catch (error) {
// Error saving data
Alert.alert("error")

}

    }


      function removefullitem() {
        
            
          }  

  return (

    
            
              
          <Card  style={styles.cont}>
<View style={styles.item1}>
<Image source={{ uri: props.image }} style={{width:"100%",height:"100%"}}></Image>

</View>
  
  <View style={styles.item1}><Text 
  onPress={()=>props.navi.navigate("Add2",{id:props.id,image:props.image})}
  style={styles.fortext2}> Produkt Aktualisieren</Text></View>
  <View style={styles.item1}><Text 
  
  style={styles.fortext2}>nr :{props.nr}</Text></View>

<View style={styles.item1}><Icon name="delete" style={styles.delete} size={24}
onPress={removeitem}
></Icon></View>

          </Card>
       
    
    )
}
const styles = StyleSheet.create({
  
    item1:{
  
  display:"flex",
  justifyContent:"center",
      flex:1,
     
    },
    item5:{
  
      display:"flex",
      justifyContent:"center",
          flex:0.5,
         
        }, 
    
    item2:{
justifyContent:"center" , 
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
          flex:1,
          textAlign:"center",
         marginRight:10
        },
   fortext:{
     textAlign:"center",
   
   
    },
    fortext2:{
        textAlign:"center",
        color:"blue"
      
       },
  delete:{textAlign:"center",color:"red"},
  arrowl:{
color:"red",
marginRight:10
  },
arrowr:{
marginLeft:10

},  
    cont:{
      display:"flex",
      flexDirection:"row",
     height:100
    }
  
  
  });
  

const d=(dispatch)=>({
add:(item)=>dispatch(additem(item)),
remove:(item)=>dispatch(removeitem(item)),
removefull:(item)=>dispatch(removefull(item)),
success:()=>dispatch(success())

})

const s=(state)=>(
  {
  obj1:state.cart.cartItems
  }
  )

  export default connect(s,d)(React.memo(Mycards))