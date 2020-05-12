import React from 'react'
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View,Text } from 'react-native';
import {Card} from 'native-base';
import {connect} from "react-redux"
import {additem,removefull,removeitem,success} from "../redux/Card"
import Icon from 'react-native-vector-icons/Feather';
 function Mycards({img,name,price,quantity,add,remove,removefull,success}) {
  function additem() {
add({title:name,price,image:null,id:name})
    
  }  
  function removeitem() {
    remove({id:name})
        
      }  


      function removefullitem() {
        removefull({id:name})
            
          }  
  console.log("render")
  return (

    
            
              
          <Card  style={styles.cont}>
<View style={styles.item1}>
<Image source={img} style={{width:"100%",height:"100%"}}></Image>

</View>
<View style={styles.item1}><Text style={styles.fortext}>{name}</Text></View>

<View style={styles.item2}>
<Icon name="chevron-left" style={styles.arrowl} size={20}
onPress={removeitem}
></Icon>
<Text>{quantity}</Text>
<Icon name="chevron-right" style={styles.arrowr} size={20}
onPress={additem}
></Icon>
  
  </View>
<View style={styles.item5}><Text style={styles.fortext}>{price*quantity}$</Text></View>
<View style={styles.item1}><Icon name="delete" style={styles.delete} size={24}
onPress={removefullitem}
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

  export default connect(null,d)(React.memo(Mycards))