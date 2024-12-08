import React from 'react'
import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';

const FeaturedProduct = () => {
  return (
    <div className='w-full px-4 sm:px-18 lg:px-32 py-8'>
       <h1 className='text-[#272343] text-[32px] font-inter mb-8'>
       Featured Products
       </h1>

        <div className='grid grid-1 md:grid-cols-2 lg:flex  gap-6 justify-center'>
        
        {/* Product 01 */}
        <div className='w-[312px] h-[377px] relative'>
            <div className='flex items-center justify-center rounded-md text-white text-[13px] w-[49px] h-[26px] bg-[#01ad5a] cursor-pointer hover:border-2 absolute left-[20px] top-[40px]'>
                <p>New</p>
            </div>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image1.png"}
                className='w-[312px] h-[312px] object-contain hover:border-2'
            />
            <div className='flex items-center justify-between mt-4'>
                <div>
                    <h1 className='text-[#007580] text-[16px] font-inter'>
                        Library Stool Chair
                    </h1>
                    <span className='text-[#272343] text-[18px] font-inter'>
                        $20
                    </span>
                </div>
                <div className='w-[44px] h-[44px] flex items-center justify-center  hover:bg-[#029fae] rounded-md'>
                    <CiShoppingCart className='w-[28px] h-[23.5px] text-black hover:text-white' />
                </div>
            </div>
        </div>

        {/* Product 02 */}
        <div className='w-[312px] h-[377px] relative'>
            <div className='flex items-center justify-center rounded-md text-white text-[13px] w-[49px] h-[26px] cursor-pointer hover:border-2 bg-[#f5813f] absolute left-[20px] top-[40px]'>
                <p>New</p>
            </div>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image2.png"}
                className='w-[312px] h-[312px] cursor-pointer hover:border-2 object-contain'
            />
            <div className='flex items-center justify-between mt-4'>
                <div>
                    <h1 className='text-[#007580] text-[16px] font-inter'>
                        Library Stool Chair
                    </h1>
                    <span className='text-[#272343] text-[18px] font-inter'>
                        $20
                    </span>
                    <span className='text-[#9a9caa] text-[18px] ml-2 font-inter'>
                        $30
                        <div className='border-[1px] border-[#9a9caa] w-[35px] absolute left-9 bottom-[10px]' />
                    </span>
                </div>
                <div className='w-[44px] h-[44px] flex items-center justify-center hover:bg-[#029fae] bg-white rounded-md'>
                    <CiShoppingCart className='w-[28px] h-[23.5px] text-black hover:text-white' />
                </div>
            </div>
        </div>

        {/* Product 03 */}
        <div className='w-[312px] h-[377px] relative'>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image3.png"}
                className='w-[312px] h-[312px] object-contain hover:border-2'
            />
            <div className='flex items-center justify-between mt-4'>
                <div>
                    <h1 className='text-[#007580] text-[16px] font-inter'>
                        Library Stool Chair
                    </h1>
                    <span className='text-[#272343] text-[18px] font-inter'>
                        $20
                    </span>
                </div>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-white rounded-md hover:bg-[#029fae]'>
                    <CiShoppingCart className='w-[28px] h-[23.5px] text-black hover:text-white' />
                </div>
            </div>
        </div>

        {/* Product 04 */}
        <div className='w-[312px] h-[377px] relative'>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image4.png"}
                className='w-[312px] h-[312px] object-contain hover:border-2'
            />
            <div className='flex items-center justify-between mt-4'>
                <div>
                    <h1 className='text-[#007580] text-[16px] font-inter'>
                        Library Stool Chair
                    </h1>
                    <span className='text-[#272343] text-[18px] font-inter'>
                        $20
                    </span>
                </div>
                <div className='w-[44px] h-[44px] flex items-center justify-center bg-white rounded-md hover:bg-[#029fae]'>
                    <CiShoppingCart className='w-[28px] h-[23.5px] text-black hover:text-white' />
                </div>
            </div>
        </div>

        </div>
    </div>
  );
}

export default FeaturedProduct;
