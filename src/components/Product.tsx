import Link from 'next/link';
import Image from 'next/image';
import CartButton from './CartButton';
import { products } from '../app/lib/productData';  // Import the products data

const Product = ({num=products.length}:{num?: number}) => {
  
  // Slice the products array to show only the first 5 products
  const displayedProducts = products.slice(0, num); // Display only the first 5 products

  return (
    <div className='' >
      
    
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'  >
      {displayedProducts.map((product) => (
        <li key={product.id} className="product-item">
          
               {/* Product 01 */}
   <    div className='w-[250px] h-[377px] relative'>
       <div className= {`${product.newbtn} bg-[${product.newbtncol}] flex items-center justify-center rounded-md cursor-pointer hover:border-2 text-white text-[13px] w-[49px] h-[26px]  absolute left-[20px] top-[40px]`}>
           <p>New</p>
       </div>
       <Link href={`/product/${product.id}`}>
       <Image
           width={500}
           height={500}
           alt={product.name}
           src={product.imagelink}
           className='w-[312px] h-[312px] object-contain cursor-pointer hover:border-2'
       />
       </Link>
       
       <div className='flex items-center justify-between mt-4'>
           <div>
               <h1 className='text-[#007580] text-[16px] font-inter'>
                   {product.name}
               </h1>
               <span className='text-[#272343] text-[18px] font-inter'>
                   {product.amount}
               </span>
               <span className={`${product.delline} text-[#9a9caa] text-[18px] ml-2 font-inter`}>
                   {product.delamount}
                   <div className=' border-[1px] border-[#9a9caa] w-[35px] absolute left-9 bottom-[10px]' />
               </span>
           </div>
           <CartButton/>
       </div>
        </div>



        </li>
      ))}
    </ul>
  </div>
  )
}

export default Product