import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View } from 'react-native';
import { Block, Text, theme ,Button} from 'galio-framework';
import Icon from 'react-native-vector-icons/AntDesign';
import { argonTheme } from '../constants';
import {additem} from "../redux/Card"
import {connect} from "react-redux"
class Card extends React.Component {
  constructor(props) {
    super(props);
    const dimensions =Dimensions.get('window')
    const imageHeight =Math.round(dimensions.width * 9 / 16)
   const imageWidth =dimensions.width
    this.state = {
      toggle: false,
    
 imageHeight :imageHeight,
 imageWidth :imageWidth,
    };
 
  
 
  }

  
  


  render() {


    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];


    return (





      <Block  
     
      
      >
        <TouchableWithoutFeedback  onPress={()=>navigation.navigate("Sepetim",{item:item})}>
          
         
            <Image source={{ uri: item.kategoriimage }} style={{width:"100%",height:this.state.imageHeight,marginBottom:30}} />
          
         
       
        
      
          
        </TouchableWithoutFeedback>
      
      </Block>
  
    
  );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,

    
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
   
   
  },
cardContainer:{
display:"flex",
flexDirection:"row"

},

  cardPrice: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,

    marginTop:8
  },
  imageContainer: {
    
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 140,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

const d=(dispatch)=>({
  add:(item)=>dispatch(additem(item))
})

export default connect(null,d)(withNavigation(Card));