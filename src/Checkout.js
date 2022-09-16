import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    const [{ basket }] = useStateValue();

  return (
      <div className="checkout">
           <img alt="Ads"
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />
        
    </div>
  )
}

export default Checkout
