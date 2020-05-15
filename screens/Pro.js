import React from 'react';
import { StyleSheet, Dimensions, ScrollView ,Alert,ToastAndroid,Text,Image,ImageResolvedAssetSource} from 'react-native';
import { Block, theme,Button} from 'galio-framework';

import img from "../assets/imgs/menu.jpeg"
import Card from '../components/kategoricard';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
 
 
        constructor(props) {
          super(props);
        
       
        this.state={
            imgWidth:0, imgHeight: 0

        }
       
        
       
        }
        componentDidMount() {
const {width,height}=Image.resolveAssetSource(img)
const screenWidth = Dimensions.get('window').width
const scaleFactor = width / screenWidth
const imageHeight = height / scaleFactor

              
              this.setState({imgWidth:screenWidth, imgHeight: imageHeight})

          
          }

 

  render() {
  
    
    return (
      <Block flex center style={styles.home}>
           <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
      <Image source={{ uri: this.props.props.route.params.item.ürünimage }} style={{
width:"100%",
height:this.state.imgHeight

      }}></Image>
      </ScrollView>
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
but:{
  marginBottom:30
}

});

export default Home;
