import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto lg:mx-28 space-y-4 lg:space-y-0">
        {/* Footer Text */}
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto text-center lg:text-left">
          <p className="text-[14px] font-poppins text-[#9a9caa]">
            © {currentYear} - Blogy - Designed & Developed by&nbsp;
            <strong className="text-black">Zakirsoft</strong>
          </p>
        </div>

        {/* Footer Logo */}
        <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
          <Image
            width={227}
            height={27}
            alt="Footer Logo"
            src="/FooterLogos.png"
            className="w-[180px] lg:w-[227px] h-auto text-[#e1e3e5]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
