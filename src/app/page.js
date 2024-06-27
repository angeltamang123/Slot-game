'use client'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'


const Lottery = () => {
    const lotteryOptions = ['💥','🍒', '💥', '🍋', '💥', '💥','🍌', '💥', '💥']
  
    const [randomNum, setRandomNum] = useState(null)
    let [isPaused, setIsPaused] = useState(false)
    let [slot, setSlot] = useState(true)

    
   
    useEffect(() => {
          if(!isPaused){
            setTimeout(()=>{
              const tempNum = Math.floor(Math.random() * lotteryOptions.length)
              if(tempNum == randomNum){
                  setRandomNum(randomNum + 1)
                  setSlot(!slot)
              }else{
                  setRandomNum(tempNum)
                  setSlot(!slot)
            }}, 50)
          }
      }, [isPaused, slot ]);
  return (
    <div>
              {lotteryOptions[randomNum] == '💥' ? 'You lost' : 'Congrats you won '+lotteryOptions[randomNum]  }
        <div className='bg-black w-10 m-10'>
            {lotteryOptions.map((item,id)=>{
                return(
                    <div style={{backgroundColor: id ===randomNum ? 'red': null}} className='text-4xl text-white rounded-sm my-4'>
                       {item}
                    </div>
                )
            })}
        </div>
        <Button onPress={()=>setIsPaused(!isPaused)} className='m-6'>Pause</Button>
        
    </div>
  )
}

export default Lottery