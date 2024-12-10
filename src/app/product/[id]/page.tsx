"use client"
// app/products/[id]/page.tsx
import { useParams } from 'next/navigation';
import { products } from '../../lib/productData';  // Import the product data
import Image from 'next/image'
import Link from 'next/link'


const Page = () => {
  const { id } = useParams();  // Get the 'id' from the URL params

  // Find the product that matches the 'id'
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found!</div>; // In case the product is not found
  }


  
     // Slice the products array to show only the first 5 products
     const displayedProducts = products.slice(0, 5); // Display only the first 5 products

  return (
    <div className='w-full px-4 sm:px-8 lg:px-32 py-8 mb-48'>


{/* dynamic product single details */}
        <div className='flex flex-col md:flex-row items-start justify-start gap-8'>
        <Image
            width={500}
            height={500}
            alt={product.name}
            src={product.imagelink}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />
        
        <div>
            <div className='w-[500px] space-y-2  pb-6'>
                {/* product name */}
                <h1 className='text-[50px] w-[300px] break-words text-justify'>
                    {product.name}
                </h1>

                <div className='bg-[#029fae] hover:border-2 w-[144px] h-[44px] flex items-center justify-center rounded-3xl'>
                    <span className='text-[20px] text-white'>${product.amount}.00 USD</span>
                </div>
            </div>
            <div className='border-[1px] border-gray-500'/>
            <div className='my-4 space-y-4'>
            <h1 className='text-[20px]'>
                {product.detail}
                </h1>

                <div className='bg-[#029fae] hover:border-2 w-[212px] h-[63px] flex items-center justify-center rounded-lg'>
                    <span className='text-[20px] text-white'>
                      <Link href={"/"}>
                      Add To cart
                      </Link></span>
                </div> 

            </div>
        </div>

        </div>

{/* Featured Product Section */}
        <div className='mt-36 flex justify-between items-center'>
       <h1 className='text-[#272343] text-center lg:text-left text-[32px]  font-inter mb-8'>
       Featured Products
       </h1>
        <p className='text-[18px] hover:underline'><Link href={"/product"}>View All</Link></p>
        
        </div>

        <ul className='mt-14 grid grid-1 sm:grid-cols-2 lg:flex lg:justify-between  lg:gap-6 place-items-center'>
  
          {/* Image 01 */}
          
          {displayedProducts.map((product) => (
          <li key={product.id} className="">

          <div className='space-y-2'>
            <Link href={`/product/${product.id}`} className=''>
            <Image
            width={500}
            height={500}
            alt={product.name}
            src={product.imagelink}
            className='w-full h-auto object-contain  hover:border-[1px]'
          />  
            </Link>
          
          <div className='flex items-center justify-between '>
            <h1 className='text-[#272343] text-[14px]'>{product.name}</h1>
            <span className='font-bold text-[14px]'>{product.amount}</span>
          </div>
            </div>
            </li>
        ))}
          
          
        </ul>

    </div>
  )
}

export default Page