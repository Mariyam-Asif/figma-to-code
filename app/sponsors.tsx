import Image from "next/image";
import AppleLogo from "@/public/apple-logo.png";
import MicrosoftLogo from "@/public/microsoft-logo.png";
import SlackLogo from "@/public/slack-logo.png"
import GoogleLogo from "@/public/google-logo.png"

export default function Sponsors(){
    return (
        <div className="w-[1922px] h-[538px] flex flex-col justify-center items-center gap-[100px]">
            <h1 className="font-bold text-7xl text-[#212529] leading-[87.14px] tracking-[-0.02em] text-center">Our sponsors</h1>
            <div className="w-[1482px] h-[72px] flex justify-between gap-1">
                <Image src={AppleLogo} alt="apple logo" className="w-[55.47px] h-[68px]"/>
                <Image src={MicrosoftLogo} alt="microsoft logo" className="w-[287px] h-[62px]"/>
                <Image src={SlackLogo} alt="slack technologies logo" className="w-[280px] h-[71px]"/>
                <Image src={GoogleLogo} alt="google logo" className="w-[211px] h-[69.81px]"/>
            </div>
        </div>
    )
}