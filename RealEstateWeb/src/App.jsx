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
     title : "Home in Merrick Way",
     location : "Merrick Way, Miami,FL 33134,USA",
     Sq: "4300",
     price: "$540,000"
   }
  ];
  const propertyComp2 = [
    {
      title : "Villa in Coral Gables",
      location : "13621 Deering Bay Drive, Coral Gables, USA",
      Sq: "3500",
      price: "$825,000"
    }
   ];
   const propertyComp3 = [
    {
      title : "Villa on Grand Avenue",
      location : "3015 Grand Avenue, Miami, FL, USA",
      Sq: "9300",
      price: "$950,000"
    }
   ];
  return (
    <>
      <MainDiv></MainDiv>
      <EstateDisplay></EstateDisplay>
      <EstateImage component={propertyComp1}> </EstateImage>

    </>
  )
}

export default App
