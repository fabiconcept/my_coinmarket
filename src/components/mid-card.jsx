import React from 'react'
import { useSelector } from 'react-redux'
import CardMain from '../extra/card'

const MidCard = () => {
  const data = useSelector(state => state.listing.listFav)

  return (
    <div className='pb-3'>
      <p className="h6 px-4  pt-4">My Top 4</p>

      <div className="midCard">
        {data && data.map(item=>(
          <CardMain 
            key={item.name}
            name={item.name} 
            current_price={item.current_price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default MidCard