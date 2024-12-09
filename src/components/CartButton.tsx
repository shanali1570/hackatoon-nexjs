import Link from 'next/link';
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';

const CartButton = () => {
  return (
    
    <Link 
    href={'/'} 
    className='w-[44px] h-[44px] flex items-center justify-center bg-white rounded-md hover:bg-[#029fae]'>
        
    <CiShoppingCart className='w-[28px] h-[23.5px] text-black hover:text-white' />
    </Link>
  )
}

export default CartButton