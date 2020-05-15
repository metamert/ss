import iskender from "../assets/imgs/iskender.jpg"
import salata from "../assets/imgs/salata.png"
import cor from "../assets/imgs/corba.jpg"
import ham from "../assets/imgs/hamburger.png"

export default [
  {
    title: 'Çorba ',
   
    image: cor,
    ürünler:{
      mercimek:{fiyat:10,isim:"mercimek corbası"},
      domates:{fiyat:12,isim:"domates corbası"}
      
         }

  },
  {
    title: 'FastFood',
  
    image: ham,
    ürünler:{
      hamburger:{fiyat:20,isim:"hamburger"},
      patates:{fiyat:22,isim:"patates"}
      
         }
    


  },
  {
    title: 'Sıcak',
  
    image: iskender,
    ürünler:{
      iskender:{fiyat:10,isim:"iskender"},
      lahmacun:{fiyat:12,isim:"lahmacun"}
      
         }
    

  },
  {
    title: 'Salata',
    image: salata,
    ürünler:{
      normal:{fiyat:10,isim:"normal"},
      akdeniz:{fiyat:12,isim:"akdeniz"}
      
         }
   
  },
 
];


