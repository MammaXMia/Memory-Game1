import React from 'react'
import { useState } from 'react';


export const MemoryCard = () => {
  const [isflipped, setIsflipped] = useState(false)
  function clickHandler() {
  
  }
  return (
    <div>
      <div className='MemoryCard'
      onClick={clickHandler}>
        <div className='MemoryCardInner'>
          <div className='MemoryCardBack'>
            <img className='cardBack' src='/images/card-back.png' />
          </div>
          <div classname='MemoryCardFront'>
            ∆
          </div>
        </div>

      </div>
    </div>
  )
}