import Image from "next/image"; 
import arrow from "@/public/arrow-vector.png"

export default function Work(){
    return(
        <div className="w-[1921px] h-[574px] bg-[#043873] text-white flex justify-center items-center">
<div className="w-[1481px] h-[294px] flex flex-col justify-center items-center text-center">
    <div className="w-[1064px] h-[171px] mb-[60px]">
        <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-6">Your work, everywhere you are</h1>
        <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] mb-[60px]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and<br/>OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
    </div>
    <button className="flex items-center rounded-md py-5 px-10 bg-[#4F9CF9] font-medium text-lg text-white gap-[10px] leading-[23px] tracking-[-0.02em]">Try Taskey
        <Image src={arrow} alt="arrow icon" className="w-[14px] h-[14px]"/>
    </button>
</div>
        </div>
    )
}