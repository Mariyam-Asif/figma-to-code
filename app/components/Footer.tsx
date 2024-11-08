import Image from "next/image";
import WhitepaceLogo from "@/public/whitepace-logo.png";
import line from "@/public/Line.png";

export default function Footer() {
  return (
    <footer className="w-[1920px] h-[461px] gap-[200px] pt-[140px] px-[220px] pb-[32px] bg-[#043873] flex justify-center items-center">
      <div className="w-[1480px] h-[289px]">
        {/* Info Div */}
        <div className="w-[1480px] h-[169px] flex justify-center gap-[100px] mb-[80.07px]">
          {/* Logo Description Div */}
          <div className="flex flex-col w-[295px] h-[169px] gap-[15px]">
            <Image
              src={WhitepaceLogo}
              alt="whitepace logo"
              className="w-[191px] h-[34px]"
            />
            <p className="font-normal text-lg text-[#F7F7EE] leading-[30px] tracking-[-0.02em] w-[240px]">
              whitepace was created for <br /> the new ways we live and
              <br />
              work. We make a better workspace around the world
            </p>
          </div>
          {/* Product Info Div */}
          <div className="flex flex-col w-[295px] h-[127px] gap-[15px]">
            <p className="font-bold text-lg text-white leading-[21.78px] tracking-[-0.02em]">
              Product
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-[#FFE492]">
              Overview
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              Pricing
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              Customer stories
            </p>
          </div>
          {/* Resources Div */}
          <div className="flex flex-col w-[295px] h-[130px] gap-4">
            <p className="font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
              Resources
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              Blog
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              Guides & tutorials
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              Help center
            </p>
          </div>
          {/* Company Info Div */}
          <div className="flex flex-col w-[295px] h-[130px] gap-4">
            <p className="font-bold text-lg text-white leading-[21.78px] tracking-[-0.02em]">
              Company
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              About us
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              Careers
            </p>
            <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
              Media kit
            </p>
          </div>
        </div>
        {/* Line */}
        <Image
          src={line}
          alt="divider line"
          className="w-[1480px] h-[1px] mb-[19.93px]"
        />
        {/* Button Div */}
        <div className="w-[1480px] h-5 text-center">
          <p className="font-normal text-base leading-5 tracking-[-0.02em] text-white">
            ©2021 Whitepace LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
