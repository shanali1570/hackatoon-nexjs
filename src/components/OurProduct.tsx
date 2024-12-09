
import React from 'react'
import Image from 'next/image';
import CartButton from './CartButton';

const OurProduct = () => {
  return (
    <div className='w-full px-4 sm:px-8 lg:px-32 py-8'>
       <h1 className='text-[#272343] text-center text-[32px] font-inter mb-8'>
       Our Products
       </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
        
        
        
        {/* Product 01 */}
        <div className=' relative'>
            <div className='flex items-center justify-center rounded-md text-white hover:border-2 cursor-pointer text-[13px] w-[49px] h-[26px] bg-[#01ad5a] absolute left-[20px] top-[40px]'>
                <p>New</p>
            </div>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image1.png"}
                className='w-[320px] h-[320px]  object-contain cursor-pointer hover:border-2 '
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
                <CartButton/>
            </div>
        </div>

        {/* Product 02 */}
        <div className='relative'>
            <div className='flex items-center justify-center rounded-md hover:border-2 cursor-pointer text-white text-[13px] w-[49px] h-[26px] bg-[#f5813f] absolute left-[20px] top-[40px]'>
                <p>New</p>
            </div>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image2.png"}
                className='w-[320px] h-[320px]  object-contain cursor-pointer hover:border-2'
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
                <CartButton/>
            </div>
        </div>

        

        
        {/* Product 03 */}
        <div className=' relative'>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image3.png"}
                className='w-[320px] h-[320px]  object-contain cursor-pointer hover:border-2'
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
                <CartButton/>
            </div>
        </div>


        {/* Product 04 */}
        <div className='relative'>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image4.png"}
                className='w-[320px] h-[320px]  object-contain cursor-pointer hover:border-2'
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
                <CartButton/>
            </div>
        
        
        
        </div>





        
        {/* Product 05 */}
        <div className=' relative'>
            <div className='flex items-center justify-center hover:border-2 cursor-pointer rounded-md text-white text-[13px] w-[49px] h-[26px] bg-[#01ad5a] absolute left-[20px] top-[40px]'>
                <p>New</p>
            </div>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image11.png"}
                className='w-[320px] h-[320px] object-contain cursor-pointer hover:border-2'
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
                <CartButton/>
            </div>
        </div>

        {/* Product 06 */}
        <div className=' relative'>
            <div className='flex items-center hover:border-2 cursor-pointer justify-center rounded-md text-white text-[13px] w-[49px] h-[26px] bg-[#f5813f] absolute left-[20px] top-[40px]'>
                <p>New</p>
            </div>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image12.png"}
                className='w-[320px] h-[320px] object-contain cursor-pointer hover:border-2'
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
                <CartButton/>
            </div>
        </div>

        
        

        {/* Product 07 */}
        <div className=' relative'>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image13.png"}
                className='w-[320px] h-[320px] object-contain cursor-pointer hover:border-2'
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
                <CartButton/>
            </div>
        </div>

        {/* Product 08 */}
        <div className=' relative'>
            <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Image14.png"}
                className='w-[320px] h-[320px] object-contain cursor-pointer hover:border-2'
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
                <CartButton/>
            </div>
        </div>
</div>        
    </div>
  );
}

export default OurProduct;
