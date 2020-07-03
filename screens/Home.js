import React from 'react';
import { StyleSheet, Dimensions, ScrollView ,Alert,ToastAndroid,Text} from 'react-native';
import { Block, theme,Button} from 'galio-framework';
import {connect} from "react-redux"

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  compare( a, b ) {
    if ( a.nr < b.nr ){
      return -1;
    }
    if ( a.nr > b.nr ){
      return 1;
    }
    return 0;
  }


  renderArticles = () => {
    return (

    
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
       
        <Block >
{this.props.obj1.sort(this.compare).map(item=>  <Card key={item.id} item={item} style={styles.card}  />)}
          
        
         
            
       
     
      
        </Block>
      
      </ScrollView>
     
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
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

export default connect(s)(Home);
