import Image from "next/image";
import WhitepaceLogo from "@/public/whitepace-logo.png";

export default function Navbar(){
    return (
        <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
            <div className="w-[191px] h-[34px]">
                <Image src={WhitepaceLogo} alt="Whitepace brand logo on a blue background"/>
            </div>
            <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                <div className="w-[549px] h-[23px]">
                    <ul className="flex flex-row text-white gap-x-8 font-medium text-lg">
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="w-[126px] h-[60px]">
                        <button className="py-4 px-10 rounded-lg bg-[#FFE492] text-[#043873]">Login</button>
                    </div>
            </div>
        </div>
    )
}