import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/tezuka-logo.png"
            alt="tezuka logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[30px] font-semibold">
          Tezuka{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28e7b4] to-[#e6ee92ef]">
            {" "}
            NFT{" "}
          </span>
        </h1>
      </div>

    </div>
  );
};

export default Navbar;
