import Image from "next/image";
import arrow from "@/public/arrow-vector.png";
import workTogether from "@/public/work-together-image.png";

export default function Management() {
  return (
    <div className="w-[1920px] h-[1588px] top-[921px] py-[140px] px-[220px] ">
     {/* 1st Content */}
      <div className="w-[1480px] h-[547px] flex justify-between items-center">
        <div className="w-[672px] h-[411px]">
            <h1 className="font-bold text-7xl text-[#212529] leading-[87.14px] tracking-[-0.02em] mb-6">Project<br/>Management</h1>
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529] mb-[60px]">Images, videos, PDFs and audio files are supported. Create math expressions and<br/>diagrams directly from the app. Take photos with the mobile app and save them<br/>to a note.</p>
        <button className=" flex items-center w-[201px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] text-white font-medium text-lg leading-[23px] tracking-[-0.02em] gap-[10px]">
Get Started
<Image src={arrow} alt="Arrow icon" className="w-[14px] h-[14px]"/>
        </button>
        </div>
        <div className="w-[748px] h-[547px] bg-[#C4DEFD]">
      </div>
      </div>
      {/* 2nd Content */}
      <div className="w-[1480px] h-[661px] flex justify-between items-center mt-[100px]">
      <div className="w-[710px] h-[661px]">
        <Image src={workTogether} alt="Teamwork and collaboration image"/>
      </div>
      <div className="w-[670px] h-[294px]">
<div className="w-[670px] h-[171px]">
    <h1 className="font-bold text-[#212529] text-7xl leading-[87.14px] tracking-[-0.02em] mb-6">Work together</h1>
    <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529] mb-[60px]">With whitepace, share your notes with your colleagues and collaborate on them.<br/>You can also publish a note to the internet and share the URL with others.
</p>
<button className="flex items-center w-[186px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] font-medium text-lg text-white gap-[10px] leading-[23px] tracking-[-0.02em]">
Try it now
<Image src={arrow} alt="Arrow icon" className="w-[14px] h-[14px]"/>
</button>
</div>
      </div>
      </div>
    </div>
  );
}
