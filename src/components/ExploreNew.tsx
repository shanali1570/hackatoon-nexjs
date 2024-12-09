import React from 'react'
import Image from 'next/image';

const ExploreNew = () => {
  return (
    <div className='w-full lg:ml-8 sm:px-8 py-8   relative'>
     
     <div className="flex flex-col justify-center items-center lg:flex-row lg:-space-x-10 space-y-6 lg:space-y-0">
  {/* Vertical Text and Main Image Section */}
  <div className=" space-y-4  lg:space-y-0 lg:-space-x-16 ">

    {/* Heading positioned to the left of Image 01 */}
    <div className=' absolute  inset-y-0 lg:-rotate-90 rotate-0  font-semibold text-[22px] lg:text-[22px]'>
    <span>
    Explore new and popular styles
  </span>
    </div>
    

    {/* Image 01 */}
    <Image
      width={500}
      height={500}
      alt="Wooden Chair"
      src="/Image3.png"
      className="w-[320px] lg:w-[600px] h-[320px] lg:h-[490px] cursor-pointer hover:border-2"
    />
  </div>

  <div className="flex flex-col  items-center justify-center gap-6  ">
    <div className="flex flex-col sm:flex-row items-center gap-6">
      {/* Image 02 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image4.png"
        className="w-[320px] h-[320px] lg:w-[250px] lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />

      {/* Image 03 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image1.png"
        className="w-[320px] h-[320px] lg:w-[250px] lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />
    </div>

    <div className="flex flex-col sm:flex-row items-center gap-6">
      {/* Image 04 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image9.png"
        className="w-[320px] h-[320px] lg:w-[250px] lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />

      {/* Image 05 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image1.png"
        className="w-[320px] h-[320px] lg:w-[250px] lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />
    </div>
  </div>
</div>



</div>
    
    
  );
}

export default ExploreNew;
