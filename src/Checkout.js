import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'

const Checkout = () => {
    const [{ basket }] = useStateValue();

  return (
      <div className='checkout'>
          <img alt="Ads"
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          {basket?.length === 0 ? (
              <div>
                  <h2> Your Shopping basket is empty</h2>
        <p>You have no items in your basked. To buy one or more items, click "Add to basket" next to the item.
                    </p>  
              </div> 
          ):(
                  <div>
                <h2>Your Shopping Basket</h2>
               </div>   
         )};          
      </div>
  )
}

export default Checkout