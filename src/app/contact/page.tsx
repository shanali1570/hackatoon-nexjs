import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";

const Page = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-32 py-8">

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center font-bold text-[30px] sm:text-[35px] md:text-[40px]'>Get In Touch With Us</h1>
        <p className='w-full sm:w-[600px] text-[14px] sm:text-[16px] text-center mt-4'>
          For more information about our products & services, please feel free to drop us an email.
          Our staff is always ready to help you out. Do not hesitate!
        </p>
      </div>

      <div className="w-[800px] mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 mt-12">
        {/* Contact Left Side */}
        <div className="space-y-8 flex-1">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl " />
            <div className="w-[250px]">
              <strong>Address</strong>
              <p className="text-sm">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl " />
            <div className="w-[250px]">
              <strong>Phone</strong>
              <p className="text-sm">Mobile: +(84) 546-6789</p>
              <p className="text-sm">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdAccessTimeFilled className="text-xl " />
            <div className="w-[250px]">
              <strong>Working Time</strong>
              <p className="text-sm">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-sm">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Right Side (Form) */}
        <div className="flex-1">
          <form action="#" method="POST" className="mx-auto max-w-xl w-full">
            <div className="">
              
              {/* Name */}
              <div className="mt-2.5 w-full space-y-4" >
                <label htmlFor="first-name" className="block text-sm font-semibold ">Your Name</label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder='Your Name*'
                  className=" block  w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              {/* Email */}
              <div className="mt-2.5 w-full space-y-4">
                <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder='Your Email*'
                  className=" w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              {/* Subject */}
              <div className="mt-2.5 w-full space-y-4">
                <label htmlFor="subject" className="block text-sm font-semibold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder='Subject*'
                  className=" w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-3 mt-2.5 w-full space-y-4">
                <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder='Your Message'
                  className="block w-full rounded-md bg-[#F5F5F5] px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              {/* Button */}
              <div className="sm:col-span-3 mt-6 flex justify-start">
                <div className="bg-[#029fae] rounded-md w-full sm:w-[215px] h-[56px] text-white flex items-center justify-center cursor-pointer hover:bg-[#80a3d8] transition-colors duration-200">
                  <Link href="#">
                    <p className="text-sm font-semibold">Send Message</p>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>


      <div className="w-full px-10 bg-[#f4f4f4] h-[270px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
        
        <div className='flex gap-2'>
            <HiOutlineTrophy className='text-[45px]' />
            <div className='flex flex-col'>
                <strong>High Quality</strong>
                <span className='text-[#898989]'>crafted from top materials</span>
            </div>
        </div>
        
        <div className='flex gap-2'>
            <HiOutlineBadgeCheck className='text-[45px]' />
            <div className='flex flex-col'>
                <strong>Warranty Protection</strong>
                <span className='text-[#898989]'>Over 2 years</span>
            </div>
        </div>

        <div className='flex gap-2'>
            <MdOutlineSupportAgent className='text-[45px]' />
            <div className='flex flex-col'>
                <strong>24 / 7 Support</strong>
                <span className='text-[#898989]'>Dedicated support</span>
            </div>
        </div>
        </div>

    </div>
  );
};

export default Page;
