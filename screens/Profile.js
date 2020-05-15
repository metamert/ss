import React from 'react';
import { StyleSheet, Dimensions, ScrollView ,Alert,ToastAndroid,Text} from 'react-native';
import { Block, theme,Button} from 'galio-framework';
import Mycard from "../components/mycards"
import {connect}  from "react-redux"
import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Homes extends React.Component {
 


  renderArticles = () => {
    
    return (

    
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
       
        <Block >
{this.props.obj1.map(item=>  <Mycard key={item.id} image={item.kategoriimage} id={item.id} navi={this.props.navigation} ></Mycard>)}
          
        
         
            
       
     
      
        </Block>
      
      </ScrollView>
     
    )
  }

  render() {

    return (
      <Block flex center style={styles.home}>
       {this.renderArticles()}
<Button onPress={()=>this.props.navigation.navigate("Add1")}>Kategori Ekle</Button>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
 


});

const s=(state)=>(
{
obj1:state.cart.cartItems
}
)
export default connect(s)(Homes);
