import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data);
  }
   useEffect(function(){
    getData()
   },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black min-h-screen flex flex-col p-4 text-white'>
      <div className='flex-1 justify-center  overflow-auto flex flex-wrap p-10 gap-5'>
        {printUserData}
      </div>
      <div className='flex gap-6 p-4 justify-center mt-auto'>
        <button
        style={{opacity:index == 1 ? 0.7 : 1, pointerEvents:index == 1 ? 'none' : 'auto'}}
        
         className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >Prev
        </button>
        <h4 className='py-1'>Page {index}</h4>
        <button className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >Next
        </button>
      </div>
    </div>

























































































































































































































































  )
}

export default App