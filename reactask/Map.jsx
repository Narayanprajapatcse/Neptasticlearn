import React from 'react'

const Map = () => {
    const data =[
        {id: 1, name:"rahul",price:800},
        {id: 2, name:"rahul",price:800},
        {id: 3, name:"rahul",price:800},
        {id: 4, name:"rahul",price:800}
    ]
  return (
    <div>
       <ul>
        {data.map((product) => (
        <li key={product.id}>
        {product.name} - ${product.price} </li>
     ))}
            </ul>
    </div>
  )
}

export default Map
