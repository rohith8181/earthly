import React from 'react'

function Img({item,getdata}) {
   // console.log(item);
   const senddata = (item) => {
     return  getdata(item);
   }
  return (
     <li onClick={() => senddata(item)}>
        <img src={item.image} alt={item.alt} />
     </li>
  )
}

export default Img
