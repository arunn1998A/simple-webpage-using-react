import React, { useEffect, useState } from 'react'
import Background from './Background';
import Navbar from './Navbar';
import Hero from './Hero';



function App() {

const heroData=[
  {text1:'dive into',text2:'What do you love'},
  {text1:'indulge',text2:'your passions'},
  {text1:'give in to',text2:'Your passions'}

]


const [herocount,setheroCount]=useState(2)
const [playStatus,setPlayStatus]= useState(false)



useEffect(()=>{
  setInterval(() => {
    setheroCount((count)=>{return count ===2?0:count+1})
  }, 3000);
},[])


  return (
    <div>

<Background  playStatus={playStatus} herocount={herocount} />
<Navbar/>
<Hero 
setPlayStatus={setPlayStatus}
heroData={heroData [herocount]  }
herocount={herocount}
setheroCount={setheroCount}
playStatus={playStatus}



/>


 





    </div>
  )
}

export default App