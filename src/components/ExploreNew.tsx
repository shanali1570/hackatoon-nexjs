import React from 'react'
import Image from 'next/image';

const ExploreNew = () => {
  return (
    <div className='w-full px-36 sm:px-8 py-8  flex justify-center items-start relative'>
     
     <h1 className=' h-[50px] w-[399px] transform lg:-rotate-90 -rotate-90 sm:-rotate-90 text-[25px] font-semibold absolute left-0  top-64 '>
              Explore new and popular styles
            </h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-2'>
          {/* Vertical Text and Main Image Section */}
          
          <div className='flex flex-col lg:flex-row items-center  mb-6 lg:mb-0 space-x-2 space-y-2'>
            
 {/* image 01 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/Image3.png"}
              className='w-[350] h-[400] cursor-pointer hover:border-2'
            />

          <div className='flex flex-col items-center justify-center space-y-1' >
          <div className='flex flex-col sm:flex-row items-center  mb-6 lg:mb-0 space-x-1 space-y-1 co'>

          {/* image 02 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/Image4.png"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />

            {/* image 03 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/Image1.png"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />


          </div>

          <div className='flex flex-col sm:flex-row items-center  mb-6 lg:mb-0 space-x-1 space-y-1'>

                  {/* image 04 */}
                  <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/Image9.png"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />

            {/* image 05 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/Image1.png"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />


          </div>
          </div>

          </div>

           
          

          
            
    
          </div>
        </div>

    
    
  );
}

export default ExploreNew;
