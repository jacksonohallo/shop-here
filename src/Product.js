import React from 'react'

const Product = ({id, title, image,price,ratings}) => {
  return (
      <div className='product'>
          <p>{title}</p>
          <p className='product__listing'></p>
         <small>$</small>
        <strong>{price}</strong>
        


        </div>
  )
}

export default Product
