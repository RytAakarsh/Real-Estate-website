import { useState } from 'react'
import './App.css'
import MainDiv from './Components/MainDiv'
import EstateDisplay from './Components/EstateDisplay'
import EstateImage from './Components/EstateImage'
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  const [count, setCount] = useState(0)
  const propertyComp1 = [
   { 
     image: "https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-488x326.jpg",
     title : "Home in Merrick Way",
     location : "Merrick Way, Miami,FL 33134,USA",
     Sq: "4300",
     price: "$540,000"
   }
  ];
  const propertyComp2 = [
    {
      image: "https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-04-488x326.jpg",
      title : "Villa in Coral Gables",
      location : "13621 Deering Bay Drive, Coral Gables, USA",
      Sq: "3500",
      price: "$825,000"
    }
   ];
   const propertyComp3 = [
    {
      image: "https://modern.b-cdn.net/wp-content/uploads/2020/06/bunglow-01-488x326.jpg",
      title : "Villa on Grand Avenue",
      location : "3015 Grand Avenue, Miami, FL, USA",
      Sq: "9300",
      price: "$950,000"
    }
   ];
    
   
    const btnPressPrev = () => {
     let box = document.querySelector('.propertyContainer');
     let width = box.clientWidth;
     box.scrollLeft = box.scrollLeft - width;
    }

    const btnPressNxt = () => {
      let box = document.querySelector('.propertyContainer');
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
    }
  

  return (     
    <>
      <MainDiv></MainDiv>
      <EstateDisplay></EstateDisplay>
      
    
      <div className="propertyBox">

    
    <div className="propertyCarousel">
    <button className='btnPre' onClick={btnPressPrev}> <i class="fa-solid fa-caret-left" style={{color: "#0d0f11"}}></i> </button>
    <button className='btnNxt' onClick={btnPressNxt}> <i class="fa-solid fa-caret-right" style={{color: "#0d0f11"}}></i> </button>
    </div>
  
      <div className="propertyContainer">
      <EstateImage component={propertyComp1}> </EstateImage>
      <EstateImage component={propertyComp2}></EstateImage>
      <EstateImage component={propertyComp3}></EstateImage>
      <EstateImage component={propertyComp1}> </EstateImage>
      <EstateImage component={propertyComp2}></EstateImage>
      <EstateImage component={propertyComp3}></EstateImage>
      </div>

    </div>


    
    
    </>
  )
}

export default App
