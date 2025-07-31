import { Search, Facebook, Linkedin } from 'lucide-react';

export default function TopStrip() {
    return (
        <div className="bg-gradient-to-r from-[#4FB3B3] to-[#3AA8C1] text-white text-sm px-6 py-2.5 flex justify-between items-center">

            <div></div>


            <div className="flex items-center gap-6">

                <div className="hidden md:flex gap-6">
                    <a href="/events" className="hover:underline transition-all duration-200 hover:opacity-80">
                        Events
                    </a>
                    <a href="/blog" className="hover:underline transition-all duration-200 hover:opacity-80">
                        Blog
                    </a>
                    <a href="/contact" className="hover:underline transition-all duration-200 hover:opacity-80">
                        Contact Us
                    </a>
                </div>

                <div className="flex gap-3 items-center">
                    <button className="hover:opacity-80 transition-opacity duration-200">
                        <Search className="w-4 h-4" />
                    </button>
                    <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}