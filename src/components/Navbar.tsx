import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-[#006E81] text-white h-[96px] w-full flex items-center justify-between px-6">
            <div className="flex items-center ml-4">
                <Image
                    src="/assets/logo.png"
                    alt="Suffix Process Solutions Logo"
                    width={120}
                    height={32}
                    className="object-contain"
                    priority
                />
            </div>
            <ul className="hidden md:flex space-x-6 text-[16px] font-medium">
                <li><a href="#" className="hover:text-[#1C9FB7]">Home</a></li>
                <li className="flex items-center space-x-1">
                    <a href="#" className="hover:text-[#1C9FB7]">Solution</a>
                    <ChevronDown className="w-4 h-4" />
                </li>
                <li className="flex items-center space-x-1">
                    <a href="#" className="hover:text-[#1C9FB7]">Insights</a>
                    <ChevronDown className="w-4 h-4" />
                </li>
                <li className="flex items-center space-x-1">
                    <a href="#" className="hover:text-[#1C9FB7]">About us</a>
                    <ChevronDown className="w-4 h-4" />
                </li>
                <li><a href="#" className="hover:text-[#1C9FB7]">Careers</a></li>
            </ul>
        </nav>
    );
}