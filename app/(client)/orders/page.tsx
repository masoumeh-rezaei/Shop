import {  requiredUser } from '@/hooks/requiredUser'

import React from 'react'

const OrderPage = async() => {
 await requiredUser()
  return (
    <div>OrderPage</div>
  )
}

export default OrderPage