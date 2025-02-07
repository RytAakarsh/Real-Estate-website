import { useState } from 'react'
import './App.css'
import MainDiv from './Components/MainDiv'
import EstateDisplay from './Components/EstateDisplay'
import EstateImage from './Components/EstateImage'
import '@fortawesome/fontawesome-free/css/all.css';
import SpecialContainer from './Components/specialContainer'
import AgentsDisplay from './Components/AgentsDisplay'

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
    
   const component1 = [
    {
      Heading1: "Recent",
      Heading2: "Properties",
      Para: "Checkout our some of our latest properties"
    }
 ]
 const component2 = [
    {
      Heading1: "Featured",
      Heading2: "Properties",
      Para: "View list of our short listed properties"
    }
 ]
 const component3 = [
  {
    Heading1: "Meet",
    Heading2: "Our Agents",
    Para: "Get in touch with our real estate experts"
  }
 ]

 const SPcomponent1 = [
  {
    image: "https://modern.b-cdn.net/wp-content/uploads/2020/06/exterior-00-818x417.jpg",
    title: "Home in Coral Gables",
    para: "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef’s kitchen opening to…",
    Sq: "3800",
    price: "$850,000"
  }
 ];
 const SPcomponent2 = [
  {
    image: "https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-818x417.jpg",
    title: "Home in Merrick Way",
    para: "Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace…",
    Sq: "4300",
    price: "$540,000"
  }
 ];
 const SPcomponent3 = [
  {
    image: "https://modern.b-cdn.net/wp-content/uploads/2020/06/bunglow-01-818x417.jpg",
    title: "Villa on Grand Avenue",
    para: "Spacious and fabulous home in a prime location. This executive style four bed, four bath home has impact-resistant windows, renovated…",
    Sq: "9350",
    price: "$990,000"
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
  
    const btnPressLeft = () => {
      console.log("left click")
      document.querySelectorAll('.specialContainer').forEach(box => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width; 
    });
    }
    const btnPressRight = () => {
      console.log("right Click")
      document.querySelectorAll('.specialContainer').forEach(box => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width; 
    });
    }

    const agent1 = [
      {
        image: "https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-3-210x210.jpg",
        Name: "James Rich",
        Number: "+01-998-87733",
        Mail: "jamesrich@gmail.io",
        Num: "3"
      }
    ]
    const agent2 = [
      {
        image: "https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-210x210.jpg",
        Name: "Melissa William",
        Number: "+01-523-45223",
        Mail: "melisa@gmail.io",
        Num: "5"
      }
    ]
    const agent3 = [
      {
        image: "https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-4-210x210.jpg",
        Name: "Alice Brian",
        Number: "+01-786-64234",
        Mail: "brianalice@gmail.io",
        Num: "6"
      }
    ]
    const agent4 = [
      {
        image: "https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-male-00-210x210.jpg",
        Name: "John David",
        Number: "+01-653-57728",
        Mail: "johndavid@gmail.io",
        Num: "5"
      }
    ]

  return (     
    <>
      <MainDiv></MainDiv>
      <EstateDisplay Display={component1}></EstateDisplay>
      
    
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

    <EstateDisplay Display={component2}></EstateDisplay>
  
  
    
    <div className="specialProperty">

     <button className='SPpre'onClick={btnPressLeft} > <i class="fa-solid fa-caret-left" style={{color: "#0d0f11"}}></i>  </button>
     <button className='SPnxt'onClick={btnPressRight} > <i class="fa-solid fa-caret-right" style={{color: "#0d0f11"}}></i>  </button>

    <div className="specialContainer">
     <SpecialContainer component={SPcomponent1}></SpecialContainer>
     <SpecialContainer component={SPcomponent2}></SpecialContainer>
     <SpecialContainer component={SPcomponent3}></SpecialContainer>
    </div>
    </div>

    <EstateDisplay Display={component3} className="displayComponent3"></EstateDisplay>
    <div className="topAgents">
      <AgentsDisplay component={agent1}></AgentsDisplay>
      <AgentsDisplay component={agent2}></AgentsDisplay>
      <AgentsDisplay component={agent3}></AgentsDisplay>
      <AgentsDisplay component={agent4}></AgentsDisplay>
    </div>
    </>
  )
}

export default App
